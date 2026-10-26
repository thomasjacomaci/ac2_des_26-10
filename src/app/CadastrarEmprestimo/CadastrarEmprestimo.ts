import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { EmprestimoService } from '../services/emprestimo';
import { Emprestimo } from '../models/emprestimo';

@Component({
  selector: 'app-cadastrar-emprestimo',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './CadastrarEmprestimo.html',
  styleUrl: './CadastrarEmprestimo.css'
})
export class CadastrarEmprestimo {

  nomePessoa = '';
  tituloLivro = '';
  dataPrevistaDevolucao = '';

  constructor(private emprestimoService: EmprestimoService) {}

  cadastrar(): void {
    if (
      this.nomePessoa === '' ||
      this.tituloLivro === '' ||
      this.dataPrevistaDevolucao === ''
    ) {
      alert('Preencha todos os campos.');
      return;
    }

    const novoEmprestimo: Emprestimo = {
      id: Date.now(),
      nomePessoa: this.nomePessoa,
      tituloLivro: this.tituloLivro,
      dataPrevistaDevolucao: this.dataPrevistaDevolucao,
      devolvido: false
    };

    this.emprestimoService.adicionar(novoEmprestimo);

    this.nomePessoa = '';
    this.tituloLivro = '';
    this.dataPrevistaDevolucao = '';
  }
}
