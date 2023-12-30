import { Component} from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { faker } from '@faker-js/faker';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',

})

export class AppComponent {
  randomText : string = faker.lorem.sentences();
  result :boolean = false;
  inputText :string = '';

  onChangeInput(text:string){
    this.inputText = text;
  }
  compare(letterRandom : string,letterEnter:string) : string{
    if(!letterEnter){
      return 'pending';
    }
    return letterEnter === letterRandom ? 'correct' : 'incorrect';
  }
}
