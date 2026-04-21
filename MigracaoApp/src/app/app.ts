import { Component } from '@angular/core';
import { TaskListComponent } from './components/task-list/task-list';
import { TaskHeaderComponent } from './components/task-header/task-header';
import { TaskFormComponent } from './components/task-form/task-form';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [TaskListComponent, TaskHeaderComponent, TaskFormComponent], 
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {}