import {Injectable} from "@angular/core";

@Injectable()
export class ScrollUtil {

  public static disableScroll(): void {
    document.body.style.overflow = "hidden";
  }

  public static enableScroll(): void {
    document.body.style.overflow = "auto";
  }

}
