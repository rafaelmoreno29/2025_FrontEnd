import { Component } from '@angular/core';
import { Usuario } from '../models/Usuario';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-cadastro-usuario',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './cadastro-usuario.component.html',
  styleUrl: './cadastro-usuario.component.css'
})
export class CadastroUsuarioComponent {
  usuario: Usuario = {
    id: 0,
    nome: '',
    email: '',
    senha: '',
    ativo: false
  };

  salvar() {

  }
}
