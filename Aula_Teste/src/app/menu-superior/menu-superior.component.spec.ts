import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuSuperiorComponent } from './menu-superior.component';

describe('MenuSuperiorComponent', () => {
  let component: MenuSuperiorComponent;
  let fixture: ComponentFixture<MenuSuperiorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MenuSuperiorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MenuSuperiorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
