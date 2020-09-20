import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-pruebas';
  url = `https://secure-atoll-67302.herokuapp.com/api/productos`;
  
  constructor(private http: HttpClient){
    this.http.get(this.url).toPromise().then(data =>{
      console.log(data);
    });
  }

}
