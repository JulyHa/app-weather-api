import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'titleipeCustom'
})
export class TitleipeCustom implements PipeTransform{
    transform(value: boolean): string {
        return value? 'Chỉnh sửa': 'Thêm mới';
      }
}