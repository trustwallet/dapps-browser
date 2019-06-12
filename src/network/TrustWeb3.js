import getWeb3 from "../utils/provider";
import { getCoinId } from "../utils/utils";

export class TrustWeb3 {

    constructor() {
        this.web3 = getWeb3()
    }

    isTrust = () => {
        console.log("Is trust ", this.web3)
        return this.web3.isTrust
    }

    getNetwork = () => {
        return new Promise((resolve, reject) => {
            this.web3.version.getNetwork((err, networkId) => {
                if (err) {
                    return reject(err)
                } 

                return resolve(getCoinId(parseInt(networkId, 10)))
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