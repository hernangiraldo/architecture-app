import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

// ❌ MAL

@Injectable({
  providedIn: 'root'
})
export class DataServiceBad {
  constructor( private http: HttpClient ) { }

  fetchData(url: string): Observable<any> {
    return this.http.get(url);
  }
}

// ✅ BIEN

abstract class DataProvider {
  abstract fetch(url: string): Observable<any>;
}

@Injectable({
  providedIn: 'root'
})
export class HttpDataProvider implements DataProvider {
  constructor(private http: HttpClient) {}

  fetch(url: string): Observable<any> {
    return this.http.get(url);
  }
}

@Injectable({
  providedIn: 'root'
})
export class DataService {
  constructor(private dataProvider: DataProvider) {}

  fetchData(url: string): Observable<any> {
    return this.dataProvider.fetch(url);
  }
}
