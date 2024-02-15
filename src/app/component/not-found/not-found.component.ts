import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-not-found',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './not-found.component.html',
  styleUrl: './not-found.component.scss',
})
export class NotFoundComponent {
  @Input() visible: boolean = false;
  @Input() notFound: string = 'Nothing Found!';
  @Input() resetLinkText: string = 'Reset';
  @Input() resetLinkRoute: string = '/';
}
