import {Component, ComponentFactoryResolver, OnInit, ViewChild} from '@angular/core';
import {Credit} from '../../models';
import {AuthService, CreditService} from '../../services';
import {CreditFilter, ModalWindow} from "../index";
import { RefDirecive } from './red.directive';
@Component({
  selector: 'app-credit-list',
  templateUrl: './credit-list.component.html',
  styleUrls: ['./credit-list.component.css'],
})
export class CreditListComponent implements OnInit {
  credits: Credit[] | undefined;
  searchText: string = '';
  // creditFilter = new CreditFilter();

  @ViewChild(RefDirecive, { static: false })
  refDir!: RefDirecive;

  constructor(private creditService: CreditService, private authService: AuthService, private resolver: ComponentFactoryResolver) {
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

  edit(credit: Credit) {
    const modalFactory = this.resolver.resolveComponentFactory(ModalWindow)
    this.refDir.containerRef.clear()

    const component = this.refDir.containerRef.createComponent(modalFactory)
    component.instance.header = 'Изменить кредит'
    component.instance.credit = credit
    component.instance.close.subscribe(() => {
      this.refDir.containerRef.clear()
    })
  }

  addCredit() {
    const modalFactory = this.resolver.resolveComponentFactory(ModalWindow)
    this.refDir.containerRef.clear()

    const component = this.refDir.containerRef.createComponent(modalFactory)
    component.instance.header = 'Добавить кредит'
    component.instance.credit = new Credit
    component.instance.close.subscribe(() => {
      this.refDir.containerRef.clear()
    })
  }

}