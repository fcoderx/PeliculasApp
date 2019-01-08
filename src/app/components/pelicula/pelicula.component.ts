import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PeliculasService } from 'src/app/providers/peliculas.service';

@Component({
  selector: 'app-pelicula',
  templateUrl: './pelicula.component.html',
  styles: []
})
export class PeliculaComponent implements OnInit {

    public pelicula: any;
    public regresarPag = '';
    public busqueda = '';

    constructor(
        public route: ActivatedRoute,
        public _ps: PeliculasService
    ) {
        route.params.subscribe(params => {
            this.regresarPag = params['pag'];

            if (params['busqueda']) {
                this.busqueda = params['busqueda'];
            }
            console.log(params);
            _ps.getPelicula(params['id']).subscribe(data => this.pelicula = data);
        });
    }

    ngOnInit() {
    }

}
