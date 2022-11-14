import { Component } from "@angular/core";

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class ToDoComponent {
  public tasks: Array<any>;

  constructor() {
    this.tasks = [];
  }

  addTask(task: string) {
    if (task === "") return;
    this.tasks.push({
      text: task,
      done: false
    });
  }

  removeTask(task:any) {
    this.tasks.splice(this.tasks.indexOf(task), 1);
  }

  toggle(task:any) {
    task.done = !task.done;
  }
}
