import { LightningElement } from 'lwc';

export default class MyFirstlwc extends LightningElement {
    myvalue="i have to work hard";

connectedCallback(){

    let result=this.myfunction(20,10);
    window.alert(result);
}

myfunction(dividend,divisor){
    return(dividend/divisor);
}

} 