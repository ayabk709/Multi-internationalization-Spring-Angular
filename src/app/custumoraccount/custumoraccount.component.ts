import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {custumor} from "../model/custumor.model";

    @Component({
      selector: 'app-custumoraccount',
      templateUrl: './custumoraccount.component.html',
      styleUrl: './custumoraccount.component.css'
                })
    export class CustumoraccountComponent implements OnInit{
  //used to access information about the currently activated route
          customerid!: string;
          custumer! :custumor;
    //   this.router.getCurrentNavigation() gets the current navigation object, which represents the navigation that caused the component to load.
    // ?.extras.state accesses the state property of the navigation extras, which is an object that holds any additional state data passed during navigation.
    //   as Customer casts the state data to type Customer. Here, Customer presumably refers to a model or interface representing customer data in your application.
    //   The result is assigned to the custumer property of the component or service.
    //   extras.state is used to access the state data passed during navigation. In this case, the state data is expected to be of type Customer.for
      //example wheni i have the id=2, so from this usng state it will get data of id=2
                    constructor(private route:ActivatedRoute,private router:Router) {
                      //after navigation to retrieve and type-cast the passed data.
                      this.custumer=this.router.getCurrentNavigation()?.extras.state as custumor;

          }
      ngOnInit() {
        this.customerid=this.route.snapshot.params['id'];

          }


}
