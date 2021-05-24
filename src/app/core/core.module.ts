import { ErrorHandler, NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { HeaderComponent } from './header/header.component';

const declarations = [HeaderComponent];

const imports = [CommonModule, HttpClientModule];

const exports = [HeaderComponent];

@NgModule({
  declarations: [...declarations],
  imports: [...imports],
  exports: [...exports],
})
export class CoreModule {}
