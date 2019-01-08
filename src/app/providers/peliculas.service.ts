import { Injectable } from '@angular/core';
import { Jsonp} from '@angular/http';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class PeliculasService {

    private apiKey = '220c154a1bbe3e22c2de4a8f83377049';

    private urlMovie = 'https://api.themoviedb.org/3';

    constructor(
        private jsonp: Jsonp,

    ) { }

    getCartelera() {

        const desde = new Date();
        const hasta = new Date();

        hasta.setDate(hasta.getDate() + 7);

        const desdeForm = `${desde.getFullYear()}-${desde.getMonth() + 1}-${desde.getDate()}`;
        const hastaForm = `${hasta.getFullYear()}-${hasta.getMonth() + 1}-${hasta.getDate()}`;

        const url = `${this.urlMovie}/discover/movie?primary_release_date.gte=${desdeForm}&primary_release_date.lte=${hastaForm}&api_key=${this.apiKey}&language=es&callback=JSONP_CALLBACK`;

        return this.jsonp.get(url).pipe(
            map( res => res.json().results)
        );

    }

    getPopulares() {

        const url = `${this.urlMovie}/discover/movie?sort_by=popularity.desc&api_key=${this.apiKey}&language=es&callback=JSONP_CALLBACK`;

        return this.jsonp.get(url).pipe(
            map( res => res.json().results)
        );
    }

    getPopularesKids() {

        const url = `${this.urlMovie}/discover/movie?certification_country=US&certification.lte=G&sort_by=popularity.desc&api_key=${this.apiKey}&language=es&callback=JSONP_CALLBACK`;

        return this.jsonp.get(url).pipe(
            map( res => res.json().results)
        );
    }

    buscarPeliculas(texto: string) {

        const url = `${this.urlMovie}/search/movie?query=${texto}&sort_by=popularity.desc&api_key=${this.apiKey}&language=es&callback=JSONP_CALLBACK`;

        return this.jsonp.get(url).pipe(
            map( res => res.json().results)
        );
    }

    getPelicula(id: string) {

        const url = `${this.urlMovie}/movie/${id}?api_key=${this.apiKey}&language=es&callback=JSONP_CALLBACK`;

        return this.jsonp.get(url).pipe(
            map( res => res.json())
        );
    }
}
