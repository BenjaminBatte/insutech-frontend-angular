import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PolicyService } from '../../services/policy.service';
import { AutoPolicy } from '../../models/auto-policy.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-view-policies',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './view-policies.component.html',
  styleUrls: ['./view-policies.component.css']
})
export class ViewPoliciesComponent implements OnInit {
  policies$: Observable<AutoPolicy[]> | null = null;
  error: string | null = null;
  
  constructor(private policyService: PolicyService) {}

  ngOnInit() {
    this.loadPolicies();
  }

  loadPolicies() {
    this.policies$ = this.policyService.getAllPolicies();
  }

  deletePolicy(id: number | undefined) {
    if (id === undefined) {
      alert('Error: Cannot delete policy without an ID.');
      return;
    }
  
    if (confirm('Are you sure you want to delete this policy?')) {
      this.policyService.deletePolicy(id).subscribe(() => {
        alert('Policy deleted successfully.');
        this.loadPolicies();
      }, error => {
        this.error = 'Failed to delete policy. Please try again later.';
      });
  }
}

  }
