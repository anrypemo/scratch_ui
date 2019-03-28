import {Directive, ElementRef, EventEmitter, OnDestroy, OnInit, Output} from "@angular/core";
import {fromEvent, Subscription} from "rxjs";
import {tap} from "rxjs/operators";


@Directive({
  selector: "[clickOutside]"
})

export class ClickOutsideDirective implements OnInit, OnDestroy {
  private listening: boolean;
  private globalClick: Subscription;

  @Output()
  clickOutside: EventEmitter<Object>;

  constructor(private _elRef: ElementRef) {
    this.listening = false;
    this.clickOutside = new EventEmitter();
  }

  ngOnInit() {
    this.globalClick =
      fromEvent(document, "click")
        .pipe(
          tap(() => {
            this.listening = true;
          })
        ).subscribe((event: MouseEvent) => {
        this.onGlobalClick(event);
      });
  }

  ngOnDestroy() {
    this.globalClick.unsubscribe();
  }

  onGlobalClick(event: MouseEvent) {
    if (event instanceof MouseEvent && this.listening === true) {
      if (!this.isDescendant(this._elRef.nativeElement, event.target)) {
        this.clickOutside.emit({
          target: (event.target || null),
          value: true
        });
      }
    }
  }

  isDescendant(parent, child) {
    let node = child;
    while (node !== null) {
      if (node === parent || node.className === parent.className) {
        return true;
      } else {
        node = node.parentNode;
      }
    }
    return false;
  }
}
