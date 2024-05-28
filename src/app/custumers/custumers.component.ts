import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { CostumerService } from "../services/costumer.service";
import {catchError, map, Observable, throwError} from "rxjs";
import { custumor } from "../model/custumor.model";
import { FormBuilder, FormGroup } from "@angular/forms";
import {response} from "express";
import {Router} from "@angular/router";
@Component({
  selector: 'app-custumers',
  templateUrl: './custumers.component.html',
  styleUrls: ['./custumers.component.css']
})
export class CustumersComponent implements OnInit {
  customers!: Observable<Array<custumor>>;
  errorMessage!: string;
  searchFormGroup!: FormGroup;

  constructor(
    private custumerService: CostumerService,
    private fb: FormBuilder,
    private router : Router
  ) {}

  ngOnInit() {
    this.searchFormGroup = this.fb.group({
      keyword: this.fb.control("")
    });
    this.handleSearchCustumers();

    // this.customers = this.custumerService.getCostumers().pipe(
    //   catchError((error: any) => {
    //     this.errorMessage = error.message;
    //     return throwError(error);
    //   })
    // );
  }

  handleSearchCustumers() {
    let keyword = this.searchFormGroup?.value.keyword;
    this.customers = this.custumerService.searchCustumores(keyword).pipe(
      catchError((error: any) => {
        this.errorMessage = error.message;
        return throwError(error);
      })
    );
  }

  handleDeleteCustomer(c: custumor) {
    let conf = confirm("Are you sure?");
    if(!conf) return;

    this.custumerService.deleteCustumor(c.id).subscribe({
      next: (resp) => {
        this.customers = this.customers.pipe(
          map(data => data.filter(customer => customer.id !== c.id))
        );
      },
      error: err => {
        console.log(err);
      }
    });
  }

  handleCustomerAccounts(customer: custumor) {
    //{ state: customer } refers to passing the entire customer object as state data.
    //used during navigation to pass data.
    this.router.navigateByUrl("/CustumorAccount/"+customer.id,{state :customer});

  }


}
