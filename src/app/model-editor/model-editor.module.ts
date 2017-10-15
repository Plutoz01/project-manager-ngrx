import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ModelEditorComponent } from './components/editor/editor.component';
import { ModelEditorService } from './services/editor.service';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule( {
	imports: [
		CommonModule,
		ReactiveFormsModule
	],
	declarations: [ ModelEditorComponent ],
	exports: [
		ModelEditorComponent,
		ModelEditorService
	]
} )
export class ModelEditorModule {
}
