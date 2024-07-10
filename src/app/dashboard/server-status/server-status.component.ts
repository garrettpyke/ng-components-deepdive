import { Component, input, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-server-status',
  standalone: true,
  imports: [],
  templateUrl: './server-status.component.html',
  styleUrl: './server-status.component.css',
})
export class ServerStatusComponent implements OnInit, OnDestroy {
  currentStatus: 'online' | 'offline' | 'unknown' = 'offline';
  private interval?: ReturnType<typeof setInterval>; // synax means that the type is whatever is returned by setInterval

  constructor() {}

  ngOnInit() {
    console.log('OnInit');
    // Simulate server status changes every 5 seconds
    this.interval = setInterval(() => {
      const rnd = Math.random();

      if (rnd < 0.5) {
        this.currentStatus = 'online';
      } else if (rnd > 0.5 && rnd < 0.9) {
        this.currentStatus = 'offline';
      } else {
        this.currentStatus = 'unknown';
      }
    }, 5000);
  }

  // Remove timer from memory when component is terminated (avoid a memory leak)
  ngOnDestroy() {
    console.log('OnDestroy');
    clearTimeout(this.interval);
  }
}
