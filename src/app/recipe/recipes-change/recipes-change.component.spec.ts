import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipesChangeComponent } from './recipes-change.component';

describe('RecipesChangeComponent', () => {
  let component: RecipesChangeComponent;
  let fixture: ComponentFixture<RecipesChangeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecipesChangeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecipesChangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
