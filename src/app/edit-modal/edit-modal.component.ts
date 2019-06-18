import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit-modal',
  templateUrl: './edit-modal.component.html',
  styleUrls: ['./edit-modal.component.css']
})
export class EditModalComponent implements OnInit {

  @Input() item: any;
  constructor(private modalRef: NgbActiveModal, private formBuilder: FormBuilder) { }

  myForm: FormGroup
  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.myForm = this.formBuilder.group({
      titre: new FormControl(this.item.originalTitle, Validators.required),
      date: new FormControl(this.item.startYear, Validators.required),
      genre: new FormControl(this.item.genres, Validators.required)
    })
  }

  submitForm() {
    //TODO: Modifier la ligne et mettre à jour
    this.modalRef.dismiss("Cross click");
  }
}
