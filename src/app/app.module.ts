import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import 'rxjs/Rx';

import { AppComponent } from './app.component';
import { AppRouting } from './app.routing';
import { ProjectsModule } from './projects/projects.module';
import { SharedModule } from './shared/shared.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { reducers } from './store/reducers';
import { environment } from '../environments/environment';

@NgModule( {
	declarations: [
		AppComponent
	],
	imports: [
		AppRouting,
		BrowserModule,
		BrowserAnimationsModule,
		NgbModule.forRoot(),
		StoreModule.forRoot( reducers ),
		EffectsModule.forRoot([]),
		!environment.production ? StoreDevtoolsModule.instrument() : [],
		ProjectsModule,
		SharedModule
	],
	providers: [],
	bootstrap: [ AppComponent ]
} )
export class AppModule {
}
