import {Component} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {LoginComponent} from '@application/login/login.component';
import {ToolbarComponent} from '@application/toolbar/toolbar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: '../../presentation/app.component.html',
  styleUrl: '../../presentation/app.component.scss',
  imports: [RouterOutlet, LoginComponent, ToolbarComponent]
})
export class AppComponent {


}
