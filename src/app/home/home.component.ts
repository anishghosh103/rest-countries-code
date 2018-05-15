import { Component, OnInit } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations: [
    trigger('listAnim', [
      state('shown', style({
        display: 'block',
        opacity: 1,
        transform: 'translateY(-50%)'
      })),
      state('hidden', style({
        display: 'none',
        opacity: 0,
        transform: 'translateY(0)'
      })),
      transition('hidden => shown', [
        style({
          display: 'block',
          opacity: 0,
          transform: 'translateY(-25%)'
        }),
        animate(200, style({
          display: 'block',
          opacity: 1,
          transform: 'translateY(-50%)'
        }))
      ]),
      transition('shown => hidden', [
        animate(200, style({
          display: 'block',
          opacity: 0,
          transform: 'translateY(-15%)'
        }))
      ])
    ]),
    trigger('imageAnim', [
      state('hidden', style({ opacity: 0 })),
      state('shown', style({ opacity: 1 })),
      transition('hidden <=> shown', animate(200)),
      transition('void => shown', [
        style({ opacity: 0 }),
        animate(200)
      ]),
      transition('shown => void', [
        animate(200, style({ opacity: 0 }))
      ])
    ])
  ]
})
export class HomeComponent implements OnInit {

  private selectedRegion: string;
  private regions: string[];

  private listState: string;

  constructor() {
    this.selectedRegion = 'asia';
    this.regions = [ 'asia', 'africa', 'americas', 'europe', 'oceania' ];
    this.listState = 'hidden';
  }

  ngOnInit() {
  }

  toggleListState() {
    this.listState = this.listState === 'hidden' ? 'shown' : 'hidden';
  }

  selectRegion(region: string) {
    this.selectedRegion = region;
    this.toggleListState();
  }

}
