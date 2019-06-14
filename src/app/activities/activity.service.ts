import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';

@Injectable()
export class activityService {

  constructor( private http: HttpClient) {

  }
}
