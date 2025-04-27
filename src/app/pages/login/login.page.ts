import { Component, ViewChild } from '@angular/core';
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
import { RouterModule } from '@angular/router';

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
  ],
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.css'],
})
export class LoginPage {
  @ViewChild('password') public textbox!: TextBoxComponent;
  public eye: SVGIcon = eyeIcon;

  public form: FormGroup = new FormGroup({
    username: new FormControl(''),
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
  }

  clearForm(): void {
    this.form.reset();
  }
}
