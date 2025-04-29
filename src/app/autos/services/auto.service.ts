import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Auto, AutoDto, CreateAutoDto, UpdateAutoDto } from '../models/auto.model';

@Injectable({ providedIn: 'root' })
export class AutoService {
  private apiUrl = '/api/auto';

  constructor(private http: HttpClient) {}

  getAll(): Observable<Auto[]> {
    return this.http.get<Auto[]>(this.apiUrl);
  }
  
  create(dto: CreateAutoDto): Observable<AutoDto> {
    return this.http.post<AutoDto>(this.apiUrl, dto);
  }

  update(id: number, dto: UpdateAutoDto): Observable<AutoDto> {
    return this.http.put<AutoDto>(`${this.apiUrl}/${id}`, dto);
  }

  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
  
}
