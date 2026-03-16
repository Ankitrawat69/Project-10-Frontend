import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClient, HttpClientModule } from '@angular/common/http';
import { HttpServiceService } from './http-service.service';
import { EndpointServiceService } from './endpoint-service.service';
import { ServiceLocatorService } from './service-locator.service';

import { FormsModule } from '@angular/forms';


import { NavbarComponent } from './navbar/navbar.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UserComponent } from './user/user.component';

import { RoleComponent } from './role/role.component';
import { StudentComponent } from './student/student.component';
import { FacultyComponent } from './faculty/faculty.component';
import { CourseComponent } from './course/course.component';
import { SubjectComponent } from './subject/subject.component';
import { MarksheetComponent } from './marksheet/marksheet.component';
import { CollegeComponent } from './college/college.component';
import { TimetableComponent } from './timetable/timetable.component';
import { RoleListComponent } from './role/role-list.component';
import { FooterComponent } from './footer/footer.component';
import { UserListComponent } from './user/user-list.component';
import { CollegeListComponent } from './college/college-list.component';
import { StudentListComponent } from './student/student-list.component';
import { MarksheetListComponent } from './marksheet/marksheet-list.component';
import { CourseListComponent } from './course/course-list.component';
import { SubjectListComponent } from './subject/subject-list.component';
import { TimetableListComponent } from './timetable/timetable-list.component';
import { FacultyListComponent } from './faculty/faculty-list.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    DashboardComponent,
    UserComponent,
    RoleComponent,
    StudentComponent,
    FacultyComponent,
    CourseComponent,
    SubjectComponent,
    MarksheetComponent,
    CollegeComponent,
    TimetableComponent,
    RoleListComponent,
    FooterComponent,
    UserListComponent,
    CollegeListComponent,
    StudentListComponent,
    MarksheetListComponent,
    CourseListComponent,
    SubjectListComponent,
    TimetableListComponent,
    FacultyListComponent,
  ],
  
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    HttpServiceService,
    EndpointServiceService,
    ServiceLocatorService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }