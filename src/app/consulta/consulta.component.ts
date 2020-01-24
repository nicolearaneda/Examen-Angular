import { Component, OnInit } from '@angular/core';
import { ConectarService } from '../servicios/conectar.service';
import { Empleado } from '../interfaces/empleado';

@Component({
  selector: 'app-consulta',
  templateUrl: './consulta.component.html',
  styleUrls: ['./consulta.component.css']
})
export class ConsultaComponent implements OnInit {
 /* consu:number;
  idemp:number;
  id:number;
  ipc:number;
  resultado:number;*/
  emp=null;
  ridunico:Empleado;
  ipc:number;
  e:Empleado={id:3, employee_name:'Andres',
    employee_salary:30420,
    employee_age:42,
    profile_image:''}

  constructor(private con:ConectarService) { 
  this.emp;
  this.ridunico;
}
  ngOnInit() {
    this.verConsulta();
  }

  verConsulta()
   {//traer a listadocompleto
    
      this.con.getListado().subscribe(resulta=>{this.ridunico=this.e[3].employee_salary+ (this.ipc/100)*(
        this.e[3].employee_salary)});

      }
    }

    
    //this.con.getListado().subscribe(consultas=>{console.log(this.consu[3].employee_salary)})
    
    //this.con.getConsulta(3).subscribe(resultado=>{console.log(
    //this.ridunico=resultado)});

    /*  console.log(this.emp[1].id);
        console.log(this.emp);
        this.calculo=(this.emp[3].data.employeesalary);*/

        //console.log(this.emp=empleados.employee_salary



    /*this.con.getListado()
    .subscribe(consultas=>{console.log(this.resultado=consultas[3].employee_salary
    + this.ipc*(consultas[3].employee_salary))});*/
     


  /*calculo(e:Empleado)
  {
    if(this.idemp == this.id)
    {
      e.employee_salary + this.ipc*(e.employee_salary);
    }
  }*/

  //.subscribe(consultas=>{console.log(this.consu=consultas)})


