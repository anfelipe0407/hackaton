import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ClienteService {
  private _baseUrl: string = environment.baseUrl;

  constructor(private _http: HttpClient) {}

  // * COTIZACIONES
  crearCotizacion(data: any) {
    const url: string = `${this._baseUrl}/admin/cliente/cotizar`;
    return this._http.post(url, { ...data });
  }

  getAllCotizaciones(id_cliente: any): Observable<any> {
    const url: string = `${this._baseUrl}/admin/getall-cotizaciones`;
    return this._http.post<any>(url, { id_cliente });
  }
}
