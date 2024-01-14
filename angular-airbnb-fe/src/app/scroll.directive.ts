import { Directive } from '@angular/core';
import { HostListener,ElementRef,Renderer2 } from '@angular/core';
@Directive({
  selector: '[appScroll]',
  standalone: true
})
export class ScrollDirective {

  private scrollThreshold = 200; // Set your scroll threshold here
  public isScrolled = false;

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const scrollY = window.scrollY || window.pageYOffset;
    this.isScrolled = scrollY > this.scrollThreshold;
    if (this.isScrolled) {
      this.renderer.addClass(this.el.nativeElement, 'transition');
    } else {
      this.renderer.removeClass(this.el.nativeElement, 'transition');
    }
  }

}
