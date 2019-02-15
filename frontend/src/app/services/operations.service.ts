import { Injectable } from '@angular/core';
import  {HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class OperationsService {
url="http://localhost:1245/"
  constructor(private http:HttpClient) { }

//                               Admin Login

  admlog(data){
    return this.http.post(this.url+'admlog',data);
  }

//                          Teacher Login

techlog(data){
  return this.http.post(this.url+'techlog',data);
}


  addtopic(data){
    return this.http.post(this.url+'addtopic',data);
  }

  fetchtopic(){
    return this.http.get(this.url+'fetchtopic');
  }

  fetchAll(){
    return this.http.get(this.url+'fetchAll');
  }

  addteach(data){
    return this.http.post(this.url+'addteacher',data);
  }

  addquiz(data){
    return this.http.post(this.url+'addquiz',data);
  }
              //                   Chapter 2 Starts
  addtopic2(data){
    return this.http.post(this.url+'addtopic2',data);
  }

  fetchtopic2(){
    return this.http.get(this.url+'fetchtopic2');
  }

  fetchAll2(){
    return this.http.get(this.url+'fetchAll2');
  }

  addquiz2(data){
    return this.http.post(this.url+'addquiz2',data);
  }
}
