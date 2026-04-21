import { Injectable, signal } from '@angular/core';

export interface Task {
  id: number;
  title: string;
  completed: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  // REQUISITO: Signals para armazenar estado
  private tasksSignal = signal<Task[]>([
    { id: 1, title: 'Usar tailwind', completed: true },
    { id: 2, title: 'Deve-se usar signals para armazenar estados das variáveis', completed: false },
    { id: 3, title: 'Deve-se criar, pelo menos, um serviço, que represente e exporte a base de dados inicial da aplicação angular', completed: false },
    { id: 4, title: 'Deve-se usar injeção de dependência nos componentes que precisem consumir desse serviço', completed: false }
  ]);

  tasks = this.tasksSignal.asReadonly();

  addTask(title: string) {
    const newTask: Task = { id: Date.now(), title, completed: false };
    this.tasksSignal.update(tasks => [...tasks, newTask]);
  }

  toggleTask(id: number) {
    this.tasksSignal.update(tasks => 
      tasks.map(t => t.id === id ? { ...t, completed: !t.completed } : t)
    );
  }

  removeTask(id: number) {
    this.tasksSignal.update(tasks => tasks.filter(t => t.id !== id));
  }
}