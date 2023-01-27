import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CanActivateChild } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class CanActivateChildGuard implements CanActivateChild {

  constructor(private dialog: MatDialog) { }

  canActivateChild(): boolean {
    if (this.dialog.openDialogs.length > 0) {
      this.dialog.closeAll();
      return false;
    } else {
      return true;
    }
  }
}
