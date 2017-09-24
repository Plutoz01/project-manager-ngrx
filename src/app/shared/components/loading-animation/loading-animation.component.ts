import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';

@Component( {
	selector: 'pm-loading-animation',
	templateUrl: './loading-animation.component.html',
	styleUrls: [ './loading-animation.component.scss' ],
	changeDetection: ChangeDetectionStrategy.OnPush
} )
export class LoadingAnimationComponent {
}
