import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AutoService } from './autos/services/auto.service';
import { AdminLayoutComponent } from './layout/admin-layout/admin-layout.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AdminLayoutComponent],
  templateUrl: './app.component.html',
  providers: [AutoService],
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'concesionario-frontend';
}
