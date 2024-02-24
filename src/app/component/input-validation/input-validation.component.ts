import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { AbstractControl } from '@angular/forms';

const VALIDATORS_MESSAGE: any = {
  required: 'should not be empty',
  email: 'Email is not valid',
};

@Component({
  selector: 'input-validation',
  standalone: true,
  imports: [],
  templateUrl: './input-validation.component.html',
  styleUrl: './input-validation.component.scss',
})
export class InputValidationComponent implements OnInit, OnChanges {
  @Input() control!: AbstractControl;
  @Input() showError: boolean = true;
  errorMessages: string[] = [];

  ngOnChanges(changes: SimpleChanges): void {
    this.checkValidation();
  }
  ngOnInit(): void {
    this.control.statusChanges.subscribe(() => {
      this.checkValidation();
    });
    this.control.valueChanges.subscribe(() => {
      this.checkValidation();
    });
  }
  checkValidation() {
    const error = this.control.errors;
    if (!error) {
      this.errorMessages = [];
      return;
    }

    const errorKey = Object.keys(error);

    this.errorMessages = errorKey.map((key) => VALIDATORS_MESSAGE[key]);
  }
}
