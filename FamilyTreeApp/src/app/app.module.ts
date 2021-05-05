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
import { StoreModule } from '@ngrx/store';
import { entityReducer } from './redux/entity.reducer';
import { NodeComponent } from './node/node.component';
import { FamilyTreeComponent } from './family-tree/family-tree.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { FamilyTreeViewComponent } from './family-tree-view/family-tree-view.component';

@NgModule({
  declarations: [
    AppComponent,
    MainNavComponent,
    PersonalInfoComponent,
    ParentsSettingsComponent,
    PartnersSettingsComponent,
    SiblingSettingsComponent,
    ChildrenSettingsComponent,
    NodeComponent,
    FamilyTreeComponent,
    FamilyTreeViewComponent
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
    MatListModule,
    StoreModule.forRoot({entityPage: entityReducer}),
    DragDropModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
