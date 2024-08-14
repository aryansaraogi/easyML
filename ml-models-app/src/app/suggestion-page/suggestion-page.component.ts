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
    emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', this.suggestion, 'YOUR_USER_ID')
      .then((result: EmailJSResponseStatus) => {
        console.log(result.text);
        alert('Suggestion sent successfully!');
      }, (error) => {
        console.log(error.text);
        alert('Failed to send suggestion.');
      });
  }
}

