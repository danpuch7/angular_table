import { Component, OnInit } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {OwnerEntity} from "../../interfaces/owner-entity";
import {CarEntity} from "../../interfaces/car-entity";
import {Observable, of} from "rxjs";
import {catchError, tap} from "rxjs/operators";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  constructor(private http:HttpClient) { }
ownersArr!:Array<OwnerEntity>
owner:any={ aId: 2, name: 'asdasda',model:"asdadasd" }
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  ngOnInit(): void {

  }


  setOwner(){
    this.http.post('api/owners',this.owner)
    this.http.get('api/owners/1').subscribe(e =>console.log(e))


  }

}
