import { Component } from '@angular/core';
import { CadastrarEmprestimo } from './CadastrarEmprestimo/CadastrarEmprestimo';
import { ListaEmprestimo } from './ListaEmprestimo/ListaEmprestimo';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CadastrarEmprestimo,
    ListaEmprestimo
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
}
