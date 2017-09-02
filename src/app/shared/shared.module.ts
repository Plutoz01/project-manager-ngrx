import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { Components } from './components';

@NgModule({
	imports: [
		CommonModule,
		NgbModule,
	],
	declarations: [
		...Components
	],
	exports: [
		...Components
	]
})
export class SharedModule { }
