import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { User } from 'src/app/interfaces/user';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.css'],
})
export class UserCardComponent implements OnInit {
  @Input() user!: User;
  @Output() onToggleStatus: EventEmitter<User> = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  onToggle(user: User) {
    this.onToggleStatus.emit(user);
  }
}
