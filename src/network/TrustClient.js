import axios from 'axios';

const url = 'https://trust-api.herokuapp.com';

export class TrustClient {
  fetchDAppsByCategoryID(id, network, os) {
    return axios.get(`${url}/dapps/category/${id}?network=${network}&os=${os}`);
  }

  fetchBootstrap(network, os) {
    return axios.get(`${url}/dapps/main?network=${network}&os=${os}`);
  }
}
