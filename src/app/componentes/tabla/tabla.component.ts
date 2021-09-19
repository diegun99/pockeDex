import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-tabla',
  templateUrl: './tabla.component.html',
  styleUrls: ['./tabla.component.scss']
})
export class TablaComponent implements OnInit {

  constructor( private router: Router) { }

  ngOnInit(): void {

  }

 //Obtiene elemento seleccionado
  irADescripcion(id: any){

    this.router.navigateByUrl(`/detalle/${id}`)
  }

}
