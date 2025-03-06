import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ResponsiveSidenavComponent } from './responsive-sidenav.component';

describe('ResponsiveSidenavComponent', () => {
  let component: ResponsiveSidenavComponent;
  let fixture: ComponentFixture<ResponsiveSidenavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ResponsiveSidenavComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ResponsiveSidenavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
