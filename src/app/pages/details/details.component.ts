import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {HttpClientService} from "../../services/http-client.service";
import {OwnerEntity} from "../../interfaces/owner-entity";

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  User!:any;
  constructor(private route:ActivatedRoute,private http:HttpClientService,private router:Router) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');

    this.getOwnerById(id)
  }

  getOwnerById(id:any)
  {
    this.http.getOwnerById(id).subscribe(e=>{
      console.log(e)
      this.User=e
    })
  }

  goToPath(id:any)
  {
    this.router.navigate(['/edit/'+id])
  }
}
