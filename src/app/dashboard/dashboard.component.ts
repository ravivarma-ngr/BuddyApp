import { Component, OnInit } from '@angular/core';
import { Transaction } from '../components/interface/transaction';
import { TransactionService } from 'src/app/services/transaction.service';
import { FormGroup, FormControl, Validators,FormBuilder} from '@angular/forms'; 
@Component({
  selector: 'dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  public transactions: Transaction[] | undefined;
  transactionForm!: FormGroup;
  // transactionForm = new FormGroup({  
  //  //category: new FormControl('Select Category')  
  // });
  constructor( 
    private service:TransactionService,
    private fb: FormBuilder,
  ) { 
    this.getAllTransactions();
   }

  ngOnInit(): void {

    this.transactionForm = this.fb.group({
      transactionName: [''],
      transactionType: ['Expense'],
      transactionDate: [''],
      transactionCategory: ['Select Category'],
      transactionAmount: []
    })
  }


  submit(transaction : any){  
    
    this.service.addTransaction(transaction).subscribe(response => {console.log(response);
      this.getAllTransactions();
      this.transactionForm.reset();
     });
  } 

  getAllTransactions(){
        
    this.service.getAllTransactions().subscribe((data:Transaction[]) => {
      this.transactions = data;
      }); 
  }

  deleteTransaction(transactionId : string){
    
    this.service.deleteTransation(transactionId).subscribe(response => {console.log(response);
      this.getAllTransactions();
      
     });
     }
}
