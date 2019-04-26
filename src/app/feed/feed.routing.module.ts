import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { PostListComponent } from './components/post-list/post-list.component';
import { PostDetailsComponent } from './components/post-details/post-details.component';
import { ResolvePost } from '../core/resolvers/post.resolve';
import {NewPostComponent} from './components/new-post/new-post.component';
import {EditPostComponent} from './components/edit-post/edit-post.component';

const routes: Routes = [
    { path: '', component: PostListComponent },
    { path: 'post/:id', component: PostDetailsComponent, resolve: [ResolvePost] },
    { path: 'edit-post/:id', component: EditPostComponent, resolve: [ResolvePost] },
    { path: 'create-post', component: NewPostComponent }
];

@NgModule({
    imports: [CommonModule, RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class FeedRoutingModule {}
