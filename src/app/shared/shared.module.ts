import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { RandomHexComponent } from './random-hex/random-hex.component';

@NgModule({
  declarations: [RandomHexComponent],
  imports: [CommonModule],
  exports: [RandomHexComponent]
})
export class SharedModule {}
