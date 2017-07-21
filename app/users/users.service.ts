import { Injectable } from "@angular/core"
import { Http,HttpModule} from '@angular/http'
import { Observable } from 'rxjs'
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/catch'
import 'rxjs/add/operator/retry'

@Injectable()


export class userServices{
    private _url = "https://jsonplaceholder.typicode.com/users";
    constructor(private _http:Http){}

    getUsers(){       
        var allUsers=this._http.get(this._url)
            .map(response=>response.json());

        return allUsers;
    }

    private _errhandler(err:any){

    }
}