import React, { Component } from 'react';
import Chart from '../../components/chart'
import { loadCompany } from './companyData'

export default class Graphs extends Component {

  state = {
    companys: []
  }

  componentDidMount() {
    const { companys } = this.props.location.state;
    loadCompany(companys, (response) => {
      console.log(response);
      this.setState({ companys: response.data });
    })
  }
  render() {
    const { companys } = this.state;
    const hasCompanys = companys && Array.isArray(companys) && companys.length > 0;
    console.log('hasCompanys', hasCompanys);
    return (
      <div>
        {
          hasCompanys
            ?
            (companys.map((company, index) => {
              console.log(company)
              return (
                // <p key={`company_${index}`}>Code: {company.symbol}</p>
                <Chart
                  key={`company_${index}`}
                  data={[2, company.price]}
                  title={company.name} />
              );
            }))
            : 'Carregando...'
        }
      </div>
    )
  }
}
