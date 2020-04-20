import { Component, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-boolean-translation',
  template: `
    <div i18n>
      {
        value, select,
        TRUE {Yes}
        FALSE {No}
      }
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BooleanTranslationComponent {
  @Input() value: string;
}
