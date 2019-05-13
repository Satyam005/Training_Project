import { Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Advertisement } from './advertisement.model';
import { map } from 'rxjs/operators';

@Injectable({ providedIn: 'root'})
export class AdvertisementService{

    config = {
      apiUrl: 'http://localhost:8080/api'
    };
    constructor(private http: HttpClient) { }

    writeAdvt(advtInfo) {
      return this.http.post('http://localhost:8080/api/advt', advtInfo)
      .pipe(map(response => response));
    }

    getAllAdvt(){
      return this.http
      .get<Advertisement[]>(`${this.config.apiUrl}/advt`)
      .pipe(map(response => response));
    }

    clickify(vID: number) {

      return this.http.get(`http://localhost:8080/advertisements/${vID}/clicks`)
      .pipe(map(response => response));
    }

    getAdById(id: number){
      return this.http.get<Advertisement>(`${this.config.apiUrl}/advt/${id}`)
      .pipe(map(response => response));
    }

    getAdId(Ad){
      return this.http.get(`http://localhost:8080/advertisements/AdId`).pipe
      (map(response => response));
    }

    getMyAds(){
      return this.http
      .get<Advertisement[]>(`http://localhost:8080/api/advt/my`)
      .pipe(map(response => response));
    }

    updateAd(adObj){
      return this.http
      .put(`${this.config.apiUrl}/advt`, adObj)
      .pipe(map(response => response));
    }
    deleteAd(id: number){
      return this.http
      .delete(`${this.config.apiUrl}/advt/${id}`)
      .pipe(map(response => response));
    }

    getCategoryList(){
      return this.http
      .get<string[]>(`${this.config.apiUrl}/advt/category`)
      .pipe(map(response => response));
    }

    getAdsByCategory(category:string){

      return this.http
      .get<Advertisement[]>(`http://localhost:8080/api/my/filter/${category}`)
      .pipe(map(response => response));

    }

    getClickList(){
      return this.http
      .get<number[]>(`${this.config.apiUrl}/advt/clickList`)
      .pipe(map(response => response));
    }
}
