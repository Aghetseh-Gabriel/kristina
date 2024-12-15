import {NgModule} from '@angular/core';
import {BrowserModule, bootstrapApplication} from '@angular/platform-browser';
import { AppComponent } from './app.component';
import {AppRoutingModule} from './app-routing.module';
import { LoginComponent } from './login/login.component';
import { MaterialComponent } from './material/material.component';
import { RestaurantdashComponent } from './restaurantdash/restaurantdash.component';
import { SignupComponent } from './signup/signup.component';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule, provideHttpClient, withFetch} from '@angular/common/http';

import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatCardModule} from '@angular/material/card';

@NgModule({
    declarations: [
        AppComponent,
        LoginComponent,
        MaterialComponent,
        RestaurantdashComponent,
        SignupComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        FormsModule,
        ReactiveFormsModule,
        MatCardModule,
        MatButtonModule,
        MatInputModule,
        MatIconModule,
        MatFormFieldModule,
        HttpClientModule,
        
    
    ],
    providers: [ 
        provideHttpClient(withFetch())
    ],
    bootstrap: [Location],
})
export 
class AppModule { }

