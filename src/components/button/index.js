import React from 'react';
import { useHistory } from "react-router-dom";

  const Button = (props) => {
    let history = useHistory();

    const c = props.companys.map(item => {
        return `company[]=${item}`
    }).join('&')

    return (
        <div className="container-button">
          <button onClick={() => /*history.push(`graphs?${c}`)*/history.push({
                pathname: '/graphs',
                state: { companys: props.companys }
                })}>Compare</button>          
        </div>
    );
  }
  
export default Button;