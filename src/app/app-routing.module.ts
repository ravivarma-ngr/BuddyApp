import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { MyProfileComponent } from './components/my-profile/my-profile.component';


const routes: Routes = [
  { path: '', component: DashboardComponent  },
  { path: 'dashboard', component: DashboardComponent  },
  { path: 'my-profile', component: MyProfileComponent  }
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)  ],
  exports: [RouterModule]

})
export class AppRoutingModule { }
