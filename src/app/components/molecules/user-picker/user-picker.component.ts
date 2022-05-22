import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Subscription } from 'rxjs';
import { User } from 'src/app/interfaces/user';
import { UserService } from 'src/app/services/http/user.service';

@Component({
  selector: 'app-user-picker',
  templateUrl: './user-picker.component.html',
  styleUrls: ['./user-picker.component.css'],
})
export class UserPickerComponent implements OnInit {
  softDeleted: boolean = false;
  text: string = 'Richiedi';
  delete: string = 'Delete';
  user!: User;
  id!: number;
  @Output() btnClick = new EventEmitter();
  subscription!: Subscription;

  constructor(private userService: UserService) {}

  ngOnInit(): void {}

  toggleClick() {
    this.userService
      .getSpecificUser(this.id)
      .subscribe((user) => (this.user = user));
  }

  toggleDelete(user: User) {
    // this.userService.deleteUser(user).subscribe((user) => console.log(user));
    this.softDeleted = !this.softDeleted;
  }
}
