import { InjectionToken, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { ContextService } from 'poc-arquitetura';
import { MaterialModule } from 'projects/poc-clientes/src/lib/material-module';
import { AppComponent } from './app.component';

export const staticData = new InjectionToken<Object>('staticData');

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    FormsModule,
    BrowserAnimationsModule,
    RouterModule.forRoot([
      { path: 'poc-poc-clientes', loadChildren: 'projects/poc-clientes/src/public_api#PocClientesModule' },
      { path: '**', redirectTo: 'poc-poc-clientes', pathMatch: 'full' }
    ])
  ],
  providers: [
    { provide: staticData, useValue: {} },
    {
      provide: ContextService,
      useFactory: (data: Object) => new ContextService(data),
      deps: [staticData]
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
