import { ModuleWithProviders, NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HomeModule } from '../home/home.module';
import { MaterialModule } from '../material.module';
import { HeaderComponent } from './header/header.component';
import { HighlightTitleDirective } from './highlight-title.directive';

@NgModule({
  declarations: [
    HeaderComponent,
    HighlightTitleDirective
  ],
  imports: [
    CommonModule,
    HomeModule,
    MaterialModule,
    RouterModule
  ]
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() private parentModule: CoreModule) {
    if (parentModule) {
      throw new Error('CoreModule has already been loaded. Import CoreModule in the AppModule only.');
    }
  }

  static forRoot(): ModuleWithProviders {
    return {
      ngModule: CoreModule,
      providers: []
    };
  }
}
