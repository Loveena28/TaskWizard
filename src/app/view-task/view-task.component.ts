import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-view-task',
  templateUrl: './view-task.component.html',
  styleUrls: ['./view-task.component.css'],
})
export class ViewTaskComponent {
  @Input() tasks: { id: number; name: string; completed: boolean }[] = [];
  @Output() complete = new EventEmitter<number>();
  @Output() delete = new EventEmitter();

  completeTask(id:number) {
    const index = this.tasks.findIndex((t) => t.id === id);
    console.log("child",index)
    this.tasks[index].completed = !this.tasks[index].completed;
    this.complete.emit(id);
  }

  deleteTask(taskid: number) {
    console.log("child",taskid);
    this.delete.emit(taskid);
  }
}
