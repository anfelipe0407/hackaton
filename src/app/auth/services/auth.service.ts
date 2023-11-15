import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private _baseUrl: string = environment.baseUrl;
  public userInfo: any;
  public cliente_id: any;

  constructor(private _http: HttpClient) {}

  login(loginObj: any): Observable<any> {
    // usuario, clave
    const url: string = `${this._baseUrl}/login`;
    return this._http.post<any>(url, { ...loginObj });
  }

  // * ASESORES
  crearAsesor(data: any) {
    const url: string = `${this._baseUrl}/admin/create-asesor`;
    return this._http.post(url, { ...data });
  }

  getAllAsesores(): Observable<any> {
    const url: string = `${this._baseUrl}/admin/getall-asesores`;
    return this._http.get<any>(url);
  }

  // * CLIENTES
  crearCliente(data: any) {
    const url: string = `${this._baseUrl}/admin/create-cliente`;
    return this._http.post(url, { ...data });
  }

  getAllClientes(): Observable<any> {
    const url: string = `${this._baseUrl}/admin/getall-clientes`;
    return this._http.get<any>(url);
  }

  // * PRODUCTOS
  crearProducto(data: any) {
    const url: string = `${this._baseUrl}/admin/create-producto`;
    return this._http.post(url, { ...data });
  }

  getAllProductos(): Observable<any> {
    const url: string = `${this._baseUrl}/admin/getall-productos`;
    return this._http.get<any>(url);
  }
}
