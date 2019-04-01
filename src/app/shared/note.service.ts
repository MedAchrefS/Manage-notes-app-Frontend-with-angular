import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class NoteService {
  public API = '//localhost:8080';
   httpheaders = new HttpHeaders({ 
    'Accept': 'application/json',
    'Content-Type': 'application/json' 
});
   

  constructor(private http: HttpClient) {
  }
  getAll(): Observable<any> {
    return this.http.get('//localhost:8080/api/notes');
  }
  
  get(id: any) {
    return this.http.get('//localhost:8080/api/notes' + '/' + id);
  }

  save(note: any): Observable<any> {
    let result: Observable<Object>;
   
    if (note.id) {
     

      console.log(JSON.stringify(note.id));
      result = this.http.put('//localhost:8080/api/notes' + '/' +note.id, JSON.stringify(note),{headers:this.httpheaders});
      console.log(JSON.stringify(note)+"/// service");
     
    } else {
      result = this.http.post('//localhost:8080/api/notes', JSON.stringify(note),{headers:this.httpheaders});
      console.log(JSON.stringify(note)+"/// service");
     
    }
    return result;
  }

  remove(id: any) {
    console.log(id);
    return this.http.delete('//localhost:8080/api/notes' + '/' + id);
  }
}
