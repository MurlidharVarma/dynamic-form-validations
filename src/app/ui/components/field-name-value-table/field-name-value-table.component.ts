import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'field-name-value-table',
  templateUrl: './field-name-value-table.component.html',
  styleUrls: ['./field-name-value-table.component.scss']
})
export class FieldNameValueTableComponent implements OnInit {

  @Input("content")
  contentForm: FormGroup;
  
  constructor() { }

  ngOnInit(): void {
  }

}
