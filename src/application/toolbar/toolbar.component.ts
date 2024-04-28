import {Component} from '@angular/core';
import {MatIcon} from "@angular/material/icon";
import {MatButton, MatIconButton} from "@angular/material/button";
import {MatToolbar} from "@angular/material/toolbar";
import {MatMenu, MatMenuItem, MatMenuTrigger} from "@angular/material/menu";
import {TokenService} from "@infrastructure/auth/token.service";
import {Router, RouterLink, RouterLinkActive, RouterOutlet} from "@angular/router";
import {MatDrawer, MatDrawerContainer} from "@angular/material/sidenav";
import {MatListItem, MatListItemLine, MatListItemTitle, MatNavList} from "@angular/material/list";

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
    MatMenuItem,
    MatDrawerContainer,
    MatDrawer,
    RouterOutlet,
    MatNavList,
    MatListItem,
    RouterLink,
    RouterLinkActive,
    MatListItemTitle,
    MatListItemLine
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


  profileName: string = 'placeholder name';
}
