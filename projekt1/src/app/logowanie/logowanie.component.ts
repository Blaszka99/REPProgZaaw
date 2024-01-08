// logowanie.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-logowanie',
  templateUrl: './logowanie.component.html',
  styleUrls: ['./logowanie.component.css']
})
export class LogowanieComponent {
  username: string = '';
  password: string = '';

  login() {
    // Tutaj można umieścić logikę logowania, na przykład wysłanie żądania do serwera

    console.log(`Zalogowano: ${this.username}`);
    // Dodaj logikę do obsługi logowania, na przykład wywołanie usługi do autentykacji
  }
}
