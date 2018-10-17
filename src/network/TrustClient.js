import axios from 'axios';

const url = 'https://public.trustwalletapp.com';

export class TrustClient {
  fetchDAppsByCategoryID(id, network, os) {
    return axios.get(`${url}/dapps/category/${id}?network=${network}&os=${os}`);
  }

  fetchBootstrap(network, os) {
    return axios.get(`${url}/dapps/main?network=${network}&os=${os}`);
  }
}
