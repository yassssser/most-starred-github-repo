import { Component, OnInit } from '@angular/core';
import { GithubService } from 'src/app/services/github.service';

@Component({
  selector: 'app-github-repos',
  templateUrl: './github-repos.component.html',
  styleUrls: ['./github-repos.component.css']
})
export class GithubReposComponent implements OnInit {

  repos: any = []

  constructor(private githubService: GithubService) { }

  ngOnInit(): void {
    this.getAllRepos()
  }

  getAllRepos(){
    this.githubService.getRepos().subscribe((res: any[]) => {
      this.repos = res['items'] 
      console.log(this.repos);
      
    })
  }
}
