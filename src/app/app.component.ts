import { Component } from '@angular/core';
import { Task } from './task.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'to-do-list';
  list:Task[] = []
  constructor() {
    const list = localStorage.getItem('task-list');
    if (list != null) {
      console.log(JSON.parse(list));
      this.list = JSON.parse(list);
    }
  }
  addTask(task:Task) {
    this.list.push(task);
    localStorage.setItem('task-list', JSON.stringify(this.list));
    console.log(this.list);
  }
  completeTask(taskid: number) {
    const index = this.list.findIndex((t) => t.id === taskid);
    console.log('parent', index);
    this.list[index].completed = true;
    localStorage.setItem('task-list', JSON.stringify(this.list));
  }

  deleteTask(taskid: number) {
    const index = this.list.findIndex((t) => t.id === taskid);
    console.log('parent', index);
    console.log(taskid);
    this.list.splice(index, 1);
    localStorage.setItem('task-list', JSON.stringify(this.list));
  }
}
