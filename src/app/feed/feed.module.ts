import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostCardComponent } from './components/post-card/post-card.component';
import { PostListComponent } from './components/post-list/post-list.component';
import { FeedRoutingModule } from './feed.routing.module';
import { MaterialModule } from '../material/material.module';
import { PostDetailsComponent } from './components/post-details/post-details.component';
import { ResolvePost } from '../core/resolvers/post.resolve';
import {ScrollingModule} from '@angular/cdk/scrolling';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NewPostComponent} from './components/new-post/new-post.component';
import {PostFormComponent} from './shared/components/post-form/post-form.component';
import {ImageDialogComponent} from './shared/components/image-dialog/image-dialog.component';
import {SharedModule} from '../shared/shared.module';
import { EditPostComponent } from './components/edit-post/edit-post.component';

@NgModule({
  declarations: [
    PostCardComponent,
    PostListComponent,
    PostDetailsComponent,
    NewPostComponent,
    PostFormComponent,
    ImageDialogComponent,
    EditPostComponent,
  ],
  imports: [
    CommonModule,
    FeedRoutingModule,
    MaterialModule,
    ScrollingModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule
  ],
  entryComponents: [
    ImageDialogComponent
  ],
  providers: [ResolvePost]
})
export class FeedModule { }
