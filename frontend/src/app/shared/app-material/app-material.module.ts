import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';

@NgModule({
  declarations: [],
  imports: [CommonModule],
  exports: [
    MatTooltipModule,
    MatDialogModule,
    MatSnackBarModule,
    MatIconModule,
    MatInputModule,
    MatSelectModule
  ]
})
export class AppMaterialModule { }
