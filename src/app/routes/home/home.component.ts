import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ThemeService } from '../../services/theme.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  constructor(private themeService: ThemeService){
    this.themeService.loadTheme();
  }


  setTheme(theme: string) {
    this.themeService.setTheme(theme);
  }
}
