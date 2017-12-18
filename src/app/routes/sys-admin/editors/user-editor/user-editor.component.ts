import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-user-editor',
  templateUrl: './user-editor.component.html',
  styles: []
})
export class UserEditorComponent implements OnInit {
  form: FormGroup;

  constructor(private fb: FormBuilder) { }

  options = [{label: '普通管理员'}, {label: '测试人员'}, {label: '普通用户'}, {label: '超级管理员'}];

  tabs = [
    {
      name   : 'Tab 1',
      content: 'Content of Tab Pane 1'
    },
    {
      name   : 'Tab 2',
      content: 'Content of Tab Pane 2'
    },
    {
      name   : 'Tab 3',
      content: 'Content of Tab Pane 3'
    }
  ];
  ngOnInit() {
    this.form = this.fb.group({
      email: [null, [Validators.email]],
      name: [null, [Validators.required]],
      phone: [null, [Validators.required]],
      account: [null, [Validators.required]],
      // role: [null, [Validators.required]],
      roles: [null, [Validators.required]],
      // agree: [false, [Validators.requiredTrue]]
    }, );

  }

  getFormControl(name: string) {
    return this.form.controls[name];
  }

  _submitForm() {
    console.info(this.form.value)
  }
}
