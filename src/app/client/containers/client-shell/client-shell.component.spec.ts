import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientShellComponent } from './client-shell.component';

describe('ClientShellComponent', () => {
  let component: ClientShellComponent;
  let fixture: ComponentFixture<ClientShellComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClientShellComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientShellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
