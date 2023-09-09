import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'imagePipeCustom'
})
export class ImagePipeCustom implements PipeTransform{
    transform(value: string): any {
        console.log("hi");
        return `some-clound`
      }
}