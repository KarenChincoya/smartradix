import { NgModule } from '@angular/core';

import {
  MatInputModule,
  MatCardModule,
  MatTableModule,
  MatButtonModule,
  MatToolbarModule,
  MatExpansionModule,
  MatProgressSpinnerModule,
  MatTabsModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatDialogModule,
  MatOptionModule,
  MatSelectModule
} from '@angular/material';

@NgModule({
  exports: [
    MatTableModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    MatToolbarModule,
    MatExpansionModule,
    MatProgressSpinnerModule,
    MatTabsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatDialogModule,
    MatOptionModule,
    MatSelectModule
  ]
})
export class AngularMaterialModule {

}
