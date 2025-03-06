import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ShortContainerComponent } from './short-container.component';

describe('ShortContainerComponent', () => {
  let component: ShortContainerComponent;
  let fixture: ComponentFixture<ShortContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShortContainerComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ShortContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
