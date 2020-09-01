import apiChart from '../../services/infoApi'

const loadCompany = (dataIds, callback) =>
    apiChart.get(`quote/${dataIds.join(",")}?apikey=79b639cc05a3a6033f4e9c71233a74fc`)
        .then((response) => {
            callback(response);
            return response;
        })
        .catch((error) => {
            console.log(error);
        });
export { loadCompany }