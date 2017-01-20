//ENTRY POINT - Loads our root module, which then loads our root component

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app.module';

const platform = platformBrowserDynamic();

platform.bootstrapModule(AppModule); //bootstrap refers to launching application
