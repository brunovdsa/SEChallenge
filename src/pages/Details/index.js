import React, { useEffect, useState } from 'react';
import api from '../../services/api';
import Chart  from '../../components/chart';

export default function Details() {

  const [financialsData, setFinancialsData] = useState([{}]);

  const urlParams = new URLSearchParams(window.location.search);

  const companyInfo = {
    name: urlParams.get('name'),
    symbol: urlParams.get('symbol'),
    price: urlParams.get('price'),
  };

  console.log(companyInfo)

  useEffect(() => {
    async function fetchFinancialsInfo() {
      try {
        const {
          data: { financials },
        } = await api.get(`financials/income-statement/${companyInfo.symbol}?apikey=79b639cc05a3a6033f4e9c71233a74fc`);

        const dates = financials
          .map(data => new Date(data.date).getFullYear())
          .reverse();

        const revenue = financials.map(data => Number(data.Revenue)).reverse();

        const operatingExpenses = financials
          .map(data => Number(data['Operating Expenses']))
          .reverse();
        const consolidatedIncome = financials
          .map(data => Number(data['Consolidated Income']))
          .reverse();
        const EBITDA = financials.map(data => Number(data.EBITDA)).reverse();

        const revenueGrowth = financials
          .map(data => Number(data['Revenue Growth']) * 100)
          .reverse();
        const EBITDAMargin = financials
          .map(data => Number(data['EBITDA Margin']) * 100)
          .reverse();

        setFinancialsData({
          chartOne: {
            labels: dates,
            horizontalLabel: 'Values in $',
            values: [
              {
                name: 'Revenue',
                data: revenue,
                
              },
              {
                name: 'Operating Expenses',
                data: operatingExpenses,
              
              },
              {
                name: 'Consolidated Income',
                data: consolidatedIncome,
            
              },
              {
                name: 'EBITDA',
                data: EBITDA,
              
              },
            ],
          },
          chartTwo: {
            labels: dates,
            horizontalLabel: 'Values in %',
            values: [
              {
                name: 'Revenue Growth',
                data: revenueGrowth,
                
              },
              {
                name: 'EBITDA Margin',
                data: EBITDAMargin,
                
              },
            ],
          },
        });
      } catch (err) {
        alert('Algo deu errado ao buscar as informações');
      }
    }

    fetchFinancialsInfo();
  }, []);

  return (
    <div>
      <Chart
        data={financialsData.chartOne}
        title="Revenue / Operating Expenses / Consolidated Income / EBITDA"
      />

      <Chart
        data={financialsData.chartTwo}
        title="Revenue Growth / EBITDA Margin"
      />
    </div>
  );
}