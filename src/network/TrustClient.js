import axios from 'axios';

const url = 'https://trust-api.herokuapp.com';

export class TrustClient {
  fetchDAppsByCategoryID(id, network) {
    return axios.post(`${url}/v2/dapps/category/${id}`, {
      networks: [network]
    });
  }

  fetchBootstrap(network) {
    return axios.post(`${url}/v2/dapps/main`, {
      networks: [network]
    });
  }
}
