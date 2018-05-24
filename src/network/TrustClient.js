import axios from 'axios';

const url = 'https://trust-api.herokuapp.com';

export class TrustClient {
  fetchDAppsByCategoryID(id, network) {
    return axios.get(`${url}/dapps/category/${id}?network=${network}`);
  }

  fetchBootstrap(network) {
    return axios.get(`${url}/dapps/main?network=${network}`);
  }
}
