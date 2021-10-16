import {ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {FormArray, FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {HttpClient} from "@angular/common/http";
import {HttpClientService} from "../../services/http-client.service";
import {MainComponent} from "../main/main.component";

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ModalComponent implements OnInit {

  constructor(private http:HttpClientService,private fb:FormBuilder,private sh:MainComponent,private ch:ChangeDetectorRef) {

  }
  RegGroup!:FormGroup
  submitDis:boolean=true

  secValidator:boolean=false
  firstValidator:boolean=false
  midValidator:boolean=false
  ngOnInit(): void {
    this.RegGroup=this.fb.group({
      aFirstName:['',[Validators.required,]],
      aLastName:['',Validators.required],
      aMiddleName:['',Validators.required],
      aCars:new FormArray([])
    })
    this.http.id$.subscribe()
  }

  get CarForm()
  {
    return this.RegGroup.controls["aCars"] as FormArray
  }

  closeMdBtn()
  {
    this.sh.showMd=false

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

  IsValidTrue()
  {
    if(!this.RegGroup.controls['aFirstName'].valid)
    {
      this.firstValidator= true
    }
    else {
      this.firstValidator= false
    }

    if(!this.RegGroup.controls['aLastName'].valid)
    {
      this.secValidator= true
    }
    else {
      this.secValidator= false
    }

    if(!this.RegGroup.controls['aMiddleName'].valid)
    {
      this.midValidator= true
    }
    else {
      this.midValidator= false
    }

  }


  addOwner(){

    if(this.RegGroup.valid && this.RegGroup.controls["aCars"].valid && this.RegGroup.touched && this.RegGroup.controls["aCars"].touched)
    {
      const data =this.RegGroup.value;
      data.id = this.http.id$.value
      console.log(data)
      this.http.postOwner(data).subscribe(id=> {

        this.sh.getData()
      })
    }
    else
    {

    }

  }
}
