import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RoleComponent } from './role/role.component';
import { UserComponent } from './user/user.component';
import { CollegeComponent } from './college/college.component';
import { StudentComponent } from './student/student.component';
import { MarksheetComponent } from './marksheet/marksheet.component';
import { CourseComponent } from './course/course.component';
import { SubjectComponent } from './subject/subject.component';
import { TimetableComponent } from './timetable/timetable.component';
import { FacultyComponent } from './faculty/faculty.component';
import { RoleListComponent } from './role/role-list.component';
import { UserListComponent } from './user/user-list.component';
import { CollegeListComponent } from './college/college-list.component';
import { StudentListComponent } from './student/student-list.component';
import { MarksheetListComponent } from './marksheet/marksheet-list.component';
import { CourseListComponent } from './course/course-list.component';
import { SubjectListComponent } from './subject/subject-list.component';
import { TimetableListComponent } from './timetable/timetable-list.component';
import { FacultyListComponent } from './faculty/faculty-list.component';

const routes: Routes = [

   {
    path: 'role',
    component: RoleComponent
  },
  {
    path: 'user',
    component: UserComponent
  },
  {
    path: 'college',
    component: CollegeComponent
  },
  {
    path: 'student',
    component: StudentComponent
  },
  {
    path: 'marksheet',
    component: MarksheetComponent
  },
  {
    path: 'course',
    component: CourseComponent
  },
  {
    path: 'subject',
    component: SubjectComponent
  },
  {
    path: 'timetable',
    component: TimetableComponent
  },
  {
    path: 'faculty',
    component: FacultyComponent
  },
  {
    path: 'role-list',
    component: RoleListComponent
  },
  {
    path: 'user-list',
    component: UserListComponent
  },
  {
    path: 'college-list',
    component: CollegeListComponent
  },
  {
    path: 'student-list',
    component: StudentListComponent
  },
  {
    path: 'marksheet-list',
    component: MarksheetListComponent
  },
  {
    path: 'course-list',
    component: CourseListComponent
  },
  {
    path: 'subject-list',
    component: SubjectListComponent
  },
  {
    path: 'timetable-list',
    component: TimetableListComponent
  },
  {
    path: 'faculty-list',
    component: FacultyListComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }