import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgJsonEditorModule } from 'ang-jsoneditor';
import { MaterialModule } from '../material/material.module';
import { FieldNameValueTableComponent } from './components/field-name-value-table/field-name-value-table.component';
import { NgTabFormsComponent } from './components/ng-tab-forms/ng-tab-forms.component';
import { TabFormsComponent } from './components/tab-forms/tab-forms.component';



@NgModule({
  declarations: [NgTabFormsComponent, TabFormsComponent, FieldNameValueTableComponent],
  imports: [
    CommonModule,
    MaterialModule,
    NgJsonEditorModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class UiModule { }
