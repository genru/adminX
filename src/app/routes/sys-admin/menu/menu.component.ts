import { Component, OnInit } from '@angular/core';
import { getMenus } from '../../../../../_mock/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styles: []
})
export class MenuComponent implements OnInit {

  loading = false;
  data: any[] = [];
  size = 10;

  constructor(private router: Router) { }

  ngOnInit() {
    this.getData()
  }

  getData() {
    this.loading = true;
    setTimeout(() => {
        this.data = getMenus(15);
        this.loading = false;
    }, 1000);
  }

  createMenu() {
    this.router.navigate(['/sys/menu/new/']);
  }

}
