import getWeb3 from "../utils/provider";


export class TrustWeb3 {

    constructor() {
        this.web3 = getWeb3()
    }

    getNetwork = () => {
        return new Promise((resolve, reject) => {
            this.web3.version.getNetwork((err, networkId) => {
                if (err) {
                    console.log(`Error getNetwork`, err)
                    return reject(err)
                }
                return resolve(parseInt(networkId, 10))
              })
        })
    }

    getChainID = () => {
        return new Promise((resolve, reject) => {
            this.web3.version.getEthereum((err, chainId) => {
                if (err) {
                    console.log(`Error getEthereum`, err)
                    return reject(err)
                }
                
                if (chainId.startsWith("0x")) {
                    return resolve(parseInt(chainId, 16)) 
                }

                return chainId
            })
        })
    }

    getAddress = () => {
        return new Promise((resolve, reject) => {
            this.web3.eth.getAccounts((err, accounts) => {
                if (err) {
                    return reject(err)
                }
                return resolve(accounts[0])
            })
        })
    }

}