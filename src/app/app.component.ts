import { Component, OnInit } from '@angular/core';
import { UserService } from './Services/user.service';
import { filter, from, map, Observable, of, interval } from 'rxjs';
import { DataService } from './Services/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'userdetailservice';

  constructor(private userService: UserService, private dataServiec: DataService) {
  }

  //*Create Observables using 
  //! new Observable keyword
  // myObservable = new Observable((observer) => {
  //   console.log('Observable starts');
  //   setTimeout(() => {
  //     observer.next('1');
  //   }, 1000);
  //   setTimeout(() => {
  //     observer.next('2');
  //   }, 2000);
  //   setTimeout(() => {
  //     observer.next('3');
  //   }, 3000);
  //   setTimeout(() => {
  //     observer.next('4');
  //   }, 4000);
  //   setTimeout(() => {
  //     observer.next('5');
  //   }, 5000);
  // setTimeout(() => {
  //   observer.error('Error occured');
  // }, 6000);
  //   setTimeout(() => {
  //     observer.complete();
  //   }, 7000);
  // });

  //*Create Observables using 
  //! Observable.create keyword
  // myObservable = Observable.create((observer: { next: (arg0: string) => void; }) => {
  //   console.log('Observable starts');
  //   setTimeout(() => {
  //     observer.next('A');
  //   }, 1000);
  //   setTimeout(() => {
  //     observer.next('B');
  //   }, 2000);
  //   setTimeout(() => {
  //     observer.next('C');
  //   }, 3000);
  // })

  //*Create Observables using 
  //! of() and from()
  //TODO We can convert PROMISE to OBSERVABLE using from() method
  array1 = [1, 2, 3, 4, 5];
  array2 = ['A', 'B', 'C', 'D', 'E'];
  // myObservable = of(...this.array1, ...this.array2);
  // myObservable = from(this.array2.concat(this.array1.map((val) => {
  //   return val.toString();
  // })));

  //! ----RxJs Operators----
  // myObservable = from(this.array1);
  // transformedObservable = this.myObservable.pipe(map((item) => (item * 5)));
  // filteredObservable = this.transformedObservable.pipe(filter((value) => (value > 10)));
  //TODO     ---OR---
  // filteredObservable = from(this.array1).pipe(
  //   map((item) => (item * 5)),
  //   filter((value) => (value > 10))
  // );

  //! ----RxJs Interval() fn ----
  counterObservable = interval(1000);
  counterSub: any;

  unsubscribe() {
    this.counterSub.unsubscribe();
  }

  subscribe() {
    this.counterSub = this.counterObservable.subscribe({
      next: (val: any) => {
        console.log(val);
      }
    });
  }



  ngOnInit(): void {
    // this.filteredObservable.subscribe({
    //   next: (value: any) => {
    //     console.log(value);
    //   },
    //   error: (err: any) => {
    //     alert(err);
    //   },
    //   complete: () => {
    //     console.log('Complete');
    //   },
    // });

    // this.counterSub = this.counterObservable.subscribe({
    //   next: (val: any) => {
    //     console.log(val);
    //   }
    // })
  }
}
