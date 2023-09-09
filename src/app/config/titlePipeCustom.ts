import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'titlePipeCustom'
})
export class TitlePipeCustom implements PipeTransform{
    transform(value: boolean): string {
        return value? 'Chỉnh sửa': 'Thêm mới';
      }
}