import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { IFilter } from '../interfaces/filter.interface';
import { IPaginatedList } from '../interfaces/paginated-list.interface';
@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private httpClient: HttpClient) { }

  getItems<T>(filter: any, urlPrefix?: string): Promise<IPaginatedList<T>> {
    let url = 'https://cl.rus-bit.com/api/v1/Classifier/find';
    if (urlPrefix) url += urlPrefix;
    return this.httpClient.get<IPaginatedList<T>>(url, { params: filter }).toPromise();
  }

}
