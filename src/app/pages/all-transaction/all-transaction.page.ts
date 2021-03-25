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
  currentPage = 1;
  pageOfItems: Array<any>;

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

  onChangePage(pageOfItems){
    // update current page of items
    this.pageOfItems = pageOfItems;
  }

}
