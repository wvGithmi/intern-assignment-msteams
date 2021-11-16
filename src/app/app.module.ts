import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { ClarityModule, ClrIconModule, ClrVerticalNavModule } from '@clr/angular';
import { ContentComponent } from './content/content.component';
import { PostComponent } from './content/conversation/post/post.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SubnavComponent } from './content/subnav/subnav.component';
import { ConversationComponent } from './content/conversation/conversation.component';
import { HttpClientModule } from '@angular/common/http';
import { UserIconLetterPipe } from './shared/pipes/user-icon-letter.pipe';
import '@cds/core/icon/register.js'

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidenavComponent,
    ContentComponent,
    PostComponent,
    SubnavComponent,
    ConversationComponent,
    UserIconLetterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ClrIconModule,
    ClrVerticalNavModule,
    ClarityModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

  
