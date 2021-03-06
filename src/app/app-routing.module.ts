import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserListComponent } from './admin/user-list/user-list.component';
import { AuthGuard } from './auth/auth.guard';
import { InductionDetailComponent } from './auth/induction-detail/induction-detail.component';
import { InductionFinishComponent } from './auth/induction-finish/induction-finish.component';
import { InductionTestDetailsComponent } from './auth/induction-test-details/induction-test-details.component';
import { InductionTestComponent } from './auth/induction-test/induction-test.component';
import { LoginComponent } from './auth/login/login.component';
import { UserDetailComponent } from './auth/user-detail/user-detail.component';
import { LandingComponent } from './landing/landing.component';
import { PagesLinkType } from './shared-components/model';

const routes: Routes = [
  {
    path: '',
    redirectTo: PagesLinkType.HOME,
    pathMatch: 'full',
  },
  {
    path: PagesLinkType.HOME,
    component: LandingComponent,
  },
  {
    path: PagesLinkType.USER_DETAILS,
    component: UserDetailComponent,
    canActivate: [AuthGuard],
  },
  { path: PagesLinkType.LOGIN, component: LoginComponent },
  {
    path: PagesLinkType.INDUCTION_DETAILS,
    component: InductionDetailComponent,
    canActivate: [AuthGuard],
  },
  {
    path: PagesLinkType.INDUCTION_TEST_DETAILS,
    component: InductionTestDetailsComponent,
    canActivate: [AuthGuard],
  },
  {
    path: PagesLinkType.INDUCTION_FINISHED,
    component: InductionFinishComponent,
    canActivate: [AuthGuard],
  },
  {
    path: `${PagesLinkType.INDUCTION}/:type`,
    component: InductionTestComponent,
    canActivate: [AuthGuard],
  },
  {
    path: PagesLinkType.ADMIN_USER_LIST,
    component: UserListComponent,
    canActivate: [AuthGuard],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
