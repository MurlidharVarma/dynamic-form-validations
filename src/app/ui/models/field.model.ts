import { Validation } from './validation.model';

export interface Field{
    fieldType: 'text' | 'dropdown',
    fieldId: string,
    fieldName: string,
    fieldValue?: any,
    inputValue?: any,
    notes?:string,
    validation: Validation
}