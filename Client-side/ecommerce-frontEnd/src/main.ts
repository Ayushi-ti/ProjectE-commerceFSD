import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app.module';


<<<<<<< HEAD
=======
import { AppModule } from './app.module';
>>>>>>> 507314c2ef885c9186bf397fb12ef179eb802f52
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
