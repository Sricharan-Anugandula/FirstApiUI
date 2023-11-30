import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  private basepath='https://localhost:44318/api/books';
  constructor(private http:HttpClient)  {
    
   }

   public getbooks():Observable<any>
   {
    return this.http.get(this.basepath);

   }

   public addbook(book:any):Observable<any>
   {
    return this.http.post(this.basepath,book);

   }
   
}
