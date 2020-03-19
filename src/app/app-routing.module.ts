import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//Import components
import { HomeComponent} from "./home/home.component";
import { ProjectsComponent} from "./projects/projects.component";
import { ResumeComponent} from "./resume/resume.component";

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'projects', component: ProjectsComponent},
  { path: 'resume', component: ResumeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
