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

    const countDownDate = new Date('Sep 30, 2019 15:00:00').getTime();

    // Update the count down every 1 second
    const x = setInterval(() => {

      // Get todays date and time
      const now = new Date().getTime();

      // Find the distance between now and the count down date
      const distance = countDownDate - now;
      // Time calculations for days, hours, minutes and seconds
      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);
      console.log(now, 'now', 'countDownDate', countDownDate, 'distance', distance, 'days', days);

      // Output the result in an element with id="demo"
      document.getElementById('demo').innerHTML = days + 'd ' + hours + 'h '
        + minutes + 'm ' + seconds + 's ';

      // If the count down is over, write some text
      if (distance < 0) {
        clearInterval(x);
        document.getElementById('demo').innerHTML = 'EXPIRED';
        // Commence explosions!
        emojisplosions();
      }
    }, 1000);

    // Commence explosions!
    //    emojisplosions();
  }
}
