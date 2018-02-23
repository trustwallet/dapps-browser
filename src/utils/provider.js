import Web3 from 'web3'

const global = (typeof window === 'object') ? window : global

let provider,
    bundledWeb3

export function getProvider () {
  if (!provider) {
    if (global.web3 === undefined) {
      throw Error('this application needs to run in a DApp browser')
    } else {
      provider = global.web3.currentProvider
    }
  }

  return provider
}

export default function getWeb3 () {
  if (!bundledWeb3) {
    // even if web3 is already defined we use the web3 library bundeld with the application instead of
    // some unknown version injected by the browser
    bundledWeb3 = new Web3(getProvider())
  }

  return bundledWeb3
}
