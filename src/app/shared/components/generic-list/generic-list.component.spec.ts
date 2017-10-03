import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GenericListComponent } from './generic-list.component';

describe( 'ExampleListComponent', () => {
	let component: GenericListComponent<string>;
	let fixture: ComponentFixture<GenericListComponent<string>>;

	beforeEach( async( () => {
		TestBed.configureTestingModule( {
			declarations: [ GenericListComponent ]
		} )
			.compileComponents();
	} ) );

	beforeEach( () => {
		fixture = TestBed.createComponent( GenericListComponent );
		component = fixture.componentInstance;
		fixture.detectChanges();
	} );

	it( 'should be created', () => {
		expect( component ).toBeTruthy();
	} );
} );
