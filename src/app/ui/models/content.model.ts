import { Field } from './field.model';

export enum CONTENT_TYPE{
    "FIELD_NAME_VALUE_TABLE" = "FIELD_NAME_VALUE_TABLE"
}

export interface Content{
    type: CONTENT_TYPE,
    title: string,
    fields: Array<Field>
}
