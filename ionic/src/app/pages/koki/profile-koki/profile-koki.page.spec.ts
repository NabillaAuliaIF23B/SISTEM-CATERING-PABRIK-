import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProfileKokiPage } from './profile-koki.page';

describe('ProfileKokiPage', () => {
  let component: ProfileKokiPage;
  let fixture: ComponentFixture<ProfileKokiPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileKokiPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
