import getWeb3 from "../utils/provider";


export class TrustWeb3 {

    constructor() {
        this.web3 = getWeb3()
    }

    getNetwork = () => {
        return new Promise((resolve, reject) => {
            this.web3.version.getNetwork((err, networkId) => {
                if (err) {
                    return reject(err)
                }
                return resolve(parseInt(networkId, 10))
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