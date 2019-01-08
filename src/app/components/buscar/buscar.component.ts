import { Component, OnInit } from '@angular/core';
import { PeliculasService } from '../../providers/peliculas.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styles: []
})
export class BuscarComponent implements OnInit {

    public buscar = '';

    public peliculas: any = [];

    constructor(
        public _ps: PeliculasService,
        private route: ActivatedRoute) {
            route.params.subscribe(params => {
                console.log(params);
                if (params['texto']) {
                    this.buscar = params['texto'];
                    this.buscarPelicula();
                }
            });
    }

    ngOnInit() {
    }

    buscarPelicula() {
        if (this.buscar.length === 0) {
            return;
        }

        this._ps.buscarPeliculas(this.buscar).subscribe(data => {
            console.log(data);
            this.peliculas = data;
        });
    }

}
