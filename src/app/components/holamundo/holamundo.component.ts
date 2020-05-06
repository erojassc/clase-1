import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-holamundo',
  templateUrl: './holamundo.component.html',
  styleUrls: ['./holamundo.component.scss']
})
export class HolamundoComponent implements OnInit {

  public miNombre = 'Erick Rojas';

  constructor() { }

  ngOnInit(): void {
  }

}
