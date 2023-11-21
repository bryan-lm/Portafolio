
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductosService } from '../../services/productos.service';
import { ProductoDescripcion } from '../../interfaces/producto-descripcion.interdace';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
  producto:ProductoDescripcion={
    categoria: '',
    desc1: '',
    desc2: '',
    producto: '',
    resumen: '',
    subtitulo1: '',
    subtitulo2: ''
  };
  id!: string;
  constructor(private route:ActivatedRoute,
              public productoService:ProductosService){}
  ngOnInit(){

    this.route.params
        .subscribe(parametros=>{
          //console.log(parametros['id']);
          this.productoService.getProducto(parametros['id'])
          .subscribe((producto:any) => {
            this.id=parametros['id'];
            this.producto=producto;
            

          });
        });
      
  }

}