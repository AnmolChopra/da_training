import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { AuthGuard } from './admin/dashboard/guards/auth.guard';
import { ChapterComponent } from './admin/dashboard/chapter/chapter.component';
import { TopicComponent } from './admin/dashboard/topic/topic.component';
import { AddrolesComponent } from './admin/dashboard/addroles/addroles.component';
import { Chapter1Component } from './admin/dashboard/chapter/chapter1/chapter1.component';
import { AddtopicComponent } from './admin/dashboard/chapter/chapter1/addtopic/addtopic.component';
import { AddquizComponent } from './admin/dashboard/chapter/chapter1/addtopic/addquiz/addquiz.component';
import { AddtecherComponent } from './admin/dashboard/addroles/addtecher/addtecher.component';
import { UserdashComponent } from './userdash/userdash.component';
import { UserchapterComponent } from './userdash/userchapter/userchapter.component';
import { Chapter2Component } from './admin/dashboard/chapter/chapter2/chapter2.component';
import { Addtopic2Component } from './admin/dashboard/chapter/chapter2/addtopic2/addtopic2.component';
import { Addquiz2Component } from './admin/dashboard/chapter/chapter2/addtopic2/addquiz2/addquiz2.component';
import { TeacherComponent } from './teacher/teacher.component';
import { UserGuard } from './userdash/userguard/user.guard';



const routes: Routes = [
  {path:'admin',component:AdminComponent},
  
  {path:'dashboard',component:DashboardComponent,canActivate:[AuthGuard],
children:[
  {path:'addroles',component:AddrolesComponent,children:[
    {path:'addteacher',component:AddtecherComponent}
  ]},
  {path:'chapter',component:ChapterComponent,children:[
    {path:'chapter1',component:Chapter1Component,children:[
      {path:'addtopic',component:AddtopicComponent,children:[
        {path:'addquiz',component:AddquizComponent}
      ]},
    ]},
    {path:'chapter2',component:Chapter2Component,children:[
      {path:'addtopic2',component:Addtopic2Component,children:[
        {path:'addquiz2',component:Addquiz2Component}
      ]}
    ]}
  ]},

  {path:'topic',component:TopicComponent}
]},
{path:'teacher',component:TeacherComponent},
{path:'',redirectTo:'/userdash',pathMatch:'full'},
{path:'userdash',component:UserdashComponent,children:[
  {path:'userchapter',component:UserchapterComponent,canActivate:[UserGuard]}
]}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
