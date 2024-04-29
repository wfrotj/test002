import { Component, ElementRef, ViewChild } from '@angular/core';
import { DemoComponent } from '../demo/demo.component';

@Component({
  selector: 'app-input-section',
  standalone: true,
  imports: [DemoComponent],
  templateUrl: './input-section.component.html',
  styleUrl: './input-section.component.css',
})
export class InputSectionComponent {
  @ViewChild('dateOfBirthInput') dateOfBirth!: ElementRef;
  @ViewChild('ageInput') age!: ElementRef;
  //using viewchild to get the value of the input
  //using ! or definite assignment assertion to avoir error
  demo: DemoComponent = new DemoComponent();

  calculateAge() {
    const dateOfBirth = new Date(this.dateOfBirth.nativeElement.value);

    const age = new Date().getFullYear() - dateOfBirth.getFullYear();
    this.age.nativeElement.value = age;
  }
}
