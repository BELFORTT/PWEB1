import { Component, inject } from '@angular/core';
import { TaskService } from '../../services/task'; 

@Component({
  selector: 'app-task-list',
  standalone: true,
  imports: [], 
  template: `
    <div class="max-w-md mx-auto bg-white shadow-md rounded-none border border-gray-200">
      <div class="bg-gray-50 p-4 border-b border-gray-200">
        <h2 class="text-slate-800 text-x1 font-bold text-gray-500 uppercase tracking-widest">Minhas Tarefas</h2>
      </div>
      
      <ul class="divide-y divide-gray-100 p-4">
        @for (task of taskService.tasks(); track task.id) {
          <li class="flex items-center justify-between py-4 px-2">
            <div class="flex items-center gap-4">
              <input type="checkbox" 
                [checked]="task.completed" 
                (change)="taskService.toggleTask(task.id)"
                class="w-5 h-5 cursor-pointer accent-blue-600">
              <span [class.line-through]="task.completed" 
                    [class.text-gray-400]="task.completed"
                    class="text-gray-700 font-medium">
                {{ task.title }}
              </span>
            </div>
            <button (click)="taskService.removeTask(task.id)" 
                    class="text-red-500 hover:text-red-700 text-sm font-semibold transition-colors">
              Remover
            </button>
          </li>
        } @empty {
          <li class="p-8 text-center text-gray-400 italic">Nenhuma tarefa para exibir.</li>
        }
      </ul>
    </div>
  `
})
export class TaskListComponent {
  // REQUISITO: Injeção de dependência
  taskService = inject(TaskService);
}