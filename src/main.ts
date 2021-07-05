import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { defineCustomElements as deckDeckGoCoreElement } from '@deckdeckgo/core/dist/loader';
// import { defineCustomElements as deckDeckGoRevealElement } from '@deckdeckgo/reveal/dist/loader';
// import { defineCustomElements as deckDeckGoSlideElement } from '@deckdeckgo/slide-title/dist/loader';
import { defineCustomElements as deckDeckGoSlideAspectElement } from '@deckdeckgo/slide-aspect-ratio/dist/loader';
import { defineCustomElements as deckDeckGoDrrElement } from '@deckdeckgo/drag-resize-rotate/dist/loader';
import { defineCustomElements as deckDeckInlineEditorGoElement } from '@deckdeckgo/inline-editor/dist/loader';
import { defineCustomElements as deckDeckGoLazyImgElement } from '@deckdeckgo/lazy-img/dist/loader';
import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));

deckDeckGoCoreElement();
// deckDeckGoRevealElement();
// deckDeckGoSlideElement();
deckDeckGoSlideAspectElement();
deckDeckGoDrrElement();
deckDeckInlineEditorGoElement();
deckDeckGoLazyImgElement();