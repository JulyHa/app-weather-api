import { Component, Input, OnInit } from '@angular/core';
import { ConfirmationService, MessageService } from 'primeng/api';
import { City } from 'src/app/model/city';
import { CityService } from 'src/app/services/city.service';

@Component({
  selector: 'app-manage-city',
  templateUrl: './manage-city.component.html',
  styleUrls: ['./manage-city.component.scss']
})
export class ManageCityComponent implements OnInit {
  citys: City[]
  city: City 
  title: string
  visible: boolean;
  infor: boolean;
  isEdit: boolean;
  valueSearch: string = '';
  

  constructor(private cityService: CityService, private message: MessageService,
    private confirmation: ConfirmationService) { }

  ngOnInit(): void {
    this.citys = this.cityService.getAll();
    this.city = new City;
    this.infor = false;
  }
  showAdd() {
    this.city= new City
    this.title = 'Thêm thành phố'
    this.visible = true;
    this.isEdit = false;
  }

  add() {
    let newCity = {
      city: this.city.city,
      country: this.city.country
    }
    let res = this.cityService.add(newCity);
    if (res) {
      this.mess('success', 'Thành công', 'Thêm thành công');
    }
    else {
      this.mess('error', 'Thất bại', 'Thành phố đã tồn tại');
    }
    this.visible = false;

  }
  showInformation(id: number){
    this.infor = true;
    this.city = this.cityService.findById(id);
  }

  showEdit(id: number) {
    this.title = 'Sửa thành phố'
    this.visible = true;
    this.isEdit = true;
    let c =  this.cityService.findById(id);
    this.city = {
      id: c.id,
      city: c.city,
      country: c.country
    }
  }
  edit(){
    let editCity = {
      id: this.city.id,
      city: this.city.city,
      country: this.city.country
    }
    let res = this.cityService.edit(editCity.id, editCity);
    if (res) {
      this.mess('success', 'Thành công', 'Sửa thành công');
    }
    else {
      this.mess('error', 'Thất bại', 'Thành phố đã tồn tại');
    }
    this.visible = false;
  }

  remove(id: number, city: string){
    this.confirmation.confirm({
      message: 'Bạn có muốn xóa thành phố '+ city +' không?',
      icon: 'pi pi-info-circle',
      accept: () => {
        if (this.cityService.remove(id)) {
          this.mess('success', 'Thành công', 'Xóa thành công!');
          this.citys = this.cityService.getAll();
        }
        else {
          this.mess('error', 'Thất bại', 'Xóa thất bại!');
        }

      }
    }
    );
  }
  search(){
    this.citys = this.cityService.sreach(this.valueSearch);
    this.valueSearch = '';
  }
  reset(){
    this.citys = this.cityService.getAll();
    this.valueSearch = '';
  }

  mess(severity: string, summary: string, detail: string){
    this.message.add({ severity: severity, summary: summary, detail: detail })
  }


}
