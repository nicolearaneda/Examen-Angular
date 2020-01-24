import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ExamenAngular';
  constructor(private router:Router)
  {
  
  }  

  mostrarConsulta()
{
  this.router.navigate(['consulta']);
}

mostrarListado()
{
  this.router.navigate(['listado']);
}

mostrarMadrid()
{
  this.router.navigate(['madrid']);
}

mostrarToledo()
{
  this.router.navigate(['toledo']);
}

}
