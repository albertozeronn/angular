import { Component, Input } from '@angular/core';
import { Tarea } from './tarea';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'PracticaArboles';
  public nuevaTarea?: string;
  @Input() nplantas2: string = '';
  public tareas: Tarea[] = [];
  public borrar(tarea: Tarea): void {
    this.tareas = this.tareas.filter(arrayDeTareas => arrayDeTareas !== tarea);
  }
  public borrar2(): void{
    this.nplantas2=''
    this.nuevaTarea=''
  }
  public addTarea(): void {

    if (!this.nuevaTarea) {
      return;
    }
    this.tareas.push({
      texto: this.nuevaTarea, tipo: this.nplantas2, done: false
    })
    this.nuevaTarea = "";

  }
  public cambiarEstado(done: boolean, tarea: Tarea): void {
    this.tareas.find(tareaDelArray => tareaDelArray === tarea)!.done = done;
  }
  }


