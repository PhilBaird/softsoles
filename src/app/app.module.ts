import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { DisplaybarComponent } from './components/displaybar/displaybar.component';
import { CardComponent } from './components/card/card.component';
import { FooterComponent } from './components/footer/footer.component';
import { AboutComponent } from './pages/about/about.component';
import { EduComponent } from './pages/edu/edu.component';
import { LocationComponent } from './pages/location/location.component';
import { ResearchComponent } from './pages/research/research.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { PageComponent } from './pages/page/page.component';
import {RouterModule, Routes} from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { Covid19Component } from './pages/covid19/covid19.component';
import { ServicesComponent } from './pages/services/services.component';
import { InstrumentsComponent } from './pages/instruments/instruments.component';
import { EducationComponent } from './pages/education/education.component';
import { ContactComponent } from './pages/contact/contact.component';
import {MatCardModule} from '@angular/material/card';
import { ParallaxcardComponent } from './components/parallaxcard/parallaxcard.component';
import { ProfilecardComponent } from './components/profilecard/profilecard.component';
import { CentercardComponent } from './components/centercard/centercard.component';
import { BulletcardComponent } from './components/bulletcard/bulletcard.component';
import { MapsComponent } from './components/maps/maps.component';
import { MobilenavbarComponent } from './components/mobilenavbar/mobilenavbar.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
// import {GoogleMapsModule} from '@angular/google-maps';

const routes: Routes = [
  {path: 'page', component: PageComponent},
  {path: 'home', component: HomeComponent},
  {path: 'about', component: AboutComponent},
  {path: 'covid19', component: Covid19Component},
  {path: 'services', component: ServicesComponent},
  {path: 'instruments', component: InstrumentsComponent},
  {path: 'location', component: LocationComponent},
  {path: 'education', component: EducationComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'research', component: ResearchComponent},
  {path: '', redirectTo: '/home', pathMatch: 'full' },
  {path: '**', redirectTo: '/home'}
];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    DisplaybarComponent,
    CardComponent,
    FooterComponent,
    AboutComponent,
    EduComponent,
    LocationComponent,
    ResearchComponent,
    PageComponent,
    HomeComponent,
    Covid19Component,
    ServicesComponent,
    InstrumentsComponent,
    EducationComponent,
    ContactComponent,
    ParallaxcardComponent,
    ProfilecardComponent,
    CentercardComponent,
    BulletcardComponent,
    MapsComponent,
    MobilenavbarComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    RouterModule.forRoot((routes)),
    MatCardModule,
    MatSidenavModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
