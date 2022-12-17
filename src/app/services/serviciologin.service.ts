import { EventEmitter, Injectable, Output } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class ServiciologinService {

  //url: any = 'http://localhost/api/';
  url = environment.url;

  @Output() nombre: EventEmitter<any> = new EventEmitter();

  constructor(private http: HttpClient) { }
  
  userLogin( formData: any ) {
    return this.http.post(`${this.url}login.php`, formData)
    .pipe( map( (Users: any) => {
      console.log( Users);
        this.setToken(Users[0].name);
        this.nombre.emit(true);
        return Users;
    }));
  }

  //token
  setToken(token: string) {
    localStorage.setItem('token', token);
  }

  getToken() {
    return localStorage.getItem('token');
  }

  isLoggedIn() {
    const userToken = this.getToken();
    if( userToken != null ) {
      return true;      
    }
    return false;
  }

}
