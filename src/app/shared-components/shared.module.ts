import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../material.module';
import { LoaderComponent } from './loader/loader.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';

const sharedModules = [FormsModule, ReactiveFormsModule, MaterialModule];
const components = [NavBarComponent, LoaderComponent];
@NgModule({
  declarations: [...components],
  imports: [CommonModule, ...sharedModules],
  exports: [...sharedModules, ...components],
})
export class SharedModule {}
