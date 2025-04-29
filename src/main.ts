import { bootstrapApplication } from '@angular/platform-browser';
import { provideHttpClient, withFetch }    from '@angular/common/http';
import { provideRouter }        from '@angular/router';
import { AppComponent }         from './app/app.component';
import { routes }               from './app/app.routes';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideStore } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import { autosReducer } from './app/autos/store/autos.reducer';
import { AutosEffects } from './app/autos/store/autos.effects';

bootstrapApplication(AppComponent, {
  providers: [
    provideHttpClient(
      withFetch()
    ),
    provideRouter(routes),
    provideAnimations(),
    provideStore({ 
      autos: autosReducer
    }),
 
    provideEffects([ 
      AutosEffects
    ]),
  ]
})
.catch(err => console.error(err));
