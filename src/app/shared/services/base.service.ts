import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

export class BaseService<T> {
    protected httpClient: HttpClient;
    protected resource: string;
    protected urlApi = environment.apiUrl;

    public constructor(http: HttpClient, resource: string) {
        this.httpClient = http;
        this.resource = resource;
     
    }

    public get(action: string = ''): Observable<T> {
        return this.httpClient.get<T>(`${this.urlApi}/${this.resource}/${action}`).pipe(catchError(this.handleError));
    }

    public post(action: string = '', body: any): Observable<any> {
        return this.httpClient.post<any>(`${this.urlApi}/${this.resource}/${action}`, body).pipe(catchError(this.handleError));
    }

    public put(action: string = '', body: any, id: string): Observable<any> {
        return this.httpClient.put<any>(`${this.urlApi}/${this.resource}/${action}${id}`, body).pipe(catchError(this.handleError));
    }
    
    protected handleError(error: any): Observable<any> {
      console.log("ERRO NA CHAMADA DA REQUEST ==> ", error);
      return throwError(error);
    }

    static retornarMensagensErro(erro: HttpErrorResponse | any): Array<any> {
        if (erro.error && erro.error.errors) {
            return erro.error.errors;
        }
        return [];
    }
}