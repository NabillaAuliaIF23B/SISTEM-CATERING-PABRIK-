import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class ApiurlService {

  constructor(private http: HttpClient) { }

  getData () : Observable <any> {
      return this.http.get(environment.apiUrl + 'api/karyawans');
    }
  
}
