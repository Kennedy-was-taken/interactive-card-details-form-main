import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

  title = 'interactive-card-details-form-main';

  labels = document.getElementsByClassName('image_front_card_number');
  inputs = document.querySelector('#CardsNumbers');
  card_number_content: string = '';
  card_number_placeholder = "e.g 1234 5678 9123 0000";
  card_holder: string = '';
  card_number: string = '';
  exp_mm : string | null = '01';
  exp_yy : string | null = '20';
  cvc : string = '000';

  //public onTimeChange(event: Event): void{
  //     this.exp_mm = (event.target as HTMLInputElement).value;
  //}


  public onSubmit(): void{

  }

  public keyFunc(x: any): void{
    this.card_number_placeholder += x.target.value;
  }

  public ngOnInit(){
    if(this.card_number == ''){
      this.card_number_content = "1234 5678 9123 0000";
    }
  }

  //adds an event lisener to the card_number
  // card_number.addEventListener('keydown', function(event){

  // });

//   // Add an event listener to the input
//   card_number.addEventListener('input', function() {
//   // Update the label's textContent to match the input value
//   label.textContent = input.value;
// });
}
