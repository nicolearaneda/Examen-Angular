import { Component, OnInit } from '@angular/core';
import { ConectarService } from '../servicios/conectar.service';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {
emp=null;

constructor(private con:ConectarService) {
}

ngOnInit() {
  this.verListado();
}

verListado()
{
 this.con.getListado().subscribe(empleados=>{this.emp=empleados});
}

}
