import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  // <button (click)='myFunction()' >Show alert</button>
  //  myFunction(): string{ 
  //      alert('Show');
  //      return ;
  //  } 
   name = '';

}
