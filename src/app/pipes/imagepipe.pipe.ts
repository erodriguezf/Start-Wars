import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'imagepipe'
})
export class ImagepipePipe implements PipeTransform {

  transform(value: number): string {
    return `../../../../assets/IMG/IMG${value}.jpg`;
  }

}
