import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Pacientes } from 'src/app/interfaces/pacientes.interface';
import { PacientesService } from 'src/app/services/pacientes.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-nuevo-historial',
  templateUrl: './nuevo-historial.component.html',
  styleUrls: ['./nuevo-historial.component.css']
})
export class NuevoHistorialComponent implements OnInit {

  pacientes: Pacientes[] = [];

  public bloque: any = 1;

  public multiBloque = new FormGroup({
    datosPaciente: new FormGroup( {
      nombre: new FormControl(''),
      peso: new FormControl(''),
      talla: new FormControl(''),
      frC: new FormControl(''),
      temperatura: new FormControl('')
    }),
    datosPaciente2: new FormGroup({
      ah: new FormControl(''),
      apnp: new FormControl(''),
      hemotipo: new FormControl(''),
      alergias: new FormControl(''),
      app: new FormControl('')
    }),
    datosPaciente3: new FormGroup({
      cita: new FormControl(''),
      diagnostico: new FormControl('')
    })
  });

  fecha = new Date().getDate() + '-' + (new Date().getMonth() + 1) + '-' + new Date().getFullYear();

  newhistorial: any = {
    fechahistorial: this.fecha
  }

  constructor(public pacienteService: PacientesService, private router: Router, private cdr: ChangeDetectorRef) { 
  }

  ngOnInit(): void {
    this.obtenerPacientes();
  }
  
  obtenerPacientes() {
    this.pacienteService.getPaciente().subscribe( (resp: any) => {
      this.pacientes = resp;
    })
  }
  
  altaHistorial() {
    //console.log(this.newhistorial);
    this.pacienteService.altaHistorial(this.newhistorial)
      .subscribe( (resp: any) => {
        if( resp['resultado'] == 'OK' ){

        }
      })
  }
  
  submit() {
    this.bloque = this.bloque + 1;
    if( this.bloque == 4 ) {
      Swal.fire(
        'Historial registrado con exito',
        '',
        'success'
      )
      this.router.navigate(['/dashboard/historial-paciente']);
    }
  }
  
  btnAtras() {
    this.bloque = this.bloque - 1;
  }

  ngAfterContentChecked(): void {
    //Called after every check of the component's or directive's content.
    //Add 'implements AfterContentChecked' to the class.
    this.cdr.detectChanges();
  }

}
