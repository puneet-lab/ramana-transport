import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth/auth.guard';
import { InductionDetailComponent } from './auth/induction-detail/induction-detail.component';
import { InductionTestDetailsComponent } from './auth/induction-test-details/induction-test-details.component';
import { InductionTestComponent } from './auth/induction-test/induction-test.component';
import { LoginComponent } from './auth/login/login.component';
import { UserDetailComponent } from './auth/user-detail/user-detail.component';
import { PagesLinkType } from './shared-components/model';

const routes: Routes = [
  {
    path: PagesLinkType.USER_DETAILS,
    component: UserDetailComponent,
    canActivate: [AuthGuard],
  },
  { path: PagesLinkType.LOGIN, component: LoginComponent },
  {
    path: PagesLinkType.INDUCTION_DETAILS,
    component: InductionDetailComponent,
  },
  {
    path: PagesLinkType.INDUCTION_TEST_DETAILS,
    component: InductionTestDetailsComponent,
  },
  {
    path: `${PagesLinkType.INDUCTION}/:type`,
    component: InductionTestComponent,
    canActivate: [AuthGuard],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
