import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { EditStudentsComponent } from './edit-students.component';

describe('EditStudentsComponent', () => {
  let component: EditStudentsComponent;
  let fixture: ComponentFixture<EditStudentsComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ EditStudentsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditStudentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
