import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-poster',
  standalone: true,
  imports: [],
  templateUrl: './poster.component.html',
  styleUrl: './poster.component.scss'
})
export class PosterComponent {
  constructor(private route: ActivatedRoute) {}
  inputValue:any;

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
        // Access the input parameter passed from the previous component
        this.inputValue = params['input'];
        alert( this.inputValue);
    });
}
  

}
