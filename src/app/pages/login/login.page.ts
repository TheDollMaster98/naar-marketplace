import { Component, inject, ViewChild } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import {
  TextBoxComponent,
  InputsModule,
  FormFieldModule,
} from '@progress/kendo-angular-inputs';
import { CheckBoxModule } from '@progress/kendo-angular-inputs';
import { ButtonModule } from '@progress/kendo-angular-buttons';
import { eyeIcon, SVGIcon } from '@progress/kendo-svg-icons';
import { AvatarModule } from '@progress/kendo-angular-layout';
import { KENDO_LABEL } from '@progress/kendo-angular-label';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from '../../services/auth/auth.service';
import {
  KENDO_NOTIFICATION,
  NotificationService,
} from '@progress/kendo-angular-notification';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    RouterModule,
    InputsModule,
    CheckBoxModule,
    ButtonModule,
    FormFieldModule,
    AvatarModule,
    KENDO_LABEL,
    KENDO_NOTIFICATION,
  ],
  templateUrl: './login.page.html',
  styleUrl: './login.page.css',
})
export class LoginPage {
  private readonly _authService = inject(AuthService);
  // readonly registeredUsers = this.registerService.registerUser;
  // ! Visto che non va nel HTML, lo metto private
  private readonly _router = inject(Router);
  // notifica di login con Kendo Notification
  private readonly _notificationService = inject(NotificationService);

  @ViewChild('password') public textbox!: TextBoxComponent;
  public eye: SVGIcon = eyeIcon;

  public form: FormGroup = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
    loggedin: new FormControl(false),
  });

  ngAfterViewInit(): void {
    this.textbox.input.nativeElement.type = 'password';
  }

  toggleVisibility(): void {
    const input = this.textbox.input.nativeElement;
    input.type = input.type === 'password' ? 'text' : 'password';
  }

  login(): void {
    this.form.markAllAsTouched();
    console.log('Login:', this.form.value);

    // Controllo se l'utente è registrato
    if (this.form.invalid) {
      console.log('Fail Login:', this.form.value);
      this.showLoginNotification('Compila tutti i campi!', 'error');
      return;
    }

    // REFACTORY inerente a riga 79:  salvo su email e password i valori del form per usarli per la notifica
    const { email, password } = this.form.value;
    const success = this._authService.loginUser(email, password);

    if (success) {
      this.showLoginNotification('Login effettuato con successo!', 'success');
      this._router.navigate(['/products']);
    } else {
      this.showLoginNotification('Credenziali non valide!', 'error');
    }
  }

  clearForm(): void {
    this.form.reset();
  }

  showLoginNotification(message: string, type: 'success' | 'error'): void {
    this._notificationService.show({
      content: message,
      hideAfter: 3000,
      position: { horizontal: 'center', vertical: 'bottom' },
      animation: { type: 'fade', duration: 300 },
      type: { style: type },
    });
  }
}
