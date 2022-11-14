import { LightningElement,track,wire} from 'lwc';

const columns=[
    {name : 'Employee name',fieldname :"Ename__c"},
    {name :'Employee id' , fieldname : "name"},
];

export default class WireDemoComponent extends LightningElement {
    @track columns = columns;
}