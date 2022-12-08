import { Component, OnInit } from '@angular/core';
import { Bank } from '../bank/bank';
import { BankService } from '../service/bank.service';

@Component({
  selector: 'app-bank-list',
  templateUrl: '../bank-list/bank-list.component.html',
  styleUrls: ['./bank-list.component.css']
})
export class BankListComponent implements OnInit {

  banks: Bank[] | undefined;

  constructor(private bankService: BankService) {
  }

  ngOnInit() {
    this.bankService.findAll().subscribe((data: Bank[] | undefined) => {
      this.banks = data;
    });
  }
}
