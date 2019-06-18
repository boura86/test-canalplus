import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { EditModalComponent } from '../edit-modal/edit-modal.component';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  p: number = 1;
  dataResponse: any;
  searchText: any;
  modelRef: NgbModalRef;
  constructor(private dataService: DataService, private modalService: NgbModal) { }

  ngOnInit() {
    this.dataService.getAllData()
    .subscribe(resp => {
      this.dataResponse = resp;
    })
  }

  /**
   * 
   *Modification du titre, date, genre
   * @param item 
   */
  updateLine(item) {
    console.log(item);
    // const injectors = {item: item};
    this.modelRef = this.modalService.open(EditModalComponent, {windowClass: 'animated slideInUp'});
    this.modelRef.componentInstance.item = item;
  }
}
