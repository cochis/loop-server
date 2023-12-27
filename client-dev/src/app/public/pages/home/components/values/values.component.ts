import {
  Component,
  ViewEncapsulation,
  ViewChild,
  ElementRef,
  AfterViewInit,
} from '@angular/core';
import { fromEvent } from 'rxjs';
import { OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-values',
  templateUrl: './values.component.html',
  styleUrls: ['./values.component.scss'],
  encapsulation: ViewEncapsulation.Emulated,
})
export class ValuesComponent implements AfterViewInit, OnInit {
  values = [1, 2, 3, 4];
  @ViewChild('carousel', { static: false }) carousel!: ElementRef;
  currentBackground: number = 1;

  constructor(private route: Router) { }

  ngOnInit(): void {
    this.changeBackground()
  }

  ngAfterViewInit(): void {
    fromEvent(this.carousel.nativeElement, 'slide.bs.carousel').subscribe(
      (data: any) => {
        this.currentBackground = data.to + 1;
        this.changeBackground();
      }
    );
  }

  changeBackground() {
    const element: any = document.getElementById("values-container");
    element.classList.remove("background1");
    element.classList.remove("background2");
    element.classList.remove("background3");
    element.classList.remove("background4");
    element.classList.add("background" + this.currentBackground);
  }

  goContact() {
    this.route.navigate(['/home/contact']);
  }
}
