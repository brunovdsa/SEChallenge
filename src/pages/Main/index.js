import React, { Component } from 'react';
import api from '../../services/api';
import './styles.css';

export default class Main extends Component{
    state = {
        Companys:[],
    }

    componentDidMount(){
        this.loadCompanys();
    }

    loadCompanys = async () => {
        const response = await api.get('stock/list?apikey=32b4a3c0e5d089bd7ff4d1937807455a');
        
        const LimitedData = response.data.slice(0,30);
        
        this.setState({Companys: LimitedData});

        console.log(LimitedData);

        console.log(response);
    };

    render(){
        const { Companys } = this.state;
    
        return (
        <div className="container">
            <h2 className="stock-title">Stock Exchange Challenge</h2>
                <table id="main-table">
                    <thead>
                        <tr>
                            <td className='td-main'>Símbolo</td>
                            <td className='td-main'>Nome</td>
                            <td className='td-main'>Preço</td>
                        </tr>      
                    </thead>                                      
                    <tbody className="container-content">
                        {Companys.map(Companys =>(
                            <tr key={Companys.symbol}>
                                <td>{Companys.symbol}</td>
                                <td>{Companys.name}</td>
                                <td>${Companys.price}</td>
                            </tr>                                                      
                        ))}
                    </tbody>
                </table>
            </div>
        )
    }
}