import { Routes } from '@angular/router';
import { BindingComponent } from './pages/binding/binding.component';
import { StructuralDirectivesComponent } from './pages/structural-directives/structural-directives.component';
import { LifeCicleComponent } from './pages/life-cicle/life-cicle.component';
import { EventsComponent } from './pages/events/events.component';
import { InputOutputComponent } from './pages/input-output/input-output.component';
import { PipesComponent } from './pages/pipes/pipes.component';
import { TemplateFormComponent } from './pages/template-form/template-form.component';

export const routes: Routes = [
  {
    path: 'binding-concept',
    component: BindingComponent,
    title: 'Binding concept',
  },
  {
    path: 'directives',
    component: StructuralDirectivesComponent,
    title: 'Directives',
  },
  {
    path: 'life-cicle',
    component: LifeCicleComponent,
    title: 'Life cicle',
  },
  {
    path: 'events',
    component: EventsComponent,
    title: 'Events',
  },
  {
    path: 'input-output',
    component: InputOutputComponent,
    title: 'Input / Output',
  },
  {
    path: 'pipes',
    component: PipesComponent,
    title: 'Pipes',
  },
  {
    path: 'template-form',
    component: TemplateFormComponent,
    title: 'Template driven form',
  },
];
