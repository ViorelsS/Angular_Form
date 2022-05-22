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
  text: string = 'Richiedi';
  user!: User;
  @Output() btnClick = new EventEmitter();
  subscription!: Subscription;

  constructor(private userService: UserService) {}

  ngOnInit(): void {}

  toggleClick() {
    this.userService
      .getSpecificUser(101)
      .subscribe((user) => (this.user = user));
  }
}
