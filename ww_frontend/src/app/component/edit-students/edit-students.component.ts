import { Component, OnInit } from '@angular/core';
import { NzTableModule } from 'ng-zorro-antd/table';
import { FormsModule } from '@angular/forms';
import { NgFor } from '@angular/common';
import {ApiService} from "../../services/api.service";

interface ItemData {
  id: string,
  firstName: string;
  lastName: string;
  age?: string;
  house: string;
  level: string;
}
  
@Component({
  selector: 'app-edit-students',
  standalone: true,
  imports: [
    NzTableModule,
    FormsModule,
    NgFor
  ],
  templateUrl: './edit-students.component.html',
  styleUrls: ['./edit-students.component.css'],

})
export class EditStudentsComponent implements OnInit {
  i = 0;
  editId: string | null = null;
  listOfData: ItemData[] = []; 

  constructor(
    private apiService: ApiService,
  ) {
   this.getData();
  }

  
  /**
   * Solicita los datos al servidor API y actualiza la lista de datos.
   *
   * Esta funcion invoca al metodo   getAll() del servicio ApiService.  It then subscribes to the returned Observable and assigns the received data to the listOfData property.
   *
   * @return {void} This function does not return a value.
   */
  getData(): void {
    this.apiService.getAll().subscribe((data) => {
      this.listOfData = data
    })
  }
  

  startEdit(id: string): void {
    this.editId = id;
  }

  stopEdit(): void {
    // guardar en la base de datos
    this.editId = null;
    
  }

  addRow(): void {
    this.listOfData = [
      ...this.listOfData,
      /*{
        id: `${this.id}`,
        firstName: `Edward King ${this.id}`,
        age: '32',
        address: `London, Park Lane no. ${this.id}`
      }*/
    ];
    this.i++;
  }

  deleteRow(id: string): void {
    this.listOfData = this.listOfData.filter(d => d.id !== id);
  }

  ngOnInit(): void {
    this.addRow();
    this.addRow();
  }
  // constructor api service
}
