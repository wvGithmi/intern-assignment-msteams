import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'userIconLetter'
})
export class UserIconLetterPipe implements PipeTransform {

  transform(value:string): string {
    return value.slice(0,1);
  }

}
