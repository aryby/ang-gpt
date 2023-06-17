import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ang-gpt-chatbot';

  actions=[
    {route:"home", title:'Home', icon:'house'},
    {route:"gpt", title:'GPT', icon:'person'}
  ]
}
