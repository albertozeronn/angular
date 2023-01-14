import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Tarea } from '../tarea';



@Component({
  selector: 'elementos',
  templateUrl: './elementos.component.html',
  styleUrls: ['./elementos.component.css']
})
export class ElementosComponent {
  @Input() tarea?: Tarea;
  @Output() eventoBorrar: EventEmitter<void> = new EventEmitter();
  @Output() eventoCompletar: EventEmitter<boolean> = new EventEmitter();
  public borrar(): void {
    this.eventoBorrar.emit();
  }
  public cambiarEstado(): void {
    this.eventoCompletar.emit(!this.tarea?.done);  
  }
}
