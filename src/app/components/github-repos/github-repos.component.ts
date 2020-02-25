import { Component, OnInit } from '@angular/core';
import { GithubService } from 'src/app/services/github.service';

@Component({
  selector: 'app-github-repos',
  templateUrl: './github-repos.component.html',
  styleUrls: ['./github-repos.component.css']
})
export class GithubReposComponent implements OnInit {

  repos: any = []
  oldRepos: any =[]
  search : string = ""

  constructor(private githubService: GithubService) { }

  ngOnInit(): void {
    this.getAllRepos()
  }

  getAllRepos(){
    this.githubService.getRepos().subscribe((res: any[]) => {this.oldRepos = this.repos = res['items']} )
  }

  searchRepos(){
    if(this.search === ""){
      this.repos = this.oldRepos
      return;
    } else {
    this.githubService.searchRepository(this.search).subscribe((res: any[]) => {
        this.repos = res['items'] 
    })
    } 
  }
  
}
