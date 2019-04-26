import {Component, EventEmitter, Input, OnDestroy, OnInit, Output} from '@angular/core';
import {FormBuilder} from '@angular/forms';
import {MatDialog} from '@angular/material';
import {Post} from '../../../../core/models/post.model';
import {Subject} from 'rxjs';
import {takeUntil} from 'rxjs/operators';
import {ImageDialogComponent} from '../image-dialog/image-dialog.component';
import {log} from 'util';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.css']
})
export class PostFormComponent implements OnInit, OnDestroy {

  constructor(private fb: FormBuilder,
              public dialog: MatDialog) { }

  @Output() postFormSubmit = new EventEmitter<Post>();
  @Input() post: Post;
  imgLink: string;
  base64: string;
  destroy$ = new Subject<boolean>();

  createPostForm = this.fb.group({
    title: [''],
    content: [''],
    description: [''],
    author: [''],
    image: ['']
  });

  ngOnInit() {
      if (this.post) {
        this.setValueToFrom();
      }
  }

  ngOnDestroy(): void {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(ImageDialogComponent, {
      width: '300px',
      data: {link: this.imgLink, base64: this.base64}
    });

    dialogRef.afterClosed()
      .pipe(takeUntil(this.destroy$))
      .subscribe(result => {
        if (result)  {
          this.createPostForm.controls.image.setValue(result.imageLink);
        }
      });
  }

  setValueToFrom() {
    const keys = Object.keys(this.createPostForm.controls);
    keys.forEach( key => {
      this.createPostForm.controls[key].setValue(this.post[key]);
    });
  }

  submit(): void {
    this.postFormSubmit.emit(this.createPostForm.value);
  }

}
