import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import 'rxjs/Rx';

import { AppComponent } from './app.component';
import { AppRouting } from './app.routing';
import { ProjectsModule } from './projects/projects.module';
import { SharedModule } from './shared/shared.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule( {
	declarations: [
		AppComponent
	],
	imports: [
		AppRouting,
		BrowserModule,
		BrowserAnimationsModule,
		NgbModule.forRoot(),
		ProjectsModule,
		SharedModule
	],
	providers: [],
	bootstrap: [ AppComponent ]
} )
export class AppModule {
}
