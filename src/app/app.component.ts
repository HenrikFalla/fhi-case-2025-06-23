import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SkjemaComponent } from "./skjema/skjema.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, SkjemaComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'fhi-case-2025-06-23';
}
