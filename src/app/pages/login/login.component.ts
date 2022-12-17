import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ServiciologinService } from 'src/app/services/serviciologin.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  formSubmitted: boolean = false;

  public loginForm: any = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(3)]]
  })

  constructor(private fb: FormBuilder, private router: Router, private servicioLogin: ServiciologinService) { }

  ngOnInit(): void {
  }

  iniciar_sesion() {

    this.formSubmitted = true;

    if( this.loginForm.invalid ) {
      return;
    }

    this.servicioLogin.userLogin(this.loginForm.value)
      .subscribe( data => {
        if( this.loginForm.value ) {
          localStorage.setItem('email', this.loginForm.get('email').value);
          this.router.navigateByUrl('dashboard/nuevo-historial');
        } else {
          localStorage.removeItem('email');
        }

      })

  }

  campoNovalido(campo: string) {
    if (this.loginForm.get(campo).invalid && this.formSubmitted) {
      return true;
    } else {
      return false;
    }
  }
}
