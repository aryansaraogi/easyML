import { Component } from '@angular/core';
import emailjs, { EmailJSResponseStatus } from 'emailjs-com';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-suggestion-page',
  templateUrl: './suggestion-page.component.html',
  styleUrls: ['./suggestion-page.component.css']
})
export class SuggestionPageComponent {
  suggestion = {
    name: '',
    subject: '',
    idea: ''
  };

  onSubmit() {
    emailjs.send('service_egxdsfr', 'template_lvqr2zn', this.suggestion, 'up7Peaw4yhzp7_HRq')
      .then((result: EmailJSResponseStatus) => {
        console.log(result.text);
        alert('Suggestion sent successfully!');
      }, (error) => {
        console.log(error.text);
        alert('Failed to send suggestion.');
      });
  }
}

