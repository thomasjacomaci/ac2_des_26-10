import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmprestimoService } from '../services/emprestimo';

@Component({
  selector: 'app-lista-emprestimo',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './ListaEmprestimo.html',
  styleUrl: './ListaEmprestimo.css'
})
export class ListaEmprestimo {

  constructor(public emprestimoService: EmprestimoService) {}

  remover(id: number): void {
    this.emprestimoService.remover(id);
  }

  registrarDevolucao(id: number): void {
    this.emprestimoService.registrarDevolucao(id);
  }

  totalEmprestimos(): number {
    return this.emprestimoService.listar().length;
  }

  totalEmAberto(): number {
    return this.emprestimoService
      .listar()
      .filter(emprestimo => !emprestimo.devolvido)
      .length;
  }

  totalDevolvidos(): number {
    return this.emprestimoService
      .listar()
      .filter(emprestimo => emprestimo.devolvido)
      .length;
  }
}
