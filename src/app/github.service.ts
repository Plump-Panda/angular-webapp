import { Injectable } from '@angular/core';
import { HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class GithubService {

  //Where the JSON data for my repos are stored
  private url: string = "https://api.github.com/users/Plump-Panda/repos";

  constructor(private http: HttpClient) {
  }

  //sends a http GET request to the github API and gets the JSON back
  getGithubInfo() {
    return this.http.get(this.url);
  }
}
