import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';
import { FormFieldModule, InputsModule } from '@progress/kendo-angular-inputs';
import { DateInputsModule } from '@progress/kendo-angular-dateinputs';
import { KENDO_LABEL } from '@progress/kendo-angular-label';
import { ButtonModule } from '@progress/kendo-angular-buttons';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    InputsModule,
    DateInputsModule,
    FormFieldModule,
    ButtonModule,
    KENDO_LABEL,
  ],
  templateUrl: './register.page.html',
  styleUrl: './register.page.css',
})
// REGEX per il codice fiscale italiano: https://regex101.com/r/bK2iF7/1/codegen?language=javascript
export class RegisterPage {
  readonly form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      birthDate: [null, Validators.required],
      residenceDate: [null, Validators.required],
      fiscalCode: [
        '',
        [
          Validators.required,
          Validators.pattern(
            /[A-Z]{6}[0-9LMNPQRSTUV]{2}[ABCDEHLMPRST]{1}[0-7LMNPQRST]{1}[0-9LMNPQRSTUV]{1}[A-Z]{1}[0-9LMNPQRSTUV]{3}[A-Z]{1}/
          ),
        ],
      ],
    });
  }

  submit(): void {
    if (this.form.valid) {
      console.log('Form inviato:', this.form.value);
    } else {
      this.form.markAllAsTouched();
    }
  }

  clear(): void {
    this.form.reset();
  }
}
