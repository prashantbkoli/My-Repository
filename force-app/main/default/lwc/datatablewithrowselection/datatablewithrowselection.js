import { LightningElement,track,wire,api } from 'lwc';
import getContactlist from '@salesforce/apex/DataTableWithRowSelectionClass.getContactlist';

const columns=[
    {label :"name" ,fieldname: "Name"},
    {label :"Phone" ,fieldname: "Phone"}

]

export default class Datatablewithrowselection extends LightningElement {
    @track showcontacts= 'show contacts';
    @track isvisible=false;
    columns=columns;
    @track data=[];
    @api recordId;

    connectedCallback(){
        getContactlist({lwcRecordId :this.recordId})
        .then(Response => {
            this.data=Response;
        })
        .catch(err => {
            console.log('Error occured'+err);
        } )
    }

    handleclick(event){
        const label=event.target.label;
         if(label==='show contacts'){
            this.showcontacts ='Hide contacts';
            this.isvisible=true;
         }
         else if(label=== 'Hide contacts'){
            this.showcontacts='show contacts';
            this.isvisible=false;
         }
    }
}