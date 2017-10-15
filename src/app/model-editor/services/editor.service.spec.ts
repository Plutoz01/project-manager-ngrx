import { inject, TestBed } from '@angular/core/testing';

import { ModelEditorService } from './editor.service';
import { Identifiable } from '../../shared/models/identifiable.interface';

interface TestModel extends Identifiable<number> {
	ID: number;
	name: string;
}

describe( 'ModelEditorService', () => {
	beforeEach( () => {
		TestBed.configureTestingModule( {
			providers: [ ModelEditorService ]
		} );
	} );

	it( 'should be created', ( ) => {
		const service = TestBed.get( ModelEditorService );
		expect( service ).toBeTruthy();
	} );
} );
