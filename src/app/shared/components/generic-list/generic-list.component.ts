import {
	AfterViewInit, ChangeDetectionStrategy, Component, ElementRef, EventEmitter, Input, OnDestroy, Output, TemplateRef,
	ViewChild,
} from '@angular/core';
import { Observable, Subject } from 'rxjs/Rx';
import { animate, state, style, transition, trigger } from '@angular/animations';

@Component( {
	selector: 'pm-generic-list',
	templateUrl: './generic-list.component.html',
	styleUrls: [ './generic-list.component.scss' ],
	changeDetection: ChangeDetectionStrategy.OnPush,
	animations: [
		trigger( 'flyIn', [
			state( 'in', style( { transform: 'translateX(0)' } ) ),
			transition( 'void => *', [
				style( { transform: 'translateX(-100%)' } ),
				animate( 100 )
			] )
		] )
	]

} )
export class GenericListComponent<T> implements AfterViewInit, OnDestroy {

	@Input() itemTemplate: TemplateRef<any>;
	@Input() items: T[];
	@Input() selectable = false;
	@Input() selected: T;
	@Input() emptyPlaceholder = 'No items to display';
	@Input() scrollHeight?: string;

	@Output() itemClick = new EventEmitter<T>();
	@Output() selectionChanged = new EventEmitter<T>();
	@Output() bottomReached = new EventEmitter();

	@ViewChild( 'listItemContainer' ) listItemContainer: ElementRef;

	private onDestroySource$ = new Subject();

	get customItemTemplate(): TemplateRef<any> | null {
		return this.itemTemplate;
	}

	ngAfterViewInit() {
		Observable.fromEvent( this.listItemContainer.nativeElement, 'scroll' )
			.debounceTime( 50 )
			.takeUntil( this.onDestroySource$ )
			.subscribe( () => {
				const nativeContainer: HTMLElement = this.listItemContainer.nativeElement;
				const max = nativeContainer.scrollHeight;
				const actual = nativeContainer.offsetHeight + nativeContainer.scrollTop;
				if ( actual >= max ) {
					this.bottomReached.emit();
				}
			} );
	}

	ngOnDestroy() {
		this.onDestroySource$.next();
		this.onDestroySource$.unsubscribe();
	}

	onClick( item: T ) {
		if ( this.selectable ) {
			this.selected = this.selected === item ? null : item;
			this.selectionChanged.emit( this.selected );
		}
		this.itemClick.emit( item );
	}

	isSelected( item: T ): boolean {
		return this.selectable ? this.selected === item : false;
	}
}
