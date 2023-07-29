// activity-selection.service.ts
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ActivitySelectionService {
  private selectedActivityIdSubject = new BehaviorSubject<number | null>(null);

  setSelectedActivityId(activityId: number | null): void {
    this.selectedActivityIdSubject.next(activityId);
  }

  getSelectedActivityId(): Observable<number | null> {
    return this.selectedActivityIdSubject.asObservable();
  }
}
