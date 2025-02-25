export interface AutoPolicy {
    id?: number;
    policyNumber: string;
    status: 'ACTIVE' | 'CANCELLED' | 'EXPIRED'; 
    policyType: 'LIABILITY' | 'COLLISION' | 'COMPREHENSIVE' ;
    vehicleMake: string;
    vehicleModel: string;
    vehicleYear: string;
    firstName: string;
    lastName: string;
    startDate: string;
    endDate: string;
    premiumAmount: number;
  }
  