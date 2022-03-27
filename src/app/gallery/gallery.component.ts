import { Component, OnInit } from "@angular/core";
import { GalleryService } from "./gallery.service";
import { MatCardModule} from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AppModalDialog } from '../modal/modal.component';
import {MatDialog} from '@angular/material/dialog';

@Component({
  selector: "app-gallery",
  templateUrl: "./gallery.component.html"
})
export class GalleryComponent implements OnInit {
  characters: any;
  character: any;
  url: string;
  urlC: string;
    
  constructor(public galleryService: GalleryService,public dialog: MatDialog) {}

  ngOnInit() {
    console.log('Entro a el metodo de carga');
    this.url = 'https://rickandmortyapi.com/api/character'; 
    this.galleryService.getCharacters(this.url).subscribe(data => {
      console.log(data);
      this.characters = data;
    });
  }
  
  pagNext(url){
    this.galleryService.getCharacters(url).subscribe(data => {
      console.log(data);
      this.characters = data;
    });
  }
  
  pagBack(url){
    this.galleryService.getCharacters(url).subscribe(data => {
      console.log(data);
      this.characters = data;
    });
  }
  
  openDialog(id) {
   this.urlC = 'https://rickandmortyapi.com/api/character/'+id; 
    this.galleryService.getCharacters(this.urlC).subscribe(data => {
      console.log(data);
      const dialogRef = this.dialog.open(AppModalDialog,{
      data:data,
        });
        dialogRef.afterClosed().subscribe(result => {
          console.log(`Dialog result: ${result}`);
        });
      
    });
    
  }
}