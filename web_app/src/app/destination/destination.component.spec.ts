import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DestinationComponent } from './destination.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('DestinationComponent', () => {
  let component: DestinationComponent;
  let fixture: ComponentFixture<DestinationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DestinationComponent ],
      imports: [ HttpClientTestingModule ]
    }).compileComponents();

    fixture = TestBed.createComponent(DestinationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
