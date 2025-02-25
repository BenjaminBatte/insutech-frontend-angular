import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateAutoPolicyComponent } from './create-policy.component';

describe('CreatePolicyComponent', () => {
  let component: CreateAutoPolicyComponent;
  let fixture: ComponentFixture<CreateAutoPolicyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateAutoPolicyComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateAutoPolicyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
