import { Component, ViewEncapsulation } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { Router } from '@angular/router';

@Component({
  selector: 'google-home',
  standalone: true,
  imports: [MatFormFieldModule, MatSelectModule, MatInputModule, FormsModule,MatCardModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})


export class HomeComponent {

  selectedUserType:any; 
  inputValue: any;
  constructor(private router: Router) { }

  
  onSubmit() {
    // Check if a user type is selected
    if (this.selectedUserType && this.inputValue) {
        // Navigate to the appropriate route based on the selected user type
        this.router.navigate([`/${this.selectedUserType}`], { queryParams: { userType: this.selectedUserType, input: this.inputValue } });
    }
}


}
