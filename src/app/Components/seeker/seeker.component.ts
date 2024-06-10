import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../../Services/api.service.';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-seeker',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './seeker.component.html',
  styleUrl: './seeker.component.scss',
  providers:[ApiService,ReactiveFormsModule]
})
export class SeekerComponent {
  seekerForm: FormGroup;
  constructor(private route: ActivatedRoute ,private apiService:ApiService,private fb: FormBuilder) {
    this.seekerForm = this.fb.group({
      state: [''],
      city: [''],
      area: ['']
    });
  }
  inputValue:any;

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
        // Access the input parameter passed from the previous component
        this.inputValue = params['input'];
    });

    const postData = { title: 'New Post', body: 'This is a new post.' };
    this.apiService.postData(postData).subscribe(response => {
      console.log('Response from POST request:', response);
    });
}
onSubmit() {
  // Process the form data
  console.log(this.seekerForm.value);
}


}
