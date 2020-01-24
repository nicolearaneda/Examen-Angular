import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Empleado } from '../interfaces/empleado'

@Injectable({
  providedIn: 'root'
})
export class ConectarService {

  constructor(private http:HttpClient) { }
  
  getConsulta(id:number)
  {
    const path ='http://dummy.restapiexample.com/api/v1/employee/3';
    return this.http.get<Empleado>(path);
  }

  getListado()
  {
    const path ='http://dummy.restapiexample.com/api/v1/employees';
    return this.http.get<Empleado>(path);
  }

  /*getCalculo(id:number)
  const path = 'http://dummy.restapiexample.com/api/v1/employees'+id;
  return this.http.get<Empleado>(path);*/
/*
  crearTarea(E:Empleado)
  {
    const path = 'http://dummy.restapiexample.com/api/v1/employees';
    return this.http.post(path,E);
  }

  eliminarTarea(id:string)
  {
    const path ='http://dummy.restapiexample.com/api/v1/employees'+id;
    return this.http.delete<Empleado>(path);
  }

  modificarTarea(E:Empleado)
  {
    const path ='http://dummy.restapiexample.com/api/v1/employees'+E.id;
    return this.http.put<Empleado>(path,E);
  }*/

}
