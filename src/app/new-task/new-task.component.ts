import { ChangeDetectionStrategy, Component, Output,EventEmitter } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Task } from '../task.model';
@Component({
  selector: 'app-new-task',
  templateUrl: './new-task.component.html',
  styleUrls: ['./new-task.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NewTaskComponent {
  @Output() addTodo = new EventEmitter<Task>();
  new_task = new FormControl(null, [
    Validators.required,
    Validators.minLength(4),
  ]);
  showError = false;
  addTask(){
    if (this.new_task.invalid) {
      this.showError = true;
      return;
    }
    this.addTodo.emit({
      id: this.getRandomInt(),
      name: this.new_task.value ?? '',
      completed: false,
    });
    this.new_task.reset();
  }
  getRandomInt() {
    return Math.floor(Math.random() * 9999);
  }
}
