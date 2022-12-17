import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PacientesService } from 'src/app/services/pacientes.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-expediente',
  templateUrl: './expediente.component.html',
  styleUrls: ['./expediente.component.css']
})
export class ExpedienteComponent implements OnInit {

  expedientes: any = {};
  exp: any[] = [];
  public expediente: any = {};
  mostrar: boolean = false;

  constructor(private pacienteService: PacientesService, private activatedRouter: ActivatedRoute) {
    this.activatedRouter.params.subscribe( params => {
      this.expedientes = params['id'];
      console.log(this.expedientes);
    })
  }

  ngOnInit(): void {
    this.obtenerExpedientes();
  }

  obtenerExpedientes() {
    this.pacienteService.obtenerExpedientes(this.expedientes)
      .subscribe( (resp: any) => {
        this.exp = resp;
        console.log(this.exp);
      })
  }

  seleccionarExpediente(idhistorial: any) {
    this.pacienteService.seleccionarExpediente(idhistorial)
      .subscribe( (resp: any) => {
        this.expediente = resp[0];
        console.log(this.expediente);
      })
  }

  editarExpediente() {
    this.pacienteService.editarExpediente(this.expediente)
      .subscribe( (resp: any) => {
        if( resp['resultado'] == 'OK' ) {
          Swal.fire({
            icon: 'success',
            title: 'Expediente actualizado',
            showConfirmButton: false,
            timer: 2000
          })
          this.obtenerExpedientes();
        }
      })
  }

  seleccionarReceta(idhistorial: any) {
    this.pacienteService.seleccionRecetaPDF(idhistorial);
  }
  
}
