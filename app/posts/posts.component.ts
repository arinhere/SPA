import { Http } from '@angular/http';
import { postsService } from './posts.service';
import { userServices } from './../users/users.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
    templateUrl: './posts.template.html',
    providers: [postsService, userServices]
})

export class postComponent implements OnInit{
    postsData=[];
    users=[];
    comments=[];
    isloading=true;
    content;
    heading;
    isShowing=false;
    showComments;

    constructor(
        private _postsService: postsService, 
        private _http: Http, 
        private _userService: userServices){
    } 

    ngOnInit(){
         this.showAllPosts();

        this._userService.getUsers()
        .subscribe(response=>{
            this.users=response;
        })
    }

    showAllPosts(){
        this._postsService.getPosts()
        .subscribe(result=>{
            this.postsData=result;
            this.isloading=false;
        });
    }

    onChange(usrid: number){
        this.isloading=true;
        if(usrid==0){
            this.showAllPosts();
        }
        else{
            this._postsService.getUserPosts(usrid)
            .delay(1000)
            .subscribe(result=>{
                this.postsData=result;
                this.isloading=false;
            });
        }
    }

    populate(id: number){
        this.showComments=true;
        let url="https://jsonplaceholder.typicode.com/posts/" + id; 
        this._http.get(url)
        .subscribe(result=>{
            this.isShowing=true;
            this.content=result.json().body;
            this.heading=result.json().title;
        });

        url="https://jsonplaceholder.typicode.com/posts/" + id + "/comments"; 
        this._http.get(url)
        .subscribe(res=>{
            this.showComments=false;
            this.comments=res.json();
        });
    }
}