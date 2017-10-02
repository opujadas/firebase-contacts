import { Component } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule, FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent 
{
  title = 'app';
  contacts = {};

  constructor(db: AngularFireDatabase)
  {
    	db.list('contacts').subscribe(res => 
    	{
    		console.log('On est dedans');
    		console.log(res); 
    		this.contacts = res; 
    		console.log(this.contacts); 
    	});


    
    /*db.object('profile/1').subscribe(console.log);
	*/
    // db.list('items').push({ name: 'new item' }).then(console.log);

 /* 	this.items = db.list('items').subscribe(res => {
  			console.log(res); 
  		});
  	console.log(this.items); */
/*  		.subscribe(res => {
  			console.log(res); 
  		}); //.valueChanges();
  	console.log(this.items);*/ 
  }
	
}
