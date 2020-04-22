import { Component, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-boolean-translation-2',
  templateUrl: 'boolean-translation-2.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BooleanTranslation2Component {
  @Input() value: string;
}
