import React from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
// import { loadCompany } from './companyData'

export default function Chart({ data, title }) {
  const options = {
    chart: {
      type: 'spline'
    },
    title: {
      text: title && typeof title === 'string' ? title : ''
    },
    series: [
      {
        data: data && Array.isArray(data) && data.length > 0 ? data : []
      }
    ]
  };

  return (
    <div className='container'>
      <HighchartsReact
        highcharts={Highcharts}
        options={options}
        constructorType="chart"
      />
    </div>
  );
};