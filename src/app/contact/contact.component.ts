import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators, FormControl, NgForm, Form} from '@angular/forms';
import {ContactService} from '../contact.service';
import {HttpClient} from '@angular/common/http';
import validate = WebAssembly.validate;

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  form: FormGroup;
  name: FormControl = new FormControl('', [Validators.required]);
  email: FormControl = new FormControl('', [Validators.required, Validators.email]);
  message: FormControl = new FormControl('', [Validators.required, Validators.maxLength(256)]);
  honeypot: FormControl = new FormControl('');
  submitted: boolean = false;
  isLoading: boolean = false;
  responsMessage: string;

  constructor(private formBuilder: FormBuilder, private contact: ContactService, private http: HttpClient) {
    this.form = this.formBuilder.group({
      name: this.name,
      email: this.email,
      message: this.message,
      honeypot: this.honeypot
    });
  }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      Fullname: new FormControl('', [Validators.required]),
      Email: new FormControl('', [Validators.compose([Validators.required,
      Validators.email])]),
      Comment: new FormControl('', [Validators.required])
    });
  }

  onSubmit() {
    if (this.form.status == 'VALID') {
      this.form.disable();
      var formData: any = new FormData();
      formData.append("name", this.form.get("name").value);
      formData.append("email", this.form.get("email").value);
      this.isLoading = true;
      this.submitted = false;
      this.http.post("fgjkldjfglk", formData).subscribe(
        (response) => {
          if (response["result"] == "success") {
            this.responsMessage = "Thanks for the message! I'll get back to you soon!";
          } else {
            this.responsMessage = "Opps! something went wrong.. reload the page and try again.";
          }
          this.form.enable();
          this.submitted = true;
          this.isLoading = false;
          console.log(response);
        },
        (error => {
          this.responsMessage = "Opps! An error occurred.. Reload the page and try again.";
          this.form.enable();
          this.submitted = true;
          this.isLoading = false;
          console.log(error);
        })
      );
    }
  }
}
