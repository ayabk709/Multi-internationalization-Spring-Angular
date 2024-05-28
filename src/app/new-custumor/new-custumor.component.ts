import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {catchError, throwError} from "rxjs";
import {custumor} from "../model/custumor.model";
import {CostumerService} from "../services/costumer.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-new-custumor',
  templateUrl: './new-custumor.component.html',
  styleUrl: './new-custumor.component.css'
})
export class NewCustumorComponent implements OnInit{
  //declare une forme
  newCustumorForm!: FormGroup;
  //use fb throughout the component to create and manage forms.
  constructor(private fb :FormBuilder
              ,private custumerService: CostumerService,
              private router:Router
  ) {}
  ngOnInit() {
    //initialisaion de forme
    //we create from with the formgroup and we manage it with the formbuilder service that we injected in the constructor
    this.newCustumorForm = new FormGroup({
      // form field must be filled in before the form can be submitted.
      name: this.fb.control(null, [Validators.required, Validators.minLength(4)]),
      email: this.fb.control(null, [Validators.required, Validators.email]),
    });
  }
  Handlesavecust(){
    //everythng i put int he inputsare gonna be storses in the object custumor
    let customer:custumor = this.newCustumorForm.value;
    //call the service to save the customer
    this.custumerService.savecustumor(customer).subscribe({
      next: (data) => {
       alert('Customer saved successfully');
        this.router.navigateByUrl("/custumors");
      },
      error: (error) => {
        console.log('Error saving customer');
      }
      });
  }
}
