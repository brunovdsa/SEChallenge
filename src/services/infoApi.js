import axios from 'axios';

const apiChart = axios.create(
    {baseURL:'https://financialmodelingprep.com/api/v3/'}
);

export default apiChart;
