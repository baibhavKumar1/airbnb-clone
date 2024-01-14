import {
  AfterViewInit,
  Component,
  TemplateRef,
  ViewChild,
  ViewContainerRef,
  ElementRef,
} from '@angular/core';
import {
  ComponentPortal,
  DomPortal,
  Portal,
  TemplatePortal,
  PortalModule,
} from '@angular/cdk/portal';

/**
 * @title Portal overview
 */
@Component({
  selector: 'app-search',
  templateUrl: 'search.component.html',
  
  standalone: true,
  imports: [PortalModule],
})
export class SearchComponent implements AfterViewInit {
  constructor(
    private _viewContainerRef: ViewContainerRef,
    
    ) {}
  @ViewChild('templatePortalContent') templatePortalContent!: TemplateRef<unknown>;
  @ViewChild('domPortalContent') domPortalContent!: ElementRef<HTMLElement>;

  selectedPortal!: Portal<any>;
  templatePortal!: TemplatePortal<any>;
  domPortal!: DomPortal<any>;  

  ngAfterViewInit() {
    
    this.templatePortal = new TemplatePortal(this.templatePortalContent, this._viewContainerRef);
    this.domPortal = new DomPortal(this.domPortalContent);
  }
}


