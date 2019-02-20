import axios from 'axios';

const url = 'https://trust-api.herokuapp.com';

export class TrustClient {
  fetchDAppsByCategoryID(id, network, os) {
    return axios.get(`${url}/dapps/category/${id}?network=${network}&os=${os}`);
  }

  fetchBootstrap(network, os) {
    return axios.get(`${url}/dapps/main?network=${network}&os=${os}`);
  }

  simplexQuote(postData) {
    return axios.post(`${url}/simplex/get_quote `, postData);
  }

  simplexPaymentRequest(postData) {
  	return axios.post(`${url}/simplex/payment_request`, postData);
  }

  simplexPaymentForm(postData) {
    return axios.post(`${url}/simplex/payments_form`, postData);    
  }
}
