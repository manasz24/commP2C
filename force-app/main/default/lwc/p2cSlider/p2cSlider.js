import { LightningElement, api } from 'lwc';

export default class P2cSlider extends LightningElement {

    val =10 

    changeHandler(event){

        this.val =event.target.value

    }

   @api resetHandler(){

    this.val =50

    }



}