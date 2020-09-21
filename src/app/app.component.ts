import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { url } from 'inspector';
import { ProductosService } from './services/productos.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-pruebas';

  constructor(private ProductosService: ProductosService) { }

  ngOnInit(): void {

    let getProductos = [];

    this.ProductosService.getData()
      .subscribe( resp =>{

        //Separar por categorias, recursos y Nombre de tienda//
        let i;

        for(i in resp){

          getProductos.push({
            
            "Categoria": resp[i].Categoria.nombre,
            "Recursos": resp[i].Recursos,
            "NombreTienda": resp[i].NombreTienda,
            
          })
        //  console.log("getProductos", getProductos);
        }   
        for(i in getProductos){
          getProductos[i]["Recursos"][1]["url"]
          getProductos[i]["Categoria"]
          getProductos[i]["NombreTienda"]
          // console.log("getProductos[i][\"Recursos\"][1][\"url\"]", getProductos[i]["Recursos"][1]["url"]);
          // console.log("getProductos[i][\"Categoria\"]", getProductos[i]["Categoria"]);
          console.log("getProductos[i][\"NombreTienda\"]", getProductos[i]["NombreTienda"]);
        }
      })   
      
  }
}
