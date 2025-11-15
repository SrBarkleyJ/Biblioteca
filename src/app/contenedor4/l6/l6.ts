import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-l6',
  imports: [],
  templateUrl: './l6.html',
  styleUrl: './l6.css',
})
export class L6 {
 loginForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      rememberMe: [false]
    });
  }

  onSubmit() {
    if (this.loginForm.valid) {
      console.log('Login data:', this.loginForm.value);
      // Aquí iría la lógica de autenticación
    } else {
      // Marcar todos los campos como touched para mostrar errores
      Object.keys(this.loginForm.controls).forEach(key => {
        this.loginForm.get(key)?.markAsTouched();
      });
    }
  }

  goToRegister() {
    console.log('Navigate to register page');
    // Navegación al componente de registro
  }

  forgotPassword() {
    console.log('Forgot password flow');
    // Lógica para recuperar contraseña
  }
}
