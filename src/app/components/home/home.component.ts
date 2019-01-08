import { Component, OnInit } from '@angular/core';
import { PeliculasService } from '../../providers/peliculas.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent implements OnInit {

    public cartelera: any;
    public populares: any;
    public popularesNinos: any;

    constructor(public _ps: PeliculasService) {

        _ps.getCartelera().subscribe(data => this.cartelera = data);
        _ps.getPopulares().subscribe(data => this.populares = data);
        _ps.getPopularesKids().subscribe(data => this.popularesNinos = data);
    }

    ngOnInit() {
    }

}
