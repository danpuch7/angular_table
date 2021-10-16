import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {OwnerEntity} from "../interfaces/owner-entity";
import {BehaviorSubject} from "rxjs";
import {MainComponent} from "../pages/main/main.component";

@Injectable({
  providedIn: 'root'
})
export class HttpClientService {

  constructor(private http:HttpClient) { }

  public id$=new BehaviorSubject<any>(0);
  public data:any;
  getOwners()
  {
    return  this.http.get('api/owners')
  }


  getOwnerById(id:any)
  {
    return this.http.get('api/owners/'+id)
  }

  postOwner(owner:OwnerEntity)
  {
    return this.http.post('api/owners',owner)

  }

  deleteOwner(id:any)
  {
    return this.http.delete('api/owners/'+id)
  }

  putOwnerById(id:any,body:any)
  {
    return this.http.put('api/owners/'+id,body)
  }


}
