
import { LightningElement, api } from 'lwc';

export default class P2cProgressBar extends LightningElement {

@api percent



get widthPercentage(){
    return `${this.percent}%`
}

get Progress(){

    return `${this.percent}`
}

get widthProgress(){
    return `width:${this.percent}%` 
}


}