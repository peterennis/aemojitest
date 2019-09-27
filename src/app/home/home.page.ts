import { Component, OnInit } from '@angular/core';
import { emojisplosion, emojisplosions } from 'emojisplosion';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  constructor() { }

  ngOnInit() {
    // Just one explosion, please.
    emojisplosion();

    // Commence explosions!
    emojisplosions();
  }
}
