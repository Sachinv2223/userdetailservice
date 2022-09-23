import { Component, OnInit } from '@angular/core';
import { UserService } from './Services/user.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'userdetailservice';

  constructor(private userService: UserService) {
  }

  ngOnInit(): void {
    this.myObservable.subscribe({
      next(value) {
        console.log(value);
      },
      error(err) {
        console.log(err);
      },
      complete() {
        console.log('Complete');
      },
    })
  }

  myObservable = new Observable((observer) => {
    console.log('Observable starts');
    setTimeout(() => {
      observer.next('1');
    }, 1000);
    setTimeout(() => {
      observer.next('2');
    }, 2000);
    setTimeout(() => {
      observer.next('3');
    }, 3000);
    setTimeout(() => {
      observer.next('4');
    }, 4000);
    setTimeout(() => {
      observer.next('5');
    }, 5000);
    setTimeout(() => {
      observer.error('Error occured');
    }, 6000);
    setTimeout(() => {
      observer.complete();
    }, 7000);
  });



}
