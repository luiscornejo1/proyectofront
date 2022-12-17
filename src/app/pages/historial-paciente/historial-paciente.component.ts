import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PacientesService } from 'src/app/services/pacientes.service';

@Component({
  selector: 'app-historial-paciente',
  templateUrl: './historial-paciente.component.html',
  styleUrls: ['./historial-paciente.component.css']
})
export class HistorialPacienteComponent implements OnInit {

  newhistoriales: any[] = [];
  filtrarNombre: any = '';
  p: number = 1;
  constructor(public pacienteService: PacientesService, private router: Router) { }

  ngOnInit(): void {
    this.obtenerHistoriales();
  }

  obtenerHistoriales() {
    this.pacienteService.obtenerHistoriales()
      .subscribe( (resp: any) => {
        this.newhistoriales = resp;
        console.log(this.newhistoriales)
      })
  }

  verExpediente(idpaciente: number){
      
    this.router.navigate(['/dashboard/expediente', idpaciente]);

  }

}
