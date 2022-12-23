import {Component, OnInit} from '@angular/core';
import {Credit} from '../../models';
import {AuthService, CreditService} from '../../services';
import {CreditFilter} from "../index";
@Component({
  selector: 'app-credit-list',
  templateUrl: './credit-list.component.html',
  styleUrls: ['./credit-list.component.css'],
})
export class CreditListComponent implements OnInit {
  credits: Credit[] | undefined;
  searchText: string = '';
  // creditFilter = new CreditFilter();

  constructor(private creditService: CreditService, private authService: AuthService) {
  }

  ngOnInit() {
    this.creditService.getAll().subscribe((data: Credit[]) => {
      this.credits = data;
      this.credits.forEach(el => el.show = true)
    });
  }

  // filter(text: string){
  //   if (this.credits != undefined){
  //     return this.creditFilter.transform(this.credits, text);
  //   }
  // }

  get hasEditAccess(): boolean {
    return this.authService.hasEditAccess;
  }

  delete(id: string) {
    this.creditService.delete(id).subscribe((response) => {
      console.log(response);
      if (this.credits !== undefined) {
        this.credits = this.credits.filter(s => {
          return s.id != id;
        });
      }
    });
  }

  search(val: string) {
    this.credits?.forEach(el => {
      el.show = el.limitation.toString().indexOf(val) == -1 ? el.show = false : true
    })
  }

}
