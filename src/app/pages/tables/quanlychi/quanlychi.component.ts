import { Component, OnInit } from '@angular/core';
import { Console } from 'console';
import * as XLSX from 'xlsx';
import { NetworkserviceService } from '../../../services/networkservice.service';
@Component({
  selector: 'ngx-quanlychi',
  templateUrl: './quanlychi.component.html',
  styleUrls: ['./quanlychi.component.scss']
})
export class QuanlychiComponent implements OnInit {
  data = []
  constructor(private service: NetworkserviceService) {

    this.service.getquanlychi().subscribe(val => {
      console.log(val)
      this.data = val
      this.datatemp=val
    });


  }

  fileName = "DanhSachChi"
  date = ""
  sotien = ""
  mucdich = ""

  id = ""

  date1 = ""
  date2 = ""
  daterange = []
  datatemp = []
  ngOnInit(): void {
  }
  exportexcel() {
    let element = document.getElementById('excel-table');
    const ws: XLSX.WorkSheet = XLSX.utils.table_to_sheet(element);

    /* generate workbook and add the worksheet */
    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');

    /* save to file */
    XLSX.writeFile(wb, this.fileName);
  }
  hoantat() {
    console.log(this.sotien, this.mucdich, this.date)
    if (this.id == "") {
      this.service.quanlychi([this.sotien, this.date, this.mucdich]).subscribe(val => {
        console.log(val)
        alert("Tạo mới thành công")
        this.service.getquanlychi().subscribe(val => {
          console.log(val)
          this.data = val
     
        });
      });
    }
    if (this.id != "") {
      this.service.editquanlychi([this.sotien, this.date, this.mucdich, this.id]).subscribe(val => {
        console.log(val)
        alert("Chỉnh sửa thành công")
        this.service.getquanlychi().subscribe(val => {
          console.log(val)
          this.data = val
       
        });
      });
    }
  }
  edit(id, ngaytao, sotien, mucdich) {
    this.date = ngaytao
    this.sotien = sotien
    this.mucdich = mucdich
    this.id = id
  }
  delete(value) { 
    this.service.deletequanlychi([value]).subscribe(val => {
      console.log(val)
      alert("Xoá thành công")
      this.service.getquanlychi().subscribe(val => {
        console.log(val)
        this.data = val
      });
    });
  }



  change1() {
    if (this.date2 == "") {
      this.data = []
      console.log(this.date1, this.date2)
      this.datatemp.forEach(element => {
        console.log('element.ngaytao', element.ngaytao)
        console.log('this.date1', this.date1 )
        if (this.date1 == element.ngaytao) {
          this.data.push(element)
        }
      });
    }
    if (this.date2 != "") {
      this.data = []
      this.daterange=[]
      console.log(this.date1, this.date2)
      var currentDate = new Date(this.date1);
      while (currentDate <= new Date(this.date2)) {
        this.daterange.push(currentDate.getFullYear() + '-' + (currentDate.getMonth() + 1).toString().padStart(2, '0') + '-' + currentDate.getDate().toString().padStart(2, '0'));
        currentDate.setDate(currentDate.getDate() + 1)
      }

      this.datatemp.forEach(element1 => {
        console.log('element.ngaytao', element1.ngaytao)
        this.daterange.forEach(element2 => {
          if (element2 == element1.ngaytao) {
            this.data.push(element1)
          }
        });

      });
      console.log(this.daterange)
    }
  }
  change2() {
    this.data = []
    this.daterange=[]
    console.log(this.date1, this.date2)
    var currentDate = new Date(this.date1);
    while (currentDate <= new Date(this.date2)) {
      this.daterange.push(currentDate.getFullYear() + '-' + (currentDate.getMonth() + 1).toString().padStart(2, '0') + '-' + currentDate.getDate().toString().padStart(2, '0'));
      currentDate.setDate(currentDate.getDate() + 1)
    }

    this.datatemp.forEach(element1 => {
      console.log('element.ngaytao', element1.ngaytao)
      this.daterange.forEach(element2 => {
        if (element2 == element1.ngaytao) {
          this.data.push(element1)
        }
      });

    });
    console.log(this.daterange)
  }
}
