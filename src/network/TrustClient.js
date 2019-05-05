import axios from 'axios';

const url = 'https://trust-api.herokuapp.com';

export class TrustClient {
  fetchDAppsByCategoryID(id, network, os) {
    console.log(`Requesting dApps category for ${network} ${os} ${id}`)
    return axios.get(`${url}/dapps/category/${id}?network=${network}&os=${os}`);
  }

  fetchBootstrap(network, os) {
    console.log(`Bootstrap dApps for ${network} ${os}`)
    return axios.get(`${url}/dapps/main?network=${network}&os=${os}`);
  }
}
