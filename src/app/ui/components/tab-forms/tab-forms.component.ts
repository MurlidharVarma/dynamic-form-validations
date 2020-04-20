import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { CONTENT_TYPE } from '../../models/content.model';

@Component({
  selector: 'tab-forms',
  templateUrl: './tab-forms.component.html',
  styleUrls: ['./tab-forms.component.scss']
})
export class TabFormsComponent implements OnInit {

  @Input("tab")
  tabForm: FormGroup;
  
  CONTENT_TYPE;

  constructor() {
    this.CONTENT_TYPE = CONTENT_TYPE
  }

  ngOnInit(): void {
  }

}
