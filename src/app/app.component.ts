import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'flickr';
  ngOnInit() {
  	localStorage.setItem('users', JSON.stringify([{name: 'admin', password: '123'}]))
  }
}
