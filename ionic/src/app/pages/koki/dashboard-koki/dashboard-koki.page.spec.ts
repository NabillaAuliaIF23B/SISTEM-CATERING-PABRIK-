import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DashboardKokiPage } from './dashboard-koki.page';

describe('DashboardKokiPage', () => {
  let component: DashboardKokiPage;
  let fixture: ComponentFixture<DashboardKokiPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardKokiPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
