import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UiService {
  constructor() {}
  private subject = new Subject<any>();

  onToggle(): Observable<any> {
    return this.subject.asObservable();
  }
}
