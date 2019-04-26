import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './core/guards/auth.guard';

const routes: Routes = [
  {
    path: 'feed',  loadChildren: './feed/feed.module#FeedModule',
  },
  {
    path: 'auth', loadChildren: './auth/auth.module#AuthModule'
  },
  {
    path: '' , redirectTo: 'feed' , pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthGuard]
})
export class AppRoutingModule { }
