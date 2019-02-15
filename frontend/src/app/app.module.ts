import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminComponent } from './admin/admin.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { ChapterComponent } from './admin/dashboard/chapter/chapter.component';
import { AddchapterComponent } from './admin/dashboard/chapter/addchapter/addchapter.component';
import { AddrolesComponent } from './admin/dashboard/addroles/addroles.component';
import { TopicComponent } from './admin/dashboard/topic/topic.component';
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


@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    DashboardComponent,
    ChapterComponent,
    AddchapterComponent,
    AddrolesComponent,
    TopicComponent,
    Chapter1Component,
    AddtopicComponent,
    AddquizComponent,
    AddtecherComponent,
    UserdashComponent,
    UserchapterComponent,
    Chapter2Component,
    Addtopic2Component,
    Addquiz2Component,
    TeacherComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
