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
  patch: string = 'Cambia status';
  patchType: string = 'patch';
  enablePatch: boolean = false;
  user!: User;
  id!: number;
  @Output() btnClick = new EventEmitter();
  subscription!: Subscription;

  constructor(private userService: UserService) {
    this.enablePatch = false;
  }

  ngOnInit(): void {}

  toggleClick() {
    this.userService.getSpecificUser(this.id).subscribe(
      (user) => (this.user = user),
      (err) => alert(`Errore 404: risorsa non trovata o danneggiata`)
    );
  }

  toggleDelete(user: User) {
    // this.userService.deleteUser(user).subscribe((user) => console.log(user));
    this.softDeleted = !this.softDeleted;
  }

  toggleEdit(user: User) {
    this.userService
      .updateUserStatus({
        ...user,
        status: this.user.status === 'active' ? 'inactive' : 'active',
      })
      .subscribe(() => (this.enablePatch = true));
  }
}
