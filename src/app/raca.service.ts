import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, delay } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RacaService {

  constructor(private http: HttpClient) { }

  listarRacas(): Observable<any>{
    return this.http.get('https://api.thecatapi.com/v1/breeds?api_key=live_i2Dk6MntjNoIfbgmmxgROWADYRre3tLRhajb8ZKbZBePLp8XVwbBT7gjKBG3LTtu').pipe(delay(1000));
  }

  listarRacaPeloID(id: string): Observable<any>{
    return this.http.get(`https://api.thecatapi.com/v1/breeds/${id}?api_key=live_i2Dk6MntjNoIfbgmmxgROWADYRre3tLRhajb8ZKbZBePLp8XVwbBT7gjKBG3LTtu`).pipe(delay(1000));
  }
}

