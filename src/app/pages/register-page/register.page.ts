import { Component, inject, ViewChild } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  ReactiveFormsModule,
  FormControl,
} from '@angular/forms';
import {
  FormFieldModule,
  InputsModule,
  TextBoxComponent,
} from '@progress/kendo-angular-inputs';
import { DateInputsModule } from '@progress/kendo-angular-dateinputs';
import { ButtonModule } from '@progress/kendo-angular-buttons';
import { RouterModule, Router } from '@angular/router';
import {
  KENDO_NOTIFICATION,
  NotificationService,
} from '@progress/kendo-angular-notification';
import { KENDO_LABEL } from '@progress/kendo-angular-label';
import { AuthService } from '../../services/auth/auth.service';
import { eyeIcon, SVGIcon } from '@progress/kendo-svg-icons';

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

// REGEX per la password: https://www.geeksforgeeks.org/javascript-program-to-validate-password-using-regular-expressions/
export class RegisterPage {
  public eye: SVGIcon = eyeIcon;
  @ViewChild('password') public textbox!: TextBoxComponent;

  readonly form: FormGroup;

  private readonly authService = inject(AuthService);
  // readonly registeredUsers = this.registerService.registerUser;

  constructor(
    private fb: FormBuilder,
    private notificationService: NotificationService,
    private router: Router
  ) {
    this.form = this.fb.group({
      firstName: new FormControl('', [
        Validators.required,
        Validators.minLength(2),
      ]),

      lastName: new FormControl('', [
        Validators.required,
        Validators.minLength(2),
      ]),
      email: new FormControl('', [Validators.required, Validators.email]),
      // * La password deve avere min 8 e max 15 caratteri, almeno una lettera maiuscola, una minuscola, un numero e un carattere speciale e non deve contenere spazi
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(8),
        Validators.maxLength(15),
        Validators.pattern(
          /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@.#$!%*?&])[A-Za-z\d@.#$!%*?&]{8,15}$/
        ),
      ]),
      birthDate: new FormControl(null, [Validators.required]),
      // * Il codice fiscale deve essere di 16 caratteri + le altre condizioni
      fiscalCode: new FormControl('', [
        Validators.required,
        Validators.minLength(16),
        Validators.maxLength(16),
        Validators.pattern(
          /^[A-Z]{6}[0-9LMNPQRSTUV]{2}[ABCDEHLMPRST]{1}[0-7LMNPQRST]{1}[0-9LMNPQRSTUV]{1}[A-Z]{1}[0-9LMNPQRSTUV]{3}[A-Z]{1}$/
        ),
      ]),
    });
  }

  toggleVisibility(): void {
    const input = this.textbox.input.nativeElement;
    input.type = input.type === 'password' ? 'text' : 'password';
  }

  submit(): void {
    if (this.form.valid) {
      // Simula la registrazione dell'utente
      console.log('Form inviato:', this.form.value);

      this.authService.registerUser({
        firstName: this.form.value.firstName,
        lastName: this.form.value.lastName,
        username: this.form.value.email, // alla fine ho scelto la email come username
        password: this.form.value.password, // alla fine ho scelto di creare il campo per la psw
        email: this.form.value.email,
        birthDate: this.form.value.birthDate,
        fiscalCode: this.form.value.fiscalCode,
      });

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
