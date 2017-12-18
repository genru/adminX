import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-menu-editor',
  templateUrl: './menu-editor.component.html',
  styles: []
})
export class MenuEditorComponent implements OnInit {

  form: FormGroup;

    constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.form = this.fb.group({
      email: [null, [Validators.email]],
      name: [null, [Validators.required]],
      phone: [null, [Validators.required]],
      account: [null, [Validators.required]],
      // role: [null, [Validators.required]],
      // roles: [null, [Validators.required]],
      // agree: [false, [Validators.requiredTrue]]
    }, );
  }

  getFormControl(name: string) {
    return this.form.controls[name];
  }

}
