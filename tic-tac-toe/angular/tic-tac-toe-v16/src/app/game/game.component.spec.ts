import { ComponentFixture, TestBed, fakeAsync, flushMicrotasks, tick } from '@angular/core/testing';

import { GameComponent } from './game.component';
import { BoardComponent } from '../board/board.component';
import { GameInfoComponent } from '../game-info/game-info.component';
import { SquareComponent } from '../square/square.component';

describe('GameComponent', () => {
  let component: GameComponent;
  let fixture: ComponentFixture<GameComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        GameComponent,
        BoardComponent,
        GameInfoComponent,
        SquareComponent,
      ]
    });
    fixture = TestBed.createComponent(GameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('when clicking square it should change to X', fakeAsync(() => {
    spyOn(component, 'handleClick');

    let square = fixture.debugElement.nativeElement.querySelector('.square');

    square.click();

    tick(1);

    expect(component.handleClick).toHaveBeenCalled();
  }));
});
