import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'viewMore'
})
export class ViewMorePipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    return null;
  }

}
