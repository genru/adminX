import { Component, OnInit } from '@angular/core';
import { NzMessageService } from 'ng-zorro-antd';
import { getFakeList } from '../../../../../../_mock/api.service';

@Component({
  selector: 'app-sys-user',
  templateUrl: './sys-user.component.html',
  styles: []
})
export class SysUserComponent implements OnInit {

  q: any = {
    status: 'all'
  };
  loading = false;
  data: any[] = [];

  constructor(public msg: NzMessageService) {}

  ngOnInit() {
  }

  getData() {
    this.loading = true;
    setTimeout(() => {
        this.data = getFakeList(5);
        this.loading = false;
    }, 1000);
  }
}
