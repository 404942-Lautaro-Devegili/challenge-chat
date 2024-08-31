import { Component } from '@angular/core';
import { MensajeUsuarioComponent } from '../mensaje-usuario/mensaje-usuario.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Message } from '../models/message';

@Component({
  selector: 'app-sala',
  standalone: true,
  imports: [MensajeUsuarioComponent, CommonModule, FormsModule],
  templateUrl: './sala.component.html',
  styleUrl: './sala.component.css'
})
export class SalaComponent {
  mensajePepe: string = '';
  mensajeMaria: string = '';
  mensajes: Message[] = []; 

  enviarMensaje(usuario: string) {
    const textoMensaje = usuario === 'Pepe' ? this.mensajePepe : this.mensajeMaria;

    if (textoMensaje.trim()) {
      const nuevoMensaje: Message = {
        text: textoMensaje,
        timestamp: new Date(),
        user: usuario
      };
      this.mensajes.push(nuevoMensaje);
      if (usuario === 'Pepe') {
        this.mensajePepe = ''; 
      } else {
        this.mensajeMaria = '';
      }
    }
  }
}
