import { Component } from '@angular/core';

@Component({
  selector: 'app-task-header',
  standalone: true,
  template: `
    <header class="bg-slate-800 text-[30px] text-white p-6 text-center shadow-lg">
      <h1 class="text-3xl font-bold tracking-tight">Agenda Virtual</h1>
    `
})
export class TaskHeaderComponent {}