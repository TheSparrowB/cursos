import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideHttpClient } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes),
    
    //ESTO NOS SIRVE PARA PODER PROVEER A TODOS LOS COMPONENTES EL USO DEL HTTPCLIENT
    provideHttpClient()
  ]
};
