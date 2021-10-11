import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  quotes:Quote[] = [
    new Quote(1, 'nur tusa', 'The greatest glory in living lies not in never falling, but in rising every time we fall.',new Date(2017,3,14),0,0,'nelson mandela'),

    new Quote(1, 'ronadl stive', ' If you set your goals ridiculously high and its a failure, you will fail above everyone elses success',new Date(2010,3,14),0,0,'james cameroon'),

    new Quote(1, 'ali hassan', 'Spread love everywhere you go. Let no one ever come to you without leaving happier.',new Date(2020,3,14),0,0,'mother teresa'),

    new Quote(1, 'kevin zamil', 'Your time is limited, so don’t waste it living someone else’s life. Don’t be trapped by dogma – which is living with the results of other people’s thinking.',new Date(2020,3,14),0,0,'steve job'),

    new Quote(1, 'ian wanjira', 'The two most important days in your life are the day you are born and the day you find out why.',new Date(2020,3,14),0,0,'mark twin'),
  ];
  addNewQuote(quote: Quote){
    let quoteLength = this.quotes.length;
    quote.id = quoteLength+1;
    quote.completeDate = new Date(quote.completeDate);
    this.quotes.push(quote);
  }
  toggleDetails(index: number){
    this.quotes[index].showDescription = !this.quotes[index].showDescription;
  }
  deleteQuote(isComplete: any, index: number){
    if (isComplete) {
      let toDelete = confirm(`Are you sure you want to delete ${this.quotes[index].name}?`)

      if (toDelete){
        this.quotes.splice(index,1)
      }
    }
  }
  completeQuote(isComplete: any, index: number){
    if (isComplete) {
      this.quotes.splice(index,1);
    }
  }
  
  constructor() { }
 
  ngOnInit() {
  }

}