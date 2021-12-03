import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular ' + VERSION.major;
  myComapny = "Coforge India Limited";
  companyAddr = "Greater Noida";
  disableStat = false;

  months = ["January", "February", "March", "April", "May", "June", "July", 
     "August", "September", "October", "November", "December"];
     selectedMonth: any;

  changemonths(event: any) {
      alert("Changed month from the Dropdown : " + (this.selectedMonth));
   }

  myClickFunction(event: any) {
    alert("Button is clicked");
    console.log(event);
  }
}

