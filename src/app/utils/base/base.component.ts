import { OnDestroy } from "@angular/core";
import { Subject } from "rxjs/Subject";


export abstract class BaseComponent implements OnDestroy {
  public destroy$ : Subject<any> = new Subject;

  ngOnDestroy(){
    this.destroy();
  }

  destroy() {
    this.destroy$.next(true);
    this.destroy$.complete();
  }
}