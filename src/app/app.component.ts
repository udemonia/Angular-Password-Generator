import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  length = 16;
  password = '';
  includeLetters = false
  includeNumbers = false
  includeSymbols = false
  includeCapitals = false

  onChangeLength(value: string) {
    const numberValue = parseInt(value)
    if (!isNaN(numberValue)) {
      this.length = numberValue
    }
  }

  onChangeCapitals() {
    this.includeCapitals = !this.includeCapitals
  }

  onChangeUseLetters() {
    this.includeLetters = !this.includeLetters
  }
  onChangeNumbers() {
    this.includeNumbers = !this.includeNumbers
  }
  onChangeSymbol() {
    this.includeSymbols = !this.includeSymbols
  }

  onButtonClick() {
    const numbers = '1234567890'
    const letters = 'abcdefghijklmnopqrstuvwxyz'
    const symbols = '!@#$%^&*'
    const capitals = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'

    if (this.length > 999 && this.length) {
      alert("You're a Crazy Person!")
    }

    let validChars = '';
    if (this.includeLetters) {
      validChars += letters
    }
    if (this.includeNumbers) {
      validChars += numbers
    }
    if (this.includeSymbols) {
      validChars += symbols
    }
    if (this.includeCapitals) {
      validChars += capitals
    }

    let generatedPassword = '';
    for (let i = 0; i < this.length; i++) {
      const index = Math.floor(Math.random() * validChars.length)
      generatedPassword += validChars[index]
    }


    this.password = generatedPassword
    console.log(this.includeLetters)
    console.log(this.includeNumbers)
    console.log(this.includeSymbols)
    console.log(`Number Length: ${this.length}`)
  }
}
