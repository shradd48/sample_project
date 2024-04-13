import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommunicationService {
  private apiUrl: string = 'https://jsonplaceholder.typicode.com/users'; // Dummy API URL
  private openFirstModelSource = new BehaviorSubject<boolean>(false);
  private openSecondModelSource = new BehaviorSubject<boolean>(false);
  private openThirdModelSource = new BehaviorSubject<boolean>(false);
  openFirstModel$: Observable<boolean> = this.openFirstModelSource.asObservable();
  openSecondModel$: Observable<boolean> = this.openSecondModelSource.asObservable();
  openThirdModel$: Observable<boolean> = this.openThirdModelSource.asObservable();
  constructor(private http: HttpClient) { }

  getData(): Observable<string[]> {
    return this.http.get<string[]>(this.apiUrl);
  }

  setOpenFirstModel(open: boolean): void {
    this.openFirstModelSource.next(open);
  }
  setOpenSecondModel(open: boolean): void {
    this.openSecondModelSource.next(open);
  }
  setOpenThirdModel(open: boolean): void {
    this.openThirdModelSource.next(open);
  }
}
