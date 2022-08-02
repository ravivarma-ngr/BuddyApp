import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Transaction } from '../interface/transaction';

@Injectable({
    providedIn: 'root'
  })

export class TransactionService {
    _baseURL: string = "https://localhost:7021/api/Budget";

    constructor(private http: HttpClient) { }

  getAllTransactions(){
    return this.http.get<Transaction[]>(this._baseURL);
  }

  addTransaction(transaction:Transaction  ){
    return this.http.post<string>(this._baseURL,transaction);
  }

  deleteTransation(transactionId: string){
    
    return this.http.delete<string>(this._baseURL +'?transactionId=' + transactionId);
  }
}
