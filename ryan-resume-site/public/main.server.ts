import { enableProdMode } from '@angular/core';
import { environment } from './src/environments/environment';
import { AppServerModule } from './src/app/app.server.module';
import { ngExpressEngine } from '@nguniversal/express-engine';
import { provideModuleMap } from '@nguniversal/module-map-ngfactory-loader';
import * as express from 'express';
import { join } from 'path';

if (environment.production) {
  enableProdMode();
}

const app = express();
const distFolder = join(process.cwd(), 'dist/your-app-name/browser');
const indexHtml = 'index.html';

app.engine('html', ngExpressEngine({
  bootstrap: AppServerModule,
  providers: [
    provideModuleMap({})
  ]
}));

app.set('view engine', 'html');
app.set('views', distFolder);

app.get('*.*', express.static(distFolder, {
  maxAge: '1y'
}));

app.get('*', (req, res) => {
  res.render(indexHtml, { req });
});

const port = process.env.PORT || 4000;
app.listen(port, () => {
  console.log(`Node server listening on http://localhost:${port}`);
});
