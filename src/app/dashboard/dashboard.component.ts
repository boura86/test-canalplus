import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  dataResponse: any;
  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.getAllData()
    .subscribe(resp => {
      this.dataResponse = resp;
      console.log(resp);
    })
  }

onScroll() {
  console.log("icici")
}
}
