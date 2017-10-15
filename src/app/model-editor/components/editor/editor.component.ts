import { Component, Input, OnInit } from '@angular/core';
import { Identifiable } from '../../../shared/models/identifiable.interface';
import { ModelEditorService } from '../../services/editor.service';
import { FormGroup } from '@angular/forms';
import { SaveType } from '../../enums/save-type.enum';

@Component( {
	selector: 'pm-model-editor',
	templateUrl: './editor.component.html',
	styleUrls: [ './editor.component.scss' ]
} )
export class ModelEditorComponent<T extends Identifiable<ID>, ID extends string | number > implements OnInit {

	@Input() editorForm: FormGroup;

	constructor( private editorService: ModelEditorService<T, ID> ) {
	}

	ngOnInit() {
		if ( !this.editorForm ) {
			throw new Error( 'editorForm is a required @Input' );
		}
		this.editorForm.valueChanges
			.filter( () => this.editorService.pendingSaveType !== SaveType.Immediate )
			.subscribe(
			( changedModel: T ) => this.editorService.setCurrentModel( changedModel )
		);
	}

	save() {
		this.editorService.save$().subscribe(
				( savedModel: T ) => this.editorForm.reset( savedModel )
			);
	}

}
