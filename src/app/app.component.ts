import { defineCustomElements as deckDeckGoElement } from '@deckdeckgo/drag-resize-rotate/dist/loader';
deckDeckGoElement();

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  grid: HTMLElement;
  title = 'sample-editor';

  ngOnInit(): void {
    this.grid = document.getElementById('container-body');
  }
  createText(): HTMLSpanElement {
    const span = document.createElement('span');
    span.setAttribute('contenteditable', 'true');
    span.setAttribute('slot', '');
    span.textContent = 'double click to edit text...';
    return span;
  }

  addText(): void {
    const drrContainer = document.createElement('deckgo-drr');
    drrContainer.text = true;
    const spanText = this.createText();
    drrContainer.appendChild(spanText);
    this.grid.appendChild(drrContainer);

    //trying to simulate a double click to enable the text edit mode
    drrContainer.dispatchEvent(this.helperCreateDbClickEvent());

  }

  private helperCreateDbClickEvent(): MouseEvent {
    return new MouseEvent('dblclick', {
      'view': window,
      'bubbles': true,
      'cancelable': true
    });
  }
}
