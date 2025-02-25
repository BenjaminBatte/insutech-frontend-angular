import { Routes } from '@angular/router';
import {CreateAutoPolicyComponent } from './pages/create-policy/create-policy.component';
import { ViewPoliciesComponent } from './pages/view-policies/view-policies.component';
import { SearchPolicyComponent } from './pages/search-policy/search-policy.component';
import { EditPolicyComponent } from './pages/edit-policy/edit-policy.component';

export const routes: Routes = [
  { path: 'create-policy', component: CreateAutoPolicyComponent},
  { path: 'view-policies', component: ViewPoliciesComponent },
  { path: 'search-policy', component: SearchPolicyComponent },
  { path: 'edit-policy/:id', component: EditPolicyComponent },
  { path: '', redirectTo: 'view-policies', pathMatch: 'full' }
];



