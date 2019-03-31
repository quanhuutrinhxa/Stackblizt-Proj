import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular 5';

  messages = [
    'Remote:~ user$ authenticate',
    'Checking stored credentials...',
    'Authentication successful.'
  ];

  ngOnInit() {
    this.setFocus();
  }

  setFocus() {
    document.getElementById("text-input").focus();
  }

  submit(text) {
    this.messages.push('Remote:~ user$ ' + text);
    this.scrollToBottom();
  }

  scrollToBottom() {
    setTimeout(
      () => {
        window.scrollTo(0,document.body.scrollHeight);
      },
      50
    );
  }
}
