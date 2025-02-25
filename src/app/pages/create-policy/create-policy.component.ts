import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-auto-policy',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './create-policy.component.html',
  styleUrls: ['./create-policy.component.css']
})
export class CreateAutoPolicyComponent {
  years: number[] = [];
  vehicleMakes: string[] = [
    // 🇺🇸 American-made brands
    'Ford', 'Chevrolet', 'GMC', 'Cadillac', 'Buick', 'Chrysler', 'Dodge', 'Jeep', 
    'Lincoln', 'Ram', 'Tesla', 'Rivian', 'Lucid Motors', 
  
    // 🇩🇪 German manufacturers
    'BMW', 'Mercedes-Benz', 'Audi', 'Volkswagen', 'Porsche', 
  
    // 🇯🇵 Japanese manufacturers
    'Toyota', 'Honda', 'Nissan', 'Mazda', 'Subaru', 'Mitsubishi', 'Lexus', 'Infiniti',
  
    // 🇰🇷 Korean manufacturers
    'Hyundai', 'Kia', 'Genesis',
  
    // 🇬🇧 British manufacturers
    'Land Rover', 'Jaguar', 'Mini', 'Rolls-Royce', 'Bentley', 'Aston Martin',
  
    // 🇮🇹 Italian manufacturers
    'Ferrari', 'Maserati', 'Alfa Romeo', 'Fiat', 'Lamborghini',
  
    // 🇸🇪 Swedish manufacturers
    'Volvo', 'Polestar',
  
    // "Other" option for manual entry
    'Other'
  ];
  
  showCustomMakeInput = false; 

  policyForm = new FormGroup({
    policyNumber: new FormControl('', [Validators.required]),
    status: new FormControl('ACTIVE', [Validators.required]),
    policyType: new FormControl('LIABILITY', [Validators.required]),
    vehicleMake: new FormControl('', [Validators.required]),
    customVehicleMake: new FormControl(''), 
    vehicleModel: new FormControl('', [Validators.required]),
    vehicleYear: new FormControl('', [Validators.required]),
    firstName: new FormControl('', [Validators.required]),
    lastName: new FormControl('', [Validators.required]),
    startDate: new FormControl('', [Validators.required]),
    endDate: new FormControl('', [Validators.required]),
    premiumAmount: new FormControl('', [Validators.required, Validators.min(0)])
  });

  constructor() {
    this.populateYears();
    this.policyForm.get('vehicleMake')?.valueChanges.subscribe(value => {
      this.showCustomMakeInput = value === 'Other';
      if (!this.showCustomMakeInput) {
        this.policyForm.get('customVehicleMake')?.setValue('');
      }
    });
  }

  populateYears() {
    const currentYear = new Date().getFullYear();
    this.years = Array.from({ length: currentYear - 1900 + 3 }, (_, i) => currentYear + 2 - i);
  }

  onStartDateChange() {
    const startDateValue = this.policyForm.get('startDate')?.value;
    if (startDateValue) {
      const startDate = new Date(startDateValue);
      startDate.setFullYear(startDate.getFullYear() + 1);
      this.policyForm.patchValue({ endDate: startDate.toISOString().split('T')[0] });
    }
  }

  createPolicy() {
    if (this.policyForm.valid) {
      let formData = this.policyForm.value;
      if (this.showCustomMakeInput && formData.customVehicleMake) {
        formData.vehicleMake = formData.customVehicleMake;
      }
      console.log('New Auto Policy Created:', formData);
      alert('Policy Created Successfully!');
      this.policyForm.reset();
      this.showCustomMakeInput = false;
    }
  }
}
