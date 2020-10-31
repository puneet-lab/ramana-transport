import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MaterialModule } from '../material.module';
import { SharedModule } from '../shared-components/shared.module';
import { LoginComponent } from './login/login.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { InductionDetailComponent } from './induction-detail/induction-detail.component';
import { InductionTestDetailsComponent } from './induction-test-details/induction-test-details.component';
import { InductionTestComponent } from './induction-test/induction-test.component';

@NgModule({
  declarations: [LoginComponent, UserDetailComponent, InductionDetailComponent, InductionTestDetailsComponent, InductionTestComponent],
  imports: [CommonModule, MaterialModule, SharedModule],
  exports: [LoginComponent],
})
export class AuthModule {}
