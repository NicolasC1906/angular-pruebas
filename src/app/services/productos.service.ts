import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Api } from '../config';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  // private api:String = Api.url;

  constructor(private http:HttpClient) { }
  getData(){

		return this.http.get(`https://secure-atoll-67302.herokuapp.com/api/productos`);

	}
}
