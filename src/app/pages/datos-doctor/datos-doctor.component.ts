import { Component, OnInit } from '@angular/core';
import { Doctor } from 'src/app/interfaces/doctor.interface';
import { PacientesService } from 'src/app/services/pacientes.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-datos-doctor',
  templateUrl: './datos-doctor.component.html',
  styleUrls: ['./datos-doctor.component.css']
})
export class DatosDoctorComponent implements OnInit {

  doctor: Doctor[] = [];
  docto: any = {};

  constructor(private pacienteServices: PacientesService) { }

  ngOnInit(): void {
    this.obtenerDoctor();
  }

  obtenerDoctor() {
    this.pacienteServices.obtenerDoctor()
      .subscribe( (resp: any) =>{
        this.doctor = resp;
        console.log(this.doctor);
      })
  }

  seleccionarDoctor(iddoctor: any) {
    this.pacienteServices.seleccionarDoctor(iddoctor)
      .subscribe( (resp: any) => {
        this.docto = resp[0];
        console.log(this.docto);
      })
  }

  editarDoctor() {
    this.pacienteServices.editarDoctor(this.docto)
      .subscribe( (resp: any) =>{
        if( resp['resultado'] == 'OK' ) {
          Swal.fire({
            icon: 'success',
            title: 'Actualizado correctamente',
            showConfirmButton: false,
            timer: 2000
          })
          this.obtenerDoctor();
        }
      })
  }

}
