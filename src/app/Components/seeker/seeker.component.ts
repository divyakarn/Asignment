import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../../Services/api.service.';

@Component({
  selector: 'app-seeker',
  standalone: true,
  imports: [],
  templateUrl: './seeker.component.html',
  styleUrl: './seeker.component.scss',
  providers:[ApiService]
})
export class SeekerComponent {
  constructor(private route: ActivatedRoute ,private apiService:ApiService) {}
  inputValue:any;

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
        // Access the input parameter passed from the previous component
        this.inputValue = params['input'];
        alert(this.inputValue);
    });

    const postData = { title: 'New Post', body: 'This is a new post.' };
    this.apiService.postData(postData).subscribe(response => {
      console.log('Response from POST request:', response);
    });
}
}
