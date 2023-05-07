import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-empty-state',
  templateUrl: './empty-state.component.html',
  styleUrls: ['./empty-state.component.scss']
})
export class EmptyStateComponent implements OnInit {

  searchImage: string = '../../../../assets/icons/Search.png'

  constructor() { }

  ngOnInit(): void {
  }

}
