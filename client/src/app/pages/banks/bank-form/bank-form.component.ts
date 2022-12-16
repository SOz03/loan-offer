import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Bank } from 'src/app/models';
import { BankService } from 'src/app/services';

@Component({
  selector: 'app-bank-form',
  templateUrl: './bank-form.component.html',
  styleUrls: ['./bank-form.component.css'],
})
export class BankFormComponent {
  bank: Bank;

  constructor(private router: Router, private bankService: BankService) {
    this.bank = new Bank();
  }

  onSubmit() {
    this.bankService.create(this.bank).subscribe(() => this.gotoUserList());
  }

  gotoUserList() {
    this.router.navigate(['/banks']);
  }
}
