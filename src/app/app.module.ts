import { SharedModule } from './shared/shared.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { AppRouting } from './app.routing';
import { ProjectsModule } from './projects/projects.module';

@NgModule({
	declarations: [
		AppComponent
	],
	imports: [
		AppRouting,
		BrowserModule,
		NgbModule.forRoot(),
		ProjectsModule,
		SharedModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
