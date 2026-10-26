import { Injectable, signal } from '@angular/core';
import { Emprestimo } from '../models/emprestimo';

@Injectable({
  providedIn: 'root'
})
export class EmprestimoService {

  private emprestimos = signal<Emprestimo[]>([]);

  listar(): Emprestimo[] {
    return this.emprestimos();
  }

  adicionar(emprestimo: Emprestimo): void {
    this.emprestimos.update(lista => [...lista, emprestimo]);
  }

  remover(id: number): void {
    this.emprestimos.update(lista =>
      lista.filter(emprestimo => emprestimo.id !== id)
    );
  }

  registrarDevolucao(id: number): void {
    this.emprestimos.update(lista =>
      lista.map(emprestimo =>
        emprestimo.id === id
          ? { ...emprestimo, devolvido: true }
          : emprestimo
      )
    );
  }
}
