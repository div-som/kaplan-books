import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable()
export class MatSnackbarService {
  message = 'opened';
  action = 'ok';
  config:any;
  errorConfig:any;
  constructor(private _snackBar: MatSnackBar) {
    this.config = {
      duration: 3000,
      horizontalPosition: 'center',
      verticalPosition: 'top',
      panelClass: ['success']
    };

    this.errorConfig = {
      duration: 3000,
      horizontalPosition: 'center',
      verticalPosition: 'top',
      panelClass: ['error', 'white-space']
    };
  }

  /**Use this Method for Default SnackBar pass in custom additionalconfigs for customisation */
  openSnackBar(message:any, action?:any, config?:any) {
    if (config) this.config = config;
    this._snackBar.open(message, this.action, this.config);
  }

  /**Use this Method for Error SnackBar pass in custom additionalconfigs for customisation */
  openErrorSnackBar(message:any, action?:any, config?:any) {
    if (config) this.errorConfig = config;
    this._snackBar.open(message, '', this.errorConfig);
  }
}
