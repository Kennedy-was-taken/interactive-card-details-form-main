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

  card_number_placeholder = "1234 5678 9123 0000";
  card_holder_placeholder: string = "Jane Appleased";
  exp_mm_placeholder: string = '01';
  exp_yy_placeholder: string = '20';
  cvc_placeholder: string = '000';
  card_value = "";
  card_number_content: string = '';
  card_holder: string = '';
  card_number: string = '';
  exp_mm: string = '';
  exp_yy: string = '';
  cvc: string = '';
  counter: number | undefined;

  //public onTimeChange(event: Event): void{
  //     this.exp_mm = (event.target as HTMLInputElement).value;
  //}


  public onSubmit(): void {

  }

  public onKeyBackSpace(x: any): void {
    this.card_number_content = this.card_number_placeholder
  }

  public keyFuncCvc(x: any): void {

    if (this.cvc.length <= 0) {
      this.cvc = this.cvc_placeholder;
    }

    else {
      this.cvc = x.target.value;

      if (this.cvc.length <= 0) {
        this.cvc = this.cvc_placeholder;
      }
    }
  }

  public keyFuncYear(x: any): void {

    if (this.exp_yy.length <= 0) {
      this.exp_yy = this.exp_yy_placeholder;
    }

    else {
      this.exp_yy = x.target.value;

      if (this.exp_yy.length <= 0) {
        this.exp_yy = this.exp_yy_placeholder;
      }
    }
  }

  public keyFuncMonth(x: any): void {

    if (this.exp_mm.length <= 0) {
      this.exp_mm = this.exp_mm_placeholder;
    }

    else {
      this.exp_mm = x.target.value;

      if (this.exp_mm.length <= 0) {
        this.exp_mm = this.exp_mm_placeholder;
      }
    }
  }

  public keyFuncHolder(x: any): void {

    if (this.card_holder.length <= 0) {
      this.card_holder = this.card_holder_placeholder;
    }

    else {
      this.card_holder = x.target.value;

      if (this.card_holder.length <= 0) {
        this.card_holder = this.card_holder_placeholder;
      }
    }
  }

  public keyFunc(x: KeyboardEvent): void {
    console.log(x.key);
    if (this.card_number_content.length <= 0) {
      this.card_number_content = this.card_number_placeholder;
      console.log("one if statements block");
    }

    else {

      if (x.key == "Backspace") {
        console.log(this.card_number_content);
        this.card_number_content = this.card_number_content.slice(0, -1);

        if (this.card_number_content.length == 0) {
          this.card_number_content = this.card_number_placeholder;
          this.counter = 0;
          console.log("code block with another if");
        }
      }

      if (x.key == "1" || x.key == "2" || x.key == "3" || x.key == "4" || x.key == "5" ||
        x.key == "6" || x.key == "7" || x.key == "8" || x.key == "9" || x.key == "0") {
        if (this.counter == 0) {
          this.initCardCapture(x.key);
        }

        else if (this.card_value.length == 4) {
          this.card_value += " " + x.key;
          this.card_number_content = this.card_value;
        }

        else if (this.card_value.length == 9) {
          this.card_value += " " + x.key;
          this.card_number_content = this.card_value;
        }

        else if (this.card_value.length == 14) {
          this.card_value += " " + x.key;
          this.card_number_content = this.card_value;
        }

        else if (this.card_value.length > 18) {

        }

        else {

          console.log("key : " + x.key + ", key count : " + x.key.length);

          this.card_value += x.key;
          this.card_number_content = this.card_value;
        }
        // this.card_number_content = x.target.value;

      }

      else {
        this.card_number = this.card_value;
      }

    }

  }

  public initCardCapture(key: string): void {
    this.counter = 1;
    this.card_value = key;
    this.card_number_content = this.card_value;
    console.log("statements block");
  }

  public ngOnInit() {

    this.card_number_content = this.card_number_placeholder;

    this.card_holder = this.card_holder_placeholder;

    this.cvc = this.cvc_placeholder;

    this.exp_yy = this.exp_yy_placeholder;

    this.exp_mm = this.exp_mm_placeholder;

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
