import { newArray } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';
import { element } from 'protractor';
import { TokenStorageService } from 'src/app/service/token-storage.service';
import { TransactionService } from 'src/app/service/transaction.service';

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.page.html',
  styleUrls: ['./transaction.page.scss'],
})
export class TransactionPage implements OnInit {

  id: any;
  transaction: any;
  currentPage = 1;
  pageOfItems: Array<any>;

  constructor(private transactionService: TransactionService, private tokenStorage:TokenStorageService) { }

  ngOnInit() {

   this.fetchPosts();
  }

  onChangePage(pageOfItems){
    // update current page of items
    this.pageOfItems = pageOfItems;
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


}
