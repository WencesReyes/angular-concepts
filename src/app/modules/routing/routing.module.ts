import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { routes } from './module-routes';

/**
 * Creates a routing module but it is needed to added in 
 * imports in the module that it is going to be used.
**/

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class RoutingModule { }
