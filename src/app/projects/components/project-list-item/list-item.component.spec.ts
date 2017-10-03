import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectListItemComponent } from './list-item.component';

// TODO: fix
xdescribe( 'ProjectListItemComponent', () => {
	let component: ProjectListItemComponent;
	let fixture: ComponentFixture<ProjectListItemComponent>;

	beforeEach( async( () => {
		TestBed.configureTestingModule( {
			declarations: [ ProjectListItemComponent ]
		} )
			.compileComponents();
	} ) );

	beforeEach( () => {
		fixture = TestBed.createComponent( ProjectListItemComponent );
		component = fixture.componentInstance;
		fixture.detectChanges();
	} );

	it( 'should be created', () => {
		expect( component ).toBeTruthy();
	} );
} );
