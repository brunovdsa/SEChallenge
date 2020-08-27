import React, { Component} from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import { loadCompany } from './companyData'

export default class Graphs extends Component {

  state = {
    companys:[]
  }

  async componentDidMount() {
    const companysProps = this.props.location.state.companys;
    const items = []

    const getInfo = async item => {
      const companyLoaded = loadCompany(item)
      items.push(companyLoaded)
    }
     companysProps.map(getInfo);
     this.setState({companys: items})
}

render(){

  console.log(this.state);

  const options = {
    chart: {
      type: 'spline'
    },
    title: {
      text: ''
    },
    series: [
      {
        data: [1, 2, 1, 4, 3, 6]
      }
    ]
  };
  return(
  <div className="container">
    <HighchartsReact highcharts={Highcharts} options={options} />
  </div>
  )
  }
}
