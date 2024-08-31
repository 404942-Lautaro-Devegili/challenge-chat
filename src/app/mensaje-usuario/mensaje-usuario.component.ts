import { CommonModule } from '@angular/common';
import { Component, input, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Message } from '../models/message';
@Component({
  selector: 'app-mensaje-usuario',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './mensaje-usuario.component.html',
  styleUrl: './mensaje-usuario.component.css'
})
export class MensajeUsuarioComponent {
  @Input() usuario!: string;
  mensaje: string = '';
  mensajes: Message[] = [];

  enviarMensaje() {
    if (this.mensaje.trim()) {
      const nuevoMensaje: Message = {
        text: this.mensaje,
        timestamp: new Date(),
        user: this.usuario
      };
      this.mensajes.push(nuevoMensaje);
      this.mensaje = '';
    }
  }
}
