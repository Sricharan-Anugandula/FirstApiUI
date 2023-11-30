import { Component ,OnInit} from '@angular/core';
import { BookService } from '../book.service';

@Component({
  selector: 'app-allbooks',
  templateUrl: './allbooks.component.html',
  styleUrls: ['./allbooks.component.css']
})
export class AllbooksComponent implements OnInit  {
 public books:any;

  constructor(private service:BookService) {
     }
     ngOnInit(): void {
      
         this.getbooks();
     }

     private getbooks():void
     {
      this.service.getbooks().subscribe(result => {
        this.books=result;
       
        console.log("book id is ",this.books.id)
       
      });
     }

}
