import { EventEmitter, Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  // dataEmitter = new EventEmitter<string>();
  dataEmitter = new Subject<string>();

  raiseDataEmitter(data: string) {
    // this.dataEmitter.emit(data);
    this.dataEmitter.next(data);
  }
}
