import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable()

export class Service {

    constructor(public _httpClient: HttpClient) { }
    buscarTodosHospital():Observable<any> {
        return this._httpClient.get(environment.url + '/radio/r');
    }

}
