import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators, FormControl, NgForm} from '@angular/forms';
import {ContactService} from '../contact.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  FormData: FormGroup;

  constructor(private builder: FormBuilder, private contact: ContactService) { }

  ngOnInit(): void {
    this.FormData = this.builder.group({
      Fullname: new FormControl('', [Validators.required]),
      Email: new FormControl('', [Validators.compose([Validators.required,
      Validators.email])]),
      Comment: new FormControl('', [Validators.required])
    });
  }

  onSubmit(FormDate) {
    console.log(FormDate);
    this.contact.PostMessage(FormDate)
      .subscribe(response => {
        location.href = '';
        console.log(response);
      }, error => {
        console.warn(error.responseText);
        console.log({error});
      });
  }
}
