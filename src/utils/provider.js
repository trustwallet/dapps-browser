import Web3 from 'web3';

const context = (typeof window === 'object') ? window : global;

let provider,
  bundledWeb3;

export function getProvider() {
  if (!provider) {
    if (context.web3 === undefined) {
      // throw Error('this application needs to run in a DApp browser');
      console.log({provider})
      provider = undefined
    } else {
      provider = context.web3.currentProvider;
    }
  }

  return provider;
}

export default function getWeb3() {
  if (!bundledWeb3) {
    // even if web3 is already defined we use the web3 library bundled
    // with the application instead of some unknown version injected by the browser
    bundledWeb3 = new Web3(getProvider());
  }

  return bundledWeb3;
}
