import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'convertToEllipses'
})
export class ConvertToEllipsesPipe implements PipeTransform {

  transform(value: string): string {
    return value.length > 17 ? `${value.substr(0, 17)}...` : value;
  }

}
