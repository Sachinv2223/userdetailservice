import { ChangeDetectorRef, Component, NgZone, OnInit } from '@angular/core';
import { DataService } from '../Services/data.service';

@Component({
  selector: 'app-comp2',
  templateUrl: './comp2.component.html',
  styleUrls: ['./comp2.component.css']
})
export class Comp2Component implements OnInit {

  constructor(private dataService: DataService, private ngZone: NgZone, private ref: ChangeDetectorRef) { }

  inputText1: string = 'Initial';

  ngOnInit(): void {
    this.dataService.dataEmitter.subscribe({
      // next: (val: string) => {
      //   this.ngZone.run(() => {
      //     this.inputText1 = val;
      //     console.log(this.inputText1);
      //   })
      next: (val: string) => {
        this.inputText1 = val;
        this.ref.detectChanges();
      }
    })
  }



}
