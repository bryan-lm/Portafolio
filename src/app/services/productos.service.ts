import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Producto } from '../interfaces/producto.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {
  cargando=true;
  productos:any[]=[];
  productosFiltrado:Producto[]=[];

  

  constructor(private http:HttpClient) {
    this.cargarProductos();
   }
  private cargarProductos(){
    return new Promise((resolve,reject) =>{
      this.http.get('https://angular-html-25e99-default-rtdb.firebaseio.com/productos_idx.json')
      .subscribe((resp:any)=> {
        //console.log(resp);
        this.productos=resp;
        this.cargando=false;
        
      });

    });
    
      

  }
  getProducto(id:string){

    return this.http.get(`https://angular-html-25e99-default-rtdb.firebaseio.com/productos/${id}.json`);
  }
  buscarProducto(termino:string){
    if(this.productos.length===0){
      this.cargarProductos().then( ()=>{

        this.filtrarProductos(termino);

      });
    }else{
      this.filtrarProductos(termino);

    }
    
  }
  private filtrarProductos(termino:string){
    //console.log(this.productos);
    this.productosFiltrado=[];
    termino=termino.toLocaleLowerCase();
    this.productos.forEach(prod =>{
      const titulolower=prod.titulo.toLocaleLowerCase();
      if(prod.categoria.indexOf(termino)>=0||titulolower.indexOf(termino)>=0){
        this.productosFiltrado.push(prod);

    }
  });
}
}
