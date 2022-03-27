import {Component, Inject} from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { MatCardModule} from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { FlexLayoutModule } from '@angular/flex-layout';

export interface DialogData {
  "name": "Morty Smith",
  "status": "Alive",
  "species": "Human",
  "gender": "Male",
  "origin": {
    "name": "Earth",
    "url": "https://rickandmortyapi.com/api/location/1"
  },
  "image": "https://rickandmortyapi.com/api/character/avatar/2.jpeg"
}

/**
 * @title Dialog with header, scrollable content and actions
 */
@Component({
  selector: 'app-modal-dialog',
  templateUrl: './modal.component.html',
})

export class AppModalDialog {
constructor(@Inject(MAT_DIALOG_DATA) public data: DialogData) {}
}