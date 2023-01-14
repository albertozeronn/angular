import { Component, Input } from '@angular/core';

@Component({
  selector: 'boton',
  templateUrl: './boton.component.html',
  styleUrls: ['./boton.component.css']
})
export class BotonComponent {
  @Input() color:string='blueviolet';
  @Input() texto:string='Lorem Ipsum';
}
