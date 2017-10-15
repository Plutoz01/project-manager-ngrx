import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Identifiable } from '../../../shared/models/identifiable.interface';

import { ModelEditorComponent } from './editor.component';

interface TestModel extends Identifiable<number> {
	ID: number;
	name: string;
}

describe( 'ModelEditorComponent', () => {
	let component: ModelEditorComponent<TestModel, number>;
	let fixture: ComponentFixture<ModelEditorComponent<TestModel, number>>;

	beforeEach( async( () => {
		TestBed.configureTestingModule( {
			declarations: [ ModelEditorComponent ]
		} )
			.compileComponents();
	} ) );

	beforeEach( () => {
		fixture = TestBed.createComponent( ModelEditorComponent );
		component = fixture.componentInstance;
		fixture.detectChanges();
	} );

	it( 'should be created', () => {
		expect( component ).toBeTruthy();
	} );
} );
