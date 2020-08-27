import apiChart from '../../services/highcharts'

const loadCompany = async (id) => {
    const response = await apiChart.get(`income-statement/${id}?period=quarter&apikey=79b639cc05a3a6033f4e9c71233a74fc`);
    return response.data;
}

export { loadCompany }