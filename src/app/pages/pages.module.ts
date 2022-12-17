import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxPaginationModule } from 'ngx-pagination'; // <-- import the module
import { PagesComponent } from './pages.component';
import { LoginComponent } from './login/login.component';
import { CrearPacienteComponent } from './crear-paciente/crear-paciente.component';
import { DatosDoctorComponent } from './datos-doctor/datos-doctor.component';
import { DatosPacienteComponent } from './datos-paciente/datos-paciente.component';
import { ExpedienteComponent } from './expediente/expediente.component';
import { HistorialPacienteComponent } from './historial-paciente/historial-paciente.component';
import { NuevoHistorialComponent } from './nuevo-historial/nuevo-historial.component';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FiltrarTablaPipe } from '../pipes/filtrar-tabla.pipe';



@NgModule({
  declarations: [
    PagesComponent,
    LoginComponent,
    CrearPacienteComponent,
    DatosDoctorComponent,
    DatosPacienteComponent,
    ExpedienteComponent,
    HistorialPacienteComponent,
    NuevoHistorialComponent,
    FiltrarTablaPipe
    
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    NgxPaginationModule,
    ReactiveFormsModule,
    ReactiveFormsModule.withConfig({warnOnNgModelWithFormControl: 'never'})
  ]
})
export class PagesModule { }
