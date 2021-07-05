import { Component, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import * as jspreadsheet from 'jspreadsheet-ce';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  title = 'editor';
  @ViewChild('deck') deck?: ElementRef<HTMLDeckgoDeckElement>;
  async onSelected(evt: any) {
    if (evt.detail) {
      await this.deck?.nativeElement.blockSlide(true);
    }
  }

  async addMedia() {
    const currentIndex = await this.deck?.nativeElement.getActiveIndex();
    const slides = await this.deck?.nativeElement.getLength();
    console.log(`Current index: ${currentIndex}`);
    console.log(`Total slides: ${slides}`);
  }

  ngAfterViewInit() {
    console.log('After');
    console.log(this.deck?.nativeElement.offsetWidth);
  }
  createTable(): void {
    const tableContainer = document.createElement('div');
    const drrContainer = this.createDrrContainer();
    drrContainer.text = true;

    const jReference = jspreadsheet(tableContainer, {
      data: [[]],
      columns: [
        { type: "text", width: 100, },
        { type: "text", width: 100, }
      ],
      minDimensions: [2, 2]
    });
    drrContainer.appendChild(tableContainer);

    document.getElementById("slide1")?.appendChild(drrContainer);

  }

  private createDrrContainer() {
    return document.createElement('deckgo-drr');
  }


}
