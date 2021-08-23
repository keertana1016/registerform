import { Component,OnInit} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-personal-details',
  templateUrl: './personal-details.component.html',
  styleUrls: ['./personal-details.component.css']
})
export class PersonalDetailsComponent implements OnInit {
  countries;
 personalForm = new FormGroup({
   fullName: new FormControl('', Validators.required),
   gender: new FormControl('', Validators.required),
   country: new FormControl('', Validators.required),
   state: new FormControl('', Validators.required),
   phoneNumber: new FormControl('', Validators.required)
 })
 code = '';
 country = [
  {
    name: 'India',
    code: '+91',
    sh:'IN'
  },
  {
    name: 'America',
    code: '+80',
    sh:'USA'
  },
  {
    name: 'Europe',
    code: '+43',
    sh:'EU'
  },
  {
    name: 'Algeria',
    code: '+12',
    sh:'DZ'
  },
  {
    name: 'American Samoa',
    code: '16',
    sh:'AS'
  }
 ]
 
  constructor(private router : Router) {

   }

  ngOnInit() {
    console.log(localStorage.getItem("personalForm"));
    if (localStorage.getItem('personalForm')) {
      const data = JSON.parse(localStorage.getItem('personalForm'));
      this.personalForm = new FormGroup({
        fullName: new FormControl(data.fullName, Validators.required),
        gender: new FormControl(data.gender, Validators.required),
        country: new FormControl(data.country, Validators.required),
        state: new FormControl(data.state, Validators.required),
        phoneNumber: new FormControl(data.phoneNumber, Validators.required)
      })
    }
    this.countries = this.country[0].sh;
    this.code = this.country[0].code;
  }
  selectstate(states){
    console.log(states)
    this.personalForm.patchValue({
      state:states

    })
  }

  selectcountry(countrys){ 
    this.personalForm.patchValue({
      country:countrys
    })
    const country = this.country.find(x => x.name === countrys);
    this.code = country.code;
    this.countries = country.sh;
    console.log(this.personalForm.value);
  }

  gender(g){
    console.log(g)
    this.personalForm.patchValue({
      gender:g
    })
    
  }
  next() {
    console.log("hiii")
    console.log(this.personalForm.value)
    console.log(this.personalForm.invalid);
    if(this.personalForm.invalid){
      return
    }
    console.log(this.personalForm.value.fullName)
    localStorage.setItem("personalForm",JSON.stringify(this.personalForm.value))
    this.router.navigate(['/companydetails'])
  }
}


