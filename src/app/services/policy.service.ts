import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AutoPolicy } from '../models/auto-policy.model';

@Injectable({
  providedIn: 'root'
})
export class PolicyService {
  private apiUrl = 'http://localhost:9090/api/v1/policies';

  constructor(private http: HttpClient) {}

  createPolicy(policy: AutoPolicy): Observable<AutoPolicy> {
    return this.http.post<AutoPolicy>(`${this.apiUrl}`, policy);
  }

  getAllPolicies(): Observable<AutoPolicy[]> {
    return this.http.get<AutoPolicy[]>(this.apiUrl);
  }

  getPolicyById(id: number): Observable<AutoPolicy> {
    return this.http.get<AutoPolicy>(`${this.apiUrl}/${id}`);
  }

  getPolicyByPolicyNumber(policyNumber: string): Observable<AutoPolicy> {
    return this.http.get<AutoPolicy>(`${this.apiUrl}/policyNumber/${policyNumber}`);
  }

  updatePolicy(id: number, policy: AutoPolicy): Observable<AutoPolicy> {
    return this.http.put<AutoPolicy>(`${this.apiUrl}/${id}`, policy);
  }

  deletePolicy(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }

  searchPolicies(queryParams: any): Observable<AutoPolicy[]> {
    return this.http.get<AutoPolicy[]>(`${this.apiUrl}/filter`, { params: queryParams });
  }
}
