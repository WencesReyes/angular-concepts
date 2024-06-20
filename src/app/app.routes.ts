import { Routes } from '@angular/router';
import { BindingComponent } from './pages/binding/binding.component';
import { StructuralDirectivesComponent } from './pages/structural-directives/structural-directives.component';
import { LifeCicleComponent } from './pages/life-cicle/life-cicle.component';
import { EventsComponent } from './pages/events/events.component';
import { InputOutputComponent } from './pages/input-output/input-output.component';
import { PipesComponent } from './pages/pipes/pipes.component';
import { TemplateFormComponent } from './pages/template-form/template-form.component';
import { ReactiveFormComponent } from './pages/reactive-form/reactive-form.component';
import { MoreRoutingComponent } from './pages/more-routing/more-routing.component';
import { HeroDatailComponent } from './pages/more-routing/pages/hero-datail/hero-datail.component';
import { Child1Component } from './pages/more-routing/pages/child-1/child-1.component';
import { Child2Component } from './pages/more-routing/pages/child-2/child-2.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { authGuard } from './guards/auth.guard';
import { ResolversComponent } from './pages/resolvers/resolvers.component';
import { postResolverResolver } from './resolvers/post-resolver.resolver';

export const routes: Routes = [
  {
    path: '',
    redirectTo: '/binding-concept',
    pathMatch: 'full',
  },
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
    canActivate: [authGuard],
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
    loadComponent: () =>
      import('./pages/pipes/pipes.component').then((m) => m.PipesComponent),
    title: 'Pipes',
  },
  {
    path: 'template-form',
    component: TemplateFormComponent,
    title: 'Template driven form',
  },
  {
    path: 'reactive-form',
    component: ReactiveFormComponent,
    title: 'Reactive form',
  },
  {
    path: 'more-routing',
    component: MoreRoutingComponent,
    title: 'More about routing',
    children: [
      {
        path: '',
        component: Child1Component,
        title: 'child-1',
      },
      {
        path: 'child-2',
        component: Child2Component,
        title: 'child-2',
      },
    ],
  },
  {
    path: 'hero-detail/:id',
    component: HeroDatailComponent,
    title: 'Hero detail',
  },
  {
    path: 'resolvers',
    component: ResolversComponent,
    title: 'Resolvers',
    resolve: {
      posts: postResolverResolver,
    },
  },
  {
    path: '**',
    component: NotFoundComponent,
    title: 'Not found',
  },
];
