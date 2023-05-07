import { Injectable } from '@angular/core';
import { MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition, MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class ToasterService {

  horizontalPosition: MatSnackBarHorizontalPosition = 'right';
  verticalPosition: MatSnackBarVerticalPosition = 'bottom';

  constructor(
    private snackBar: MatSnackBar
  ) { }

  toaster(message: string, status: 'error' | 'warning' | 'success') {
    this.snackBar.open(message, 'بستن', {
      duration: 3000000,
      panelClass: [status],
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,

    });
  }
}
