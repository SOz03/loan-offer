import {Component} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {BankService} from '../service/bank.service';
import {Bank} from "../bank/bank";

@Component({
  selector: 'app-bank-form',
  templateUrl: './bank-form.component.html',
  styleUrls: ['./bank-form.component.css']
})
export class BankFormComponent {

  bank: Bank;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private bankService: BankService) {
    this.bank = new Bank();
  }

  onSubmit() {
    this.bankService.save(this.bank).subscribe(() => this.gotoUserList());
  }

  gotoUserList() {
    this.router.navigate(['/filter']);
  }
}
