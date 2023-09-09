import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'cityPipeCustom'
})
export class CityPipeCustom implements PipeTransform{
    transform(value: string): string {
        if(value == 'Bavi'){
            return 'Ba Vì'
        }
        return value;
      }
}