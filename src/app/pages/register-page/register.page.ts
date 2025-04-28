import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';
import { FormFieldModule, InputsModule } from '@progress/kendo-angular-inputs';
import { DateInputsModule } from '@progress/kendo-angular-dateinputs';
import { ButtonModule } from '@progress/kendo-angular-buttons';
import { RouterModule, Router } from '@angular/router';
import {
  KENDO_NOTIFICATION,
  NotificationService,
} from '@progress/kendo-angular-notification';
import { CommonModule } from '@angular/common';
import { KENDO_LABEL } from '@progress/kendo-angular-label';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    RouterModule,
    InputsModule,
    DateInputsModule,
    FormFieldModule,
    ButtonModule,
    KENDO_NOTIFICATION,
    KENDO_LABEL,
  ],
  templateUrl: './register.page.html',
  styleUrl: './register.page.css',
})
// REGEX per il codice fiscale italiano: https://regex101.com/r/bK2iF7/1/codegen?language=javascript
export class RegisterPage {
  readonly form: FormGroup;

  constructor(
    private fb: FormBuilder,
    private notificationService: NotificationService,
    private router: Router
  ) {
    this.form = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      birthDate: [null, Validators.required],
      fiscalCode: [
        '',
        [
          Validators.required,
          Validators.pattern(
            /^[A-Z]{6}[0-9LMNPQRSTUV]{2}[ABCDEHLMPRST]{1}[0-7LMNPQRST]{1}[0-9LMNPQRSTUV]{1}[A-Z]{1}[0-9LMNPQRSTUV]{3}[A-Z]{1}$/
          ),
        ],
      ],
    });
  }

  submit(): void {
    if (this.form.valid) {
      // Simula la registrazione dell'utente
      console.log('Form inviato:', this.form.value);
      this.showCustomNotification(
        'Registrazione completata con successo!',
        'success'
      );

      setTimeout(() => {
        this.router.navigate(['/login']);
      }, 3000);

      this.form.reset();
    } else {
      // Mostra notifica di errore se il form non è valido
      this.showCustomNotification(
        'Compila tutti i campi correttamente!',
        'error'
      );
      this.form.markAllAsTouched();
    }
  }

  clear(): void {
    this.form.reset();
  }
  //TODO: capire come aggingerci lo stile di kendo custom, non va ora...
  // TODO: https://www.telerik.com/kendo-angular-ui/components/notification/styling
  // Notifica Custom
  showCustomNotification(message: string, type: 'success' | 'error'): void {
    this.notificationService.show({
      content: message,
      hideAfter: 3000,
      position: { horizontal: 'center', vertical: 'bottom' },
      animation: { type: 'fade', duration: 300 },
      type: { style: type },
      // TODO: capire come customizzarlo
      // cssClass:
      //   type === 'success' ? ['notification-success'] : ['notification-error'],
    });
  }
}
