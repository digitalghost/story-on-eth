import { Injectable } from '@angular/core';
//import * as W3 from 'web3';
declare let require: any;
declare let window: any;
const Web3 = require('web3'); // tslint:disable-line
//const web3: W3.default = new Web3(new Web3.providers.HttpProvider('http://localhost:8545'));

//const balance = await web3.eth.getBalance('0x...');


//let tokenAbi = require(‘../../../build/contracts/Payment.json’);

@Injectable({
  providedIn: 'root'
})
export class ChainService {

  private _web3Provider: any;
  private _web3:any;
  private _account:string = null;
  private contracts: {};
  constructor() {
    
    if (typeof window.web3 !== 'undefined') {
      this._web3Provider = window.web3.currentProvider;
    } else {
      this._web3Provider = new Web3.providers.HttpProvider('https://mainnet.infura.io/v3/a4fcd22dc2ec4299b5c0afee8dab510e');
    }
    this._web3 = new Web3(this._web3Provider);
    //console.log(this._web3);

  }

  private async getAccount(): Promise<string> {
    if (this._account == null) {
      this._account = await new Promise((resolve, reject) => {
        this._web3.eth.getAccounts((err, accs) => {
          if (err != null) {
            alert('There was an error fetching your accounts.');
            return;
          }
  
          if (accs.length === 0) {
            alert(
              'Couldn\'t get any accounts! Make sure your Ethereum client is configured correctly.'
            );
            return;
          }
          resolve(accs[0]);
        })
      }) as string;
  
      this._web3.eth.defaultAccount = this._account;
    }
  
    return Promise.resolve(this._account);
  }
  public async getUserBalance(): Promise<number> {
    let account = await this.getAccount();
  
    return new Promise((resolve, reject) => {
      let _web3 = this._web3;
      this._web3.eth.getBalance(account, function (err, result) {
        if(err != null) {
          reject(err);
        }
        resolve(_web3.utils.fromWei(result,"ether"));
      });
    }) as Promise<number>;
  }

  public async getInputStrByTxhash(txHash:string): Promise<string> {
  
    return new Promise((resolve, reject) => {
      let _web3 = this._web3;
      this._web3.eth.getTransaction(txHash, function (err, result) {
        if(err != null) {
          reject(err);
        }
        resolve(_web3.utils.hexToUtf8(result.input));
      });
    }) as Promise<string>;
  }

}