import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { JsonEditorOptions } from 'ang-jsoneditor';
import * as _ from 'underscore';
import { tabsData } from '../../mock';
import { Content } from '../../models/content.model';
import { Field } from '../../models/field.model';
import { Tab } from '../../models/tab.model';

@Component({
  selector: 'ng-tab-forms',
  templateUrl: './ng-tab-forms.component.html',
  styleUrls: ['./ng-tab-forms.component.scss']
})
export class NgTabFormsComponent implements OnInit {

  form: FormGroup;
  data: any;
  jsonEditorData: any;

  editorOptions:any;

  constructor(private fb: FormBuilder) {
    this.refreshData(tabsData);

    this.editorOptions = new JsonEditorOptions()
    this.editorOptions.modes = ['code', 'text', 'tree', 'view']; 
    this.jsonEditorData = JSON.parse(JSON.stringify(this.data));
  }

  ngOnInit(): void {}

  getData(event){
    this.refreshData(event);
  }

  refreshData(tabsData){
    this.data = tabsData;
    this.generateForm(this.data);
  }

  generateForm(data){
    let tabsformArr = _.chain(data)
                        .values()
                        .sortBy('seq')
                        .map((tab: Tab) => {
                          let tabFg = null;
                          let contentFormArr = null;

                          // Creating contents Form
                          if(tab && tab != null && tab.contents && tab.contents != null){
                                  contentFormArr = _.chain(tab.contents)
                                                    .map((content: Content)=> {
                                                        let fieldsFormArr = null;

                                                        if(content && content!=null && content.fields && content.fields!=null){
                                                              fieldsFormArr = _.chain(content.fields)
                                                                              .sortBy('seq')
                                                                              .map((field: Field) => {
                                                                                let validators = this.getValidators(field.validation);

                                                                                let returnVal = this.fb.group({
                                                                                  fieldId: [field.fieldId],
                                                                                  fieldName: [field.fieldName],
                                                                                  fieldValue: [field.fieldType],
                                                                                  fieldType: [field.fieldType],
                                                                                  inputValue: [field.inputValue, Validators.compose(validators)],
                                                                                  notes: [field.notes],
                                                                                  validation: [field.validation]
                                                                                });
                                                                                
                                                                                return returnVal;
                                                                              })
                                                                              .value();
                                                        }

                                                        let contentFg = this.fb.group({
                                                          type: [content.type],
                                                          title: [content.title],
                                                          fields: this.fb.array(fieldsFormArr)
                                                      })
                                                      return contentFg;
                                                    })
                                                    .value();
                              
                            }

                            tabFg = this.fb.group({
                              seq: [tab.seq, Validators.required],
                              tabId: [tab.tabId, Validators.required],
                              tabName: [tab.tabName, Validators.required],
                              contents: this.fb.array(contentFormArr)
                            })
                            return tabFg;
                        })
                        .value();
                        
    this.form = this.fb.group({
      'tabs': this.fb.array(tabsformArr)
    })

  }

  getValidators(validation){
    let validationArr = [];
  
    if(validation && validation!=null){

        _.mapObject(validation, (val, key) => {
          if(key == "required" && val == true){
            validationArr.push(Validators.required);
          }else if(key == 'range' && val!=null && val.length==2){
            validationArr.push(Validators.min(val[0]));
            validationArr.push(Validators.max(val[1]));
          }else if(key == 'maxLength' && val != 0){
            validationArr.push(Validators.maxLength(val));
          }
        });
        
    }

    return validationArr;
    
  }

}

