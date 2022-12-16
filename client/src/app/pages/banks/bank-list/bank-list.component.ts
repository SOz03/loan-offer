import { Component, OnInit } from '@angular/core';
import { Bank } from 'src/app/models';
import { BankService } from 'src/app/services';

@Component({
  selector: 'app-bank-list',
  templateUrl: './bank-list.component.html',
  styleUrls: ['./bank-list.component.css'],
})
export class BankListComponent implements OnInit {
  banks: Bank[] = [];

  constructor(private bankService: BankService) {}

  ngOnInit() {
    this.bankService.getAll().subscribe((data?: Bank[]) => {
      this.banks = data || [];
    });
  }
}
