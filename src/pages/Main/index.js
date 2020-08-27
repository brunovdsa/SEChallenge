import React, { Component } from 'react';
import Button from '../../components/button'
import api from '../../services/api';
import './styles.css';

export default class Main extends Component{
    state = {
        companys:[],
        companysSelected: []
    }

    componentDidMount(){
        this.loadCompanys();
    }

    loadCompanys = async () => {
        const response = await api.get('stock/list?apikey=79b639cc05a3a6033f4e9c71233a74fc');
        
        const LimitedData = response.data.slice(0,30);
        
        this.setState({companys: LimitedData});
    };

    OnChangeCheck = (id) => {

        const {companysSelected} = this.state;
        const companysAdd = companysSelected.find(company => {
            return company === id;                       
        })

        if (companysAdd) {
            this.setState({companysSelected: companysSelected.filter(item => item !== id)})
        } else {
            companysSelected.push(id);
            this.setState({companysSelected});
        }
    }

    render(){
        const { companys, companysSelected } = this.state;
    
        return (
        <div className="container">
            <h2 className="stock-title">Stock Exchange Challenge</h2>
                <div className="container-button">
                    <Button companys={companysSelected}/>
                </div>
                    <table id="main-table">
                        <thead>
                            <tr>
                                <td className='td-main'>Symbol</td>
                                <td className='td-main'>Same</td>
                                <td className='td-main'>Price</td>
                                <td className='td-main'>Select</td>
                            </tr>      
                        </thead>                                      
                        <tbody className="container-content">
                            {companys.map(companys =>(
                                <tr key={companys.symbol}>
                                    <td>{companys.symbol}</td>
                                    <td>{companys.name}</td>
                                    <td>${companys.price}</td>
                                    <td>
                                        <label className="checkbox-label">
                                            <input id={companys.symbol} type="checkbox" onChange={(value) => this.OnChangeCheck(companys.symbol, value)}></input>                                
                                            <span className="checkmark"></span>
                                        </label>
                                    </td>
                                </tr>                                                      
                            ))}
                        </tbody>
                    </table>
            </div>
        )
    }
}