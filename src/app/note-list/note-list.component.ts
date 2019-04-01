import { Component, OnInit } from '@angular/core';
import { NoteService } from '../shared/note.service';
import{NoteEditComponent} from '../note-edit/note-edit.component';
@Component({
  selector: 'app-note-list',
  templateUrl: './note-list.component.html',
  styleUrls: ['./note-list.component.css']
})
export class NoteListComponent implements OnInit {
  Notes:Array<any>;
  constructor(private NoteService:NoteService,
              private noteEdit:NoteEditComponent ) { }

  ngOnInit() {
    this.NoteService.getAll().subscribe(data =>{
        this.Notes=data;
    });
  }
  deleteUser(id:any){
   console.log(id+"ddddd");
   this.NoteService.remove(id).subscribe(result => {
    this.noteEdit.gotoList();
  }, error => console.error(error));
  console.log("sssss");
  
  }

}
