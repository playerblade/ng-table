import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'lib-ng-table',
  templateUrl: './ng-table.component.html',
  styleUrls: []
})
export class NgTableComponent implements OnInit {
  @Input() collection: any;

  collectionEntries: any;

  constructor() { }

  ngOnInit(): void {
    this.collectionEntries= this.collection;
  }

}
