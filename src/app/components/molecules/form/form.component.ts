import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { User } from 'src/app/interfaces/user';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent implements OnInit {
  @Output() onAddUser: EventEmitter<User> = new EventEmitter();
  @Input() user!: User;
  submitButtonMsg: string = 'Registra utente';
  name!: string;
  email!: string;
  gender!: string;
  status: string = 'active'; //By default the status is set to active

  constructor() {}

  ngOnInit(): void {}

  onSubmit() {
    if (!this.name) {
      alert('Please add a name!');
    }

    const newUser = {
      name: this.name,
      email: this.email,
      gender: this.gender,
      status: 'active',
    };

    console.log(this.name, this.email);
    this.onAddUser.emit(newUser);

    this.name = '';
    this.email = '';
    this.gender = '';
    this.status = '';
  }
}
