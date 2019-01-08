import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: []
})
export class NavbarComponent implements OnInit {

    constructor(private router: Router) { }

    ngOnInit() {
    }

    buscarPeli(texto: string) {
        if (texto.length === 0) {
            return;
        }
        console.log(texto);

        this.router.navigate(['buscar', texto]);
    }

}
