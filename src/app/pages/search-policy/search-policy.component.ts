import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormGroup, FormControl, ReactiveFormsModule } from '@angular/forms';
import { PolicyService } from '../../services/policy.service';
import { AutoPolicy } from '../../models/auto-policy.model';

@Component({
  selector: 'app-search-policy',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule], 
  templateUrl: './search-policy.component.html',
  styleUrls: ['./search-policy.component.css']
})
export class SearchPolicyComponent {
  policies: AutoPolicy[] = [];
  searchForm = new FormGroup({
    policyNumber: new FormControl(''),
    status: new FormControl(''),
    policyType: new FormControl(''),
    vehicleMake: new FormControl(''),
    startDate: new FormControl(''),
    endDate: new FormControl('')
  });

  constructor(private policyService: PolicyService) {}

  searchPolicies() {
    const queryParams: any = {};
    Object.entries(this.searchForm.value).forEach(([key, value]) => {
      if (value) queryParams[key] = value;
    });

    this.policyService.searchPolicies(queryParams).subscribe((data) => {
      this.policies = data;
    });
  }
}
