import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/models/Todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css'],
})
export class TodosComponent implements OnInit {
  todos: Todo[];

  constructor() {}

  ngOnInit(): void {
    this.todos = [
      {
        content: 'First Todo',
        completed: false,
      },
      {
        content: 'Second Todo',
        completed: true,
      },
    ];
    console.log(this.todos);
  }

  toggleDone(id: number) {
    this.todos.map((todo, index) => {
      if (index === id) todo.completed = !todo.completed;

      return todo;
    });
  }

  deleteTodo(id: number) {
    this.todos = this.todos.filter((todo, index) => index !== id);
  }
}
