import { Pipe, PipeTransform } from '@angular/core';
import { Credit } from '../../models';

@Pipe({
  name: 'creditFilterPipe'
})
export class CreditFilterPipe implements PipeTransform {

  transform(list: Credit[], searchText: string): any {
    if (!list)
      return [];
    if (!searchText)
      return list;
    searchText = searchText.toLocaleLowerCase();

    list = list.filter(s => {
      return s.limitation.toString().includes(searchText);
    });
    return list;

  }

}
