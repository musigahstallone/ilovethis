import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private isAuthenticated = false;
  private readonly localStorageKey = 'auth_token';

  constructor() {
    this.isAuthenticated = !!this.getToken();
  }

  login(username: string, password: string): boolean {
    // Demo: always succeed
    this.setToken('dummy_token');
    this.isAuthenticated = true;
    return this.isAuthenticated;
  }

  logout() {
    this.removeToken();
    this.isAuthenticated = false;
  }

  isLoggedIn(): boolean {
    return this.isAuthenticated;
  }

  private getToken(): string | null {
    return localStorage.getItem(this.localStorageKey);
  }

  private setToken(token: string): void {
    localStorage.setItem(this.localStorageKey, token);
  }

  private removeToken(): void {
    localStorage.removeItem(this.localStorageKey);
  }
}