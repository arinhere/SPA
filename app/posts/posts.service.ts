import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class postsService{
    constructor(private _http: Http){            
    }
    
    getPosts(){    
        let url="https://jsonplaceholder.typicode.com/posts";     

        var serverPosts=this._http.get(url)
        .map(result=>result.json());

        return serverPosts;
    }

    getUserPosts(userId: number){    
        let url="https://jsonplaceholder.typicode.com/posts?userId=" + userId;     

        var serverPosts=this._http.get(url)
        .map(result=>result.json());

        return serverPosts;
    }
}

