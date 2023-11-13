import { Component, OnInit } from '@angular/core';
import { InfoPaginaService } from '../../services/info-pagina.service';

@Component({
  selector: 'app-abaut',
  templateUrl: './abaut.component.html',
  styleUrls: ['./abaut.component.css']
})
export class AbautComponent implements OnInit{
  constructor(public infoService:InfoPaginaService){}
  ngOnInit(){
      
  }

}
