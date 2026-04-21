import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TaskService } from '../../services/task';

@Component({
  selector: 'app-task-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div class="max-w-md mx-auto mt-4 p-4 bg-white shadow-md border border-gray-200">
      <h3 class="text-x1 text-slate-800 font-bold text-gray-400 uppercase tracking-widest mb-3">Nova Tarefa</h3>
      <div class="flex flex-row gap-2">
        <input 
          type="text" 
          [(ngModel)]="newTaskTitle"
          (keyup.enter)="add()"
          placeholder="O que precisa ser feito?" 
          class="flex-1 p-2 border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500 shadow-sm"
        />
        <button 
          (click)="add()"
          class="bg-blue-600 text-white px-4 py-2 font-semibold hover:bg-blue-700 transition-colors shadow-sm"
        >
          Adicionar
        </button>
      </div>
    </div>
  `
})
export class TaskFormComponent {
  taskService = inject(TaskService);
  newTaskTitle = '';

  add() {
    const title = this.newTaskTitle.trim();
    if (title) {
      this.taskService.addTask(title);
      this.newTaskTitle = '';
    }
  }
}