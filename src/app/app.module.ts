import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

/* Регистрируем компоненты */
import {AppComponent} from './app.component';
import {SectionComponent} from './section/section.component';

@NgModule({
    declarations: [
        AppComponent,
        SectionComponent
    ],
    imports: [
        BrowserModule
    ],
    providers: [],
    bootstrap: [AppComponent, SectionComponent]
})
export class AppModule {}
