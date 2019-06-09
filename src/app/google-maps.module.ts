import { NgModule } from '@angular/core';
import { AgmCoreModule } from '@agm/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@NgModule({
  exports: [
    CommonModule,
    FormsModule
  ]
})
export class GoogleMapsModule {

}
