/// <reference path="../../node_modules/@types/jasmine/index.d.ts" />

import { AppComponent } from './app.component';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {By, BrowserModule}           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import {RouterModule, Router, RouterOutletMap, ActivatedRoute} from '@angular/router';
import {CommonModule, LocationStrategy} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {routes} from "./app.router";
import {HttpModule} from "@angular/http";
import {HomeComponent} from "./home/home.component";
import {ShowComponent} from "./showTask/showTask.component";
import {CreateComponent} from "./createTask/createTask.component";
import {RouterTestingModule} from "@angular/router/testing";

describe('AppComponent', function () {
  let de: DebugElement;
  let comp: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  class MockRouter {

  }
class MockActivatedRouter {

  }

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppComponent, HomeComponent, ShowComponent, CreateComponent ],
      providers: [{provide: Router, useClass: MockRouter},
        {provide: ActivatedRoute, useClass: MockActivatedRouter},
         RouterOutletMap],
      imports: [BrowserModule, CommonModule, FormsModule, RouterTestingModule,HttpModule]

    })
        .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    comp = fixture.componentInstance;
    de = fixture.debugElement.query(By.css('h1'));
  });

  it('should create component', () => expect(comp).toBeDefined() );

});