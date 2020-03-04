import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RecipeDetail1Page } from './recipe-detail1.page';

describe('RecipeDetail1Page', () => {
  let component: RecipeDetail1Page;
  let fixture: ComponentFixture<RecipeDetail1Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecipeDetail1Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RecipeDetail1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
