import {
  AfterContentInit,
  AfterViewInit,
  ChangeDetectionStrategy, ChangeDetectorRef,
  Component, Input,
  OnChanges,
  OnInit,
  SimpleChanges
} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {OwnerEntity} from "../../interfaces/owner-entity";
import { HttpClientService} from "../../services/http-client.service";
import {FormArray, FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {max, min} from "rxjs/operators";
import {Observable} from "rxjs";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MainComponent implements OnInit {


 showMd:boolean=false

  constructor(private http:HttpClient,private service:HttpClientService,private fb:FormBuilder,private ch:ChangeDetectorRef) {

  }
  showMdBtn()
  {
    this.showMd=!this.showMd
  }


ownersArr:any




  ngOnInit(): void {

    this.getData()
    this.service.id$?.subscribe()


  }

  getData()
  {
    this.service.getOwners().subscribe(data =>{
      this.ownersArr=data
      this.ch.markForCheck()
      console.log(this.ownersArr)
      this.service.id$.next(this.ownersArr.length+1)
    })

  }


deleteOwner(id:any)
{
  console.log(id)
  this.service.deleteOwner(id).subscribe(id=>{
    console.log(id)
    this.getData()
  })

  this.service.getOwnerById(id).subscribe(d=>{
    console.log(d)
  })
}



}
