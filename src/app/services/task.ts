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
    { id: 1, title: 'Aprender Angular Signals', completed: false },
    { id: 2, title: 'Configurar Tailwind v4', completed: true },
    { id: 3, title: 'Beber água', completed: false }
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