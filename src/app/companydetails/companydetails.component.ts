import { Component,OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router'

@Component({
  selector: 'app-companydetails',
  templateUrl: './companydetails.component.html',
  styleUrls: ['./companydetails.component.css']
})
export class CompanydetailsComponent implements OnInit {
  companyForm = new FormGroup({
    companyName: new FormControl('', Validators.required),
    image: new FormControl('', Validators.required),
    eMail: new FormControl('', Validators.required),
    jobTitle: new FormControl('', Validators.required),
    jobExperience: new FormControl('', Validators.required)
   })
 
   file: any;
   imagePreview: any;
   constructor( private router :Router) { }
 
   ngOnInit() {
     console.log(localStorage.getItem("companyForm"))
     if(localStorage.getItem("companyForm")) {
       const data=JSON.parse(localStorage.getItem("companyForm"))
       this.companyForm = new FormGroup({
         companyName: new FormControl(data.companyName, Validators.required),
         image: new FormControl(data.image, Validators.required),
         eMail: new FormControl(data.eMail, Validators.required),
         jobTitle: new FormControl(data.jobTitle, Validators.required),
         jobExperience: new FormControl(data. jobExperience, Validators.required)
        })
        this.imagePreview=this.companyForm.value.image
        }
   }
   sendotp() {
     console.log(this.companyForm.value)
     console.log(this.companyForm.invalid)
     if(this.companyForm.invalid){
       return
     }
      
       console.log(this.companyForm.value.fullName)
       localStorage.setItem("companyForm",JSON.stringify(this.companyForm.value))
       this.router.navigate(['/email'])
      
   }
   back(){
     this.router.navigate([''])
   }
 
   onImagePicker(event): void {
     const file = event.target.files[0];
     this.file = event.target.files[0];
     if (file) {
       const reader = new FileReader();
       reader.onload = () => {
         this.imagePreview = reader.result as string;
         this.companyForm.patchValue({
           image: this.imagePreview
         })
         // this.imageValidation = false;
       };
       reader.readAsDataURL(file);
     }
   }
  }
 
 