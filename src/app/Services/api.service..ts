import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl = 'https://example.com/api'; // Replace with your API URL

  constructor(private http: HttpClient) {}

  getRandomData(): Observable<any> {
    return this.http.get(`${this.apiUrl}/posts/${Math.floor(Math.random() * 100) + 1}`);
  }

  // POST request to send data
  postData(data: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/posts`, data);
  }

  // Add more methods for other HTTP verbs as needed (PUT, DELETE, etc.)
}