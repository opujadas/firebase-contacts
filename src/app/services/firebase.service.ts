import {Injectable} from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import 'rxjs/add/operator/map'; 

//import { Business } from '../Business';
//import { Category } from '../Category';


@Injectable()

export class FirebaseService
{
	//businesses: FirebaseListObservable<Business[]>;
	//categories: FirebaseListObservable<Category[]>;

	constructor(private _af: AngularFireDatabase)
	{

	}

	getBusinesses()
	{
	/*
		this.businesses = this._af.database.list('/businesses') as 
			FirebaseListObservable<Business>;
		return this.businesses;  */
	}

	getCategories()
	{
		/*
		this.categories = this._af.database.list('/categories') as 
			FirebaseListObservable<Category>;
		return this.categories;*/  
	}

}