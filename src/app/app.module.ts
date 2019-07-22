import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { AngularFireModule } from '@angular/fire';
import { environment } from '../environments/environment';
import { AngularFirestoreModule } from '@angular/fire/firestore';
// Modulos
import { AppRoutingModule } from './app-routing.module';

// NGRX
import { StoreModule } from '@ngrx/store';
import { appReducer } from './app.reducer';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';





// Modulos perzonalizados
import { AuthModule } from './auth/auth.module';

// import { IngresoEgresoModule } from './ingreso-egreso/ingreso-egreso.module';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AuthModule,
    // IngresoEgresoModule,
    AppRoutingModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase), // imports firebase/app needed for everything
    AngularFirestoreModule, // imports firebase/firestore, only needed for database features
    StoreModule.forRoot(appReducer),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
