import { Component, OnInit } from '@angular/core';
import { getActions } from '../../../../../_mock/api.service';

@Component({
  selector: 'app-action',
  templateUrl: './action.component.html',
  styles: []
})
export class ActionComponent implements OnInit {

  loading = false;
  data: any[] = [];
  size = 10;

  constructor() { }

  ngOnInit() {
    this.getData()
  }

  getData() {
    this.loading = true;
    setTimeout(() => {
        this.data = getActions(15);
        this.loading = false;
    }, 1000);
  }

}
