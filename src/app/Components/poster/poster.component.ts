import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../../Services/api.service.';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
@Component({
  selector: 'app-poster',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './poster.component.html',
  styleUrl: './poster.component.scss',
  providers:[ApiService]
})
export class PosterComponent {
  posterForm: FormGroup;
  constructor(private route: ActivatedRoute,private apiService: ApiService,private fb: FormBuilder) {
    this.posterForm = this.fb.group({
      state: [''],
      city: [''],
      area: [''],
      rent: ['']
    });
  }
  inputValue:any;


  ngOnInit() {
    this.route.queryParams.subscribe(params => {
        // Access the input parameter passed from the previous component
        this.inputValue = params['input'];
    });
    
}


onSubmit(action: string) {
  if (action === 'post') {
    this.postData();
  } else if (action === 'update') {
    this.updateData();
  }
}

postData() {
  // Handle post action
  console.log('Posting data:', this.posterForm.value);
}

updateData() {
  // Handle update action
  console.log('Updating data:', this.posterForm.value);
}
  

}
