import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PacientesService } from 'src/app/services/pacientes.service';

import Swal from 'sweetalert2';

@Component({
  selector: 'app-crear-paciente',
  templateUrl: './crear-paciente.component.html',
  styleUrls: ['./crear-paciente.component.css']
})
export class CrearPacienteComponent implements OnInit {

  pacientes: any = {};

  constructor(public pacientesService: PacientesService, public router: Router) { }

  ngOnInit(): void {
  }

  altaPaciente() {
    Swal.fire({
      title: 'Desea registrar al paciente?',
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: 'Registrar',
      denyButtonText: `No acepto`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */      
      if (result.isConfirmed) {
        Swal.fire('Registrado', '', 'success')
        this.pacientesService.altaPaciente(this.pacientes).subscribe( 
          {
            next: result => {
              this.router.navigate(['/dashboard/nuevo-historial']);
            },
            error: err => {
              console.log(err.error);
            }
          }
        );
      } else if (result.isDenied) {
        Swal.fire('Ups!', '', 'info')
      }
    })
    

  }
 
}
