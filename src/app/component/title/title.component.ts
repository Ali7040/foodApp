import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-title',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './title.component.html',
  styleUrl: './title.component.scss',
})
export class TitleComponent {
  @Input() title!: string;
  @Input() margin? = '1rem 0 1rem 0.2rem';
  @Input() fontSize? = '1.7rems';
}
