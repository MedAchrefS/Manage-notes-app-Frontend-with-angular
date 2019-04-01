import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { NoteService } from '../shared/note.service';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-note-edit',
  templateUrl: './note-edit.component.html',
  styleUrls: ['./note-edit.component.css']
})
export class NoteEditComponent implements OnInit,OnDestroy  {
  note: any = {};
  sub: Subscription;
  path: any;
  constructor(private route: ActivatedRoute,
    private router: Router,
    private noteService: NoteService,) { 
   
      
    }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      const id = params['id'];
     
      if (id) {
        this.noteService.get(id).subscribe((note: any) => {
          if (note) {
           console.log(JSON.stringify(note)+"/////\\\\");
            this.note = note;
          
           console.log(this.note+"/////\\\\");
          
          } else {
            console.log(`Note with id '${id}' not found, returning to list`);
            this.gotoList();
          }
        });
      }
    });
  }
  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  gotoList() {
    this.router.navigate(['/note-list']);
  }

  save(form: NgForm) {
    console.log(JSON.stringify(form)+"///");
    
    this.noteService.save(form).subscribe(result => {
      this.gotoList();
    }, error => console.error(error));
  }

  delete(id) {
    console.log(id);
    this.noteService.remove(id).subscribe(result => {
      this.gotoList();
    }, error => console.error(error));
  }
}
