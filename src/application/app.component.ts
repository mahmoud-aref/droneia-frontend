import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: '../presentation/app.component.html',
  styleUrl: '../presentation/app.component.scss'
})
export class AppComponent {
  title = 'droneia-front';
}
