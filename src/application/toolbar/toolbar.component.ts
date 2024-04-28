import {Component} from '@angular/core';
import {MatIcon} from "@angular/material/icon";
import {MatButton, MatIconButton} from "@angular/material/button";
import {MatToolbar} from "@angular/material/toolbar";
import {MatMenu, MatMenuItem, MatMenuTrigger} from "@angular/material/menu";
import {TokenService} from "@infrastructure/auth/token.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-toolbar',
  standalone: true,
  imports: [
    MatToolbar,
    MatIcon,
    MatIconButton,
    MatMenu,
    MatMenuTrigger,
    MatButton,
    MatMenuItem
  ],
  templateUrl: '../../presentation/toolbar.component.html',
  styleUrl: '../../presentation/toolbar.component.scss'
})
export class ToolbarComponent {

  constructor(
    private tokenService: TokenService,
    private router: Router
  ) {
  }

  logout() {
    this.tokenService.clearToken();
    this.router.navigate(['/login']);
  }
}