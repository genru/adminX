import { Component, OnInit } from '@angular/core';
import { NzMessageService } from 'ng-zorro-antd';
import { getUsers } from '../../../../../_mock/api.service';
import { Router } from '@angular/router';
import { LoggerService } from 'ng-zorro-antd/src/util/logger/logger.service';
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
    size = 10;

    constructor(public msg: NzMessageService, private router: Router) {}

    ngOnInit() {
        this.getData();
    }

    getData() {
        this.loading = true;
        setTimeout(() => {
            this.data = getUsers(15);
            this.loading = false;
        }, 1000);
    }

    removeUser(item: any) {
        // console.info(item);
        this.getData();
        this.msg.success('删除成功');
    }

    refresh() {

    }

    searchChanged(event) {
        // this.logger.debug('searchChanged');
    }

    createUser() {
        this.router.navigate(['/sys/new/', 'user']);
    }
}
