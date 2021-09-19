import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.scss']
})
export class DetalleComponent implements OnInit {
  personajeTrevor ="https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/styles/1200/public/media/image/2016/07/gta-v-caratula.jpg?itok=EyOTe53u";
  personajeMichael ="https://i.pinimg.com/originals/f9/99/5c/f9995c054004e3b1333359357cbc5981.jpg";
  personajeFranklin ="https://bolavip.com/__export/1600089974788/sites/bolavip/img/2020/09/14/gtav_franklin_crop1600089973885.jpg_412320734.jpg";
  personajeSnorlax ="https://www.pngkit.com/png/detail/183-1834794_jpg-transparent-library-the-ghost-of-cool-pokemon.png";
  enlace :number;
  personajes = [
    {},
    {
      "nombre": "Trevor",
      "habilidades": "modo furia",
      "peso": "82kg",
      "altura": "1.70",
      "imagen": this.personajeTrevor

    },
    {
      "nombre": "Michael",
      "habilidades": "Conduccion mejorada",
      "peso": "90kg",
      "altura": "1.80",
      "imagen": this.personajeMichael
    },
    {
      "nombre": "Franklin",
      "habilidades": "Camara lenta",
      "peso": "70kg",
      "altura": "1.75",
      "imagen": this.personajeFranklin
    },
    {
      "nombre": "Snorlax",
      "habilidades": "dormir",
      "peso": "200kg",
      "altura": "3.8",
      "imagen": this.personajeSnorlax
    }
  ];


  constructor(private activatedRouter: ActivatedRoute) {

  }

  ngOnInit(): void {
    this.enlace=this.activatedRouter.snapshot.params.id;// obtener el id de la ruta recibida


    
  }


}
