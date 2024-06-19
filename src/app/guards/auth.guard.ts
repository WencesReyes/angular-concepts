import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);

  console.log({ route, state, router });

  return IsLoggedIn();
};

function IsLoggedIn() {
  return true;
}
