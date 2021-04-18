import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainNavComponent } from './main-nav/main-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { PersonalInfoComponent } from './personal-info/personal-info.component';
import { ParentsSettingsComponent } from './parents-settings/parents-settings.component';
import { PartnersSettingsComponent } from './partners-settings/partners-settings.component';
import { SiblingSettingsComponent } from './sibling-settings/sibling-settings.component';
import { ChildrenSettingsComponent } from './children-settings/children-settings.component';

@NgModule({
  declarations: [
    AppComponent,
    MainNavComponent,
    PersonalInfoComponent,
    ParentsSettingsComponent,
    PartnersSettingsComponent,
    SiblingSettingsComponent,
    ChildrenSettingsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
