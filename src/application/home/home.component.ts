import {Component} from '@angular/core';
import {ToolbarComponent} from "@application/toolbar/toolbar.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    ToolbarComponent
  ],
  templateUrl: '../../presentation/home.component.html',
  styleUrl: '../../presentation/home.component.scss'
})
export class HomeComponent {



}
