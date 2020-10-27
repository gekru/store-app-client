import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PrintingEditionModel } from 'src/app/models/printing-edition.model';
import { environment } from 'src/environments/environment';

enum ApiPrintingEditionRoutes {
  GetAll = 'api/printingedition/getall',
}

@Injectable({
  providedIn: 'root'
})

export class PrintingEditionService {

  myApiUrl: string;

  constructor(private http: HttpClient) {
    this.myApiUrl = environment.apiUrl;
  }

  getAll(): Observable<PrintingEditionModel[]> {
    return this.http.get<PrintingEditionModel[]>(this.myApiUrl + ApiPrintingEditionRoutes.GetAll);
  }
}
