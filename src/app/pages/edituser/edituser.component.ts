import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {HttpClientService} from "../../services/http-client.service";
import {FormArray, FormBuilder, FormGroup, Validators} from "@angular/forms";
import {MainComponent} from "../main/main.component";

@Component({
  selector: 'app-edituser',
  templateUrl: './edituser.component.html',
  styleUrls: ['./edituser.component.css']
})
export class EdituserComponent implements OnInit {

  constructor(private route:ActivatedRoute,private http:HttpClientService,private fb:FormBuilder) { }

  User!:any;
  RegGroup!:FormGroup
  submitDis:boolean=true

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');

    this.getOwnerById(id)

    this.RegGroup=this.fb.group({
      aFirstName:['',[Validators.required,]],
      aLastName:['',Validators.required],
      aMiddleName:['',Validators.required],
      aCars:new FormArray([])
    })
    this.http.id$.subscribe()
  }

  getOwnerById(id:any)
  {
    this.http.getOwnerById(id).subscribe(e=>{
      console.log(e)
      this.User=e
    })
  }

  get CarForm()
  {
    return this.RegGroup.controls["aCars"] as FormArray
  }

  addCar()
  {
    const carl = this.fb.group({
      name:['',Validators.required,],
      model:['',Validators.required],
      year:['',[Validators.max(2021),Validators.min(1990),Validators.required]],
      regNum:['',[Validators.required,Validators.pattern(`^[ABCEHIKMOPTX]{2}\\d{4}(?<!0{4})[ABCEHIKMOPTX]{2}$`)]],

    })
    this.CarForm.push(carl)
  }

  isValid()
  {
    if(this.RegGroup.valid && this.RegGroup.controls["aCars"].valid && this.RegGroup.touched && this.RegGroup.controls["aCars"].touched)
    {
      this.submitDis=false
    }
    else {
      this.submitDis=true
    }
  }


  addOwner(){

    if(this.RegGroup.valid && this.RegGroup.controls["aCars"].valid && this.RegGroup.touched && this.RegGroup.controls["aCars"].touched)
    {
      const data =this.RegGroup.value;
      data.id = this.User.id
       const idR = this.User.id
      console.log(data)
      this.http.putOwnerById(idR,data).subscribe(id=> {
        this.http.getOwnerById(idR).subscribe(e=>{
          console.log(e)
        })
      })
    }
    else
    {

    }

  }

}
