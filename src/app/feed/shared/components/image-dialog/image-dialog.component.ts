import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ImageDialogData } from 'src/app/core/models/image-dialog.model';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-image-dialog',
  templateUrl: './image-dialog.component.html',
  styleUrls: ['./image-dialog.component.css']
})
export class ImageDialogComponent implements OnInit {

  constructor( public dialogRef: MatDialogRef<ImageDialogComponent>,
               @Inject (MAT_DIALOG_DATA) public data: ImageDialogData, private fb: FormBuilder ) {}


  imgDialogForm = this.fb.group({
    imageLink: [''],
  });

  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit(): void {

  }

  onFileInput(e) {
    for (let i = 0; i < e.target.files.length; i++) {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(e.target.files[i]);
      fileReader.onload = () => {
        this.imgDialogForm.controls.imageLink.setValue(fileReader.result);
      };
    }
  }

  save() {
      this.dialogRef.close( this.imgDialogForm.value);
  }

  close() {
      this.dialogRef.close();
  }
}
