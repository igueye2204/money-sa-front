import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from 'src/app/service/token-storage.service';
import { TransactionService } from 'src/app/service/transaction.service';

@Component({
  selector: 'app-commission',
  templateUrl: './commission.page.html',
  styleUrls: ['./commission.page.scss'],
})
export class CommissionPage implements OnInit {

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
