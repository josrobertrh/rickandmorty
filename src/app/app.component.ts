import { Component, OnInit, ViewChild ,AfterViewInit  } from '@angular/core';
import { GalleryComponent } from './gallery/gallery.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent{
  title = 'RickAndMorty';
  @ViewChild('gallery') gallery: GalleryComponent;
}
