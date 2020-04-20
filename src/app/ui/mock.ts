import { CONTENT_TYPE } from './models/content.model';


export const tabsData={
    "Fruits": {
        seq: 1,
        tabId: 1,
        tabName: "Fruits",
        contents: [
                    {
                        type: CONTENT_TYPE.FIELD_NAME_VALUE_TABLE,
                        title: "Apple (per serving)",
                        fields:[
                                {
                                    seq: 10,
                                    fieldId:"carbs",
                                    fieldName: "Carbohydrates (mg)",
                                    fieldValue: null,
                                    fieldType: "text",
                                    inputValue: null,
                                    notes: null,
                                    validation:{
                                        required: true,
                                        // range: [100,300],
                                        maxLength: 3,
                                    }
                                },
                                {
                                    seq: 30,
                                    fieldId:"protien",
                                    fieldName: "Protiens (mg)",
                                    fieldValue: null,
                                    fieldType: "text",
                                    notes: null,
                                    validation:{
                                        required: true,
                                        range: [10,30],
                                        maxLength: 2,
                                    }
                                },
                                {
                                    seq: 20,
                                    fieldId:"fat",
                                    fieldName: "Fat (mg)",
                                    fieldValue: null,
                                    fieldType: "text",
                                    notes: null,
                                    validation:{
                                        required: true,
                                        range: [1,10],
                                        maxLength: 2,
                                    }
                                },
                        ]
                    },
                    {
                        type: CONTENT_TYPE.FIELD_NAME_VALUE_TABLE,
                        title: "Orange (per serving)",
                        fields:[
                                {
                                    seq: 10,
                                    fieldId:"Sugar",
                                    fieldName: "Sugar (mg)",
                                    fieldValue: null,
                                    fieldType: "text",
                                    inputValue: null,
                                    notes: null,
                                    validation:{
                                        required: true,
                                        range: [1,300],
                                        maxLength: 3,
                                    }
                                },
                                {
                                    seq: 30,
                                    fieldId:"Vitamin C",
                                    fieldName: "Vitamin C (mg)",
                                    fieldValue: null,
                                    fieldType: "text",
                                    notes: null,
                                    validation:{
                                        required: true,
                                        range: [1,30],
                                        maxLength: 2,
                                    }
                                },
                        ]
                    }
        ]
    },
    "Veggies": {
        seq: 1,
        tabName: "Vegetable",
        contents: [
                    {
                        type: CONTENT_TYPE.FIELD_NAME_VALUE_TABLE,
                        title: "Tomato (per serving)",
                        fields:[
                                {
                                    seq: 30,
                                    fieldId:"carbs",
                                    fieldName: "Carbohydrates (mg)",
                                    fieldValue: null,
                                    fieldType: "text",
                                    notes: null,
                                    validation:{
                                        required: true,
                                        range: [100,300],
                                        maxLength: 3,
                                    }
                                },
                                {
                                    seq: 10,
                                    fieldId:"protien",
                                    fieldName: "Protiens (mg)",
                                    fieldValue: null,
                                    fieldType: "text",
                                    notes: null,
                                    validation:{
                                        required: true,
                                        range: [10,30],
                                        maxLength: 2,
                                    }
                                },
                                {
                                    seq: 20,
                                    fieldId:"fat",
                                    fieldName: "Fat (mg)",
                                    fieldValue: null,
                                    fieldType: "text",
                                    notes: null,
                                    validation:{
                                        required: true,
                                        range: [1,10],
                                        maxLength: 2,
                                    }
                                },
                        ]
                    }
        ]
    },
    "Grains": {
        seq: 1,
        tabName: "Grains",
        contents: [
                    {
                        type: CONTENT_TYPE.FIELD_NAME_VALUE_TABLE,
                        title: "Rice (per 100g serving)",
                        fields:[
                                {
                                    seq: 30,
                                    fieldId:"carbs",
                                    fieldName: "Carbohydrates (mg)",
                                    fieldValue: null,
                                    fieldType: "text",
                                    notes: null,
                                    validation:{
                                        required: true,
                                        range: [100,300],
                                        maxLength: 3,
                                    }
                                },
                                {
                                    seq: 10,
                                    fieldId:"protien",
                                    fieldName: "Protiens (mg)",
                                    fieldValue: null,
                                    fieldType: "text",
                                    notes: null,
                                    validation:{
                                        required: true,
                                        range: [10,30],
                                        maxLength: 2,
                                    }
                                },
                                {
                                    seq: 20,
                                    fieldId:"fat",
                                    fieldName: "Fats (mg)",
                                    fieldValue: null,
                                    fieldType: "text",
                                    notes: null,
                                    validation:{
                                        required: true,
                                        range: [0,10],
                                        maxLength: 2,
                                    }
                                },
                        ]
                    },
                    {
                        type: CONTENT_TYPE.FIELD_NAME_VALUE_TABLE,
                        title: "Wheat (per 100g serving)",
                        fields:[
                                {
                                    seq: 30,
                                    fieldId:"carbs",
                                    fieldName: "Carbohydrates (mg)",
                                    fieldValue: null,
                                    fieldType: "text",
                                    notes: null,
                                    validation:{
                                        required: true,
                                        range: [100,300],
                                        maxLength: 3,
                                    }
                                },
                                {
                                    seq: 10,
                                    fieldId:"protien",
                                    fieldName: "Protiens (mg)",
                                    fieldValue: null,
                                    fieldType: "text",
                                    notes: null,
                                    validation:{
                                        required: true,
                                        range: [10,30],
                                        maxLength: 2,
                                    }
                                },
                                {
                                    seq: 20,
                                    fieldId:"fat",
                                    fieldName: "Fats (mg)",
                                    fieldValue: null,
                                    fieldType: "text",
                                    notes: null,
                                    validation:{
                                        required: true,
                                        range: [0,10],
                                        maxLength: 2,
                                    }
                                },
                                {
                                    seq: 40,
                                    fieldId:"gluten",
                                    fieldName: "Gluten (mg)",
                                    fieldValue: null,
                                    fieldType: "text",
                                    notes: null,
                                    validation:{
                                        required: true,
                                        range: [1,20],
                                        maxLength: 2,
                                    }
                                },
                        ]
                    }
        ]
    }
}