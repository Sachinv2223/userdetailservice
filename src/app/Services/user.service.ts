import { EventEmitter } from "@angular/core"

export class UserService {
    users = [
        { name: 'Sachin', job: 'Teacher', country: 'India', age: 24, avatar: 'assets/avatar-1.jpg' },
        { name: 'Varghese', job: 'Piolet', country: 'USA', age: 62, avatar: 'assets/avatar-2.jpg' },
        { name: 'Mini', job: 'Doctor', country: 'UK', age: 55, avatar: 'assets/avatar-3.jpg' },
        { name: 'Alby', job: 'Nurse', country: 'Nepal', age: 26, avatar: 'assets/avatar-4.jpg' }
    ]

    OnShowDeatilsClicked = new EventEmitter<{ name: string, job: string, country: string, age: number, avatar: string }>();

    ShowUserDetails(user: { name: string, job: string, country: string, age: number, avatar: string }) {
        this.OnShowDeatilsClicked.emit(user);
    }



}





