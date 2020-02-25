import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class GithubService {

  constructor(private http: HttpClient) { }

  getRepos(){
    return this.http.get("https://api.github.com/search/repositories?q=created:%3E2020-01-25&sort=stars&order=desc")
  }
}
