import { Component, OnInit,  } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router'

@Component({
  selector: 'app-email',
  templateUrl: './email.component.html',
  styleUrls: ['./email.component.css']
})
export class EmailComponent implements OnInit {
  emailForm = new FormGroup({
    number1: new FormControl('', Validators.required),
    number2: new FormControl('', Validators.required),
    number3: new FormControl('', Validators.required),
    number4: new FormControl('', Validators.required),
    number5: new FormControl('', Validators.required)
    })
    otp="";
  constructor(private router : Router) { }

  ngOnInit() {
    console.log("enter into opt")
    console.log(localStorage.getItem("emailForm"))
  }
 finish() {
    console.log(this.emailForm.value)
    localStorage.setItem("emailForm", this.otp)
    this.router.navigate(['/welcome'])
   
  }
  back() {
    console.log("Back")
    this.router.navigate(['/companydetails'])

 

  }
 inputChange(value,id){
 if(value.length === 1){
   this.otp=this.otp+value;
   document.getElementById(id).focus()
 }

 }
  
}

