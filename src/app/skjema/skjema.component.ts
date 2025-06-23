import { Component } from '@angular/core';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormGroup, FormControl, ReactiveFormsModule } from '@angular/forms';
import '@folkehelseinstituttet/designsystem/fhi-button';
import '@folkehelseinstituttet/designsystem/fhi-text-input';
import { FhiTextInputValueAccessorDirective } from '../directive';

@Component({
  selector: 'app-skjema',
  imports: [ReactiveFormsModule, FhiTextInputValueAccessorDirective],
  templateUrl: './skjema.component.html',
  styleUrl: './skjema.component.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class SkjemaComponent {
  skjema = new FormGroup({
    navn: new FormControl(''),
  });

  onSubmit(): void {
    const newName = this.skjema.get('navn')?.value;
    console.log(`Ditt navn er registrert ${newName}!`);
  }
}
