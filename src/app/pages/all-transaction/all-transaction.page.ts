import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from 'src/app/service/token-storage.service';
import { TransactionService } from 'src/app/service/transaction.service';

@Component({
  selector: 'app-all-transaction',
  templateUrl: './all-transaction.page.html',
  styleUrls: ['./all-transaction.page.scss'],
})
export class AllTransactionPage implements OnInit {

  id: any;
  transaction: any;
  page = 1;
  count = 0;
  tableSize = 10;

  constructor(private transactionService: TransactionService, private tokenStorage:TokenStorageService) { }

  ngOnInit() {

   this.fetchPosts();
  }

  fetchPosts(){
    this.transactionService.getInfoTransaction().subscribe(
      (data)=>{
        this.transaction = data;
        console.log(data);

      },
      (error)=>{

      }
    )
  }

  onTableDataChange(event: number){
    this.page = event;
    this.fetchPosts();
  }

  onTableSizeChange(event: any): void {
    this.tableSize = event.target.value;
    this.page = 1;
    this.fetchPosts();
  }


}
