import { Galleries } from '../gallery-data';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {
  galleries = Galleries;
  constructor() { }

  ngOnInit() {
  }

}
