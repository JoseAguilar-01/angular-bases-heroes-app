import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';

import { LayoutRootComponent } from './layouts/layout-root/layout-root.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { RegisterPageComponent } from './pages/register-page/register-page.component';
import { RouterOutlet } from '@angular/router';

@NgModule({
  declarations: [
    LayoutRootComponent,
    LoginPageComponent,
    RegisterPageComponent,
  ],
  imports: [CommonModule, AuthRoutingModule, RouterOutlet],
})
export class AuthModule {}
