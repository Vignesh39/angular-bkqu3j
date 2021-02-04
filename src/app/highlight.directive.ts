import { Directive, Input, ElementRef, HostListener } from "@angular/core";

@Directive({
  selector: "[appHighlight]"
})
export class HighlightDirective {
  @Input("appHighlight") highlightColor: string;

  constructor(private el: ElementRef) {}

  @HostListener("mouseenter") onMouseEnter() {
    //do something
    this.highlight(this.highlightColor || "red");
  }

  @HostListener("mouseleave") onMouseLeave() {
    //do something
    this.highlight(null);
  }

  private highlight(color: string) {
    this.el.nativeElement.style.backgroundColor = color;
  }
}
