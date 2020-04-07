import { Component, OnInit } from '@angular/core';
import {GithubService} from "../github.service";

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  //Will store the JSON data from github
  json: any = [];

  //Need to pass in the service so that we can use it
  constructor(private service: GithubService) {
    this.getData();
  }

  //Gets the data from github and puts it in the JSON variable
  getData(){
    this.service.getGithubInfo().subscribe(data => {

      //Loops through the data and gets each item as needed
      for(const d of (data as any)){
        this.json.push({
          name: d.name,
          description: d.description,
          language: d.language
        });
      }
      //document.getElementById("holder").style.display = "none";
      //document.getElementsByTagName("table")[0].style.display = "table";
      //Just outputs to the console to make sure we got the right data
      console.log(this.json);
    });
  }

  ngOnInit(): void {
  }

}
