import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-auth',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent {
  username = '';
  password = '';
  constructor(private authService: AuthService) {}
  login() {
    if (this.authService.login(this.username, this.password)) {
      alert('Login successful!');
    } else {
      alert('Login failed.');
    }
  }
}
