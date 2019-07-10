import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { CoreModule } from './core.module';

platformBrowserDynamic()
  .bootstrapModule(CoreModule)
  .catch(err => console.log(err));
