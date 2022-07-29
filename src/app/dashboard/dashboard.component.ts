import { Component, OnInit } from '@angular/core';
import { Transaction } from '../transaction';

@Component({
  selector: 'dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  public transactions: Transaction[]
  constructor() {
    this.transactions = [
      {
        transactionId: "1",
        transactionName: "Salary",
        transactionCategory: "Salary",
        transactionDate:  new Date(),
        transactionType: "Income",
        transactionAmount: 100000
      },
      {
        transactionId: "2",
        transactionName: "Eating out",
        transactionCategory: "Food",
        transactionDate:  new Date(),
        transactionType: "Expense",
        transactionAmount: 540
      },
      {
        transactionId: "3",
        transactionName: "Movies",
        transactionCategory: "Entertainment",
        transactionDate:  new Date(),
        transactionType: "Expense",
        transactionAmount: 1000
      },
    ]
   }

  ngOnInit(): void {
  }


}
