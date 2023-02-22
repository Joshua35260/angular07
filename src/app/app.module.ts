import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { routes } from './app-routing.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DevelopperComponent } from './developper/developper.component';
import { SkillsComponent } from './developper/skills/skills.component';



@NgModule({
    declarations: [
        AppComponent,
        DevelopperComponent,
        SkillsComponent,
    ],
    providers: [],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        RouterModule.forRoot(routes),
     
    ]
})
export class AppModule { }
