import { Injectable } from '@angular/core';
import { MatIconRegistry } from "@angular/material/icon";
import { DomSanitizer } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class IconsService {

  constructor(private matIconRegistry: MatIconRegistry, private domSanitizer: DomSanitizer) { }

  registerIcons() {
    this.matIconRegistry.addSvgIcon(
      "add",
      this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/icons/add.svg")
    );
    this.matIconRegistry.addSvgIcon(
      "back",
      this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/icons/back.svg")
    );
    this.matIconRegistry.addSvgIcon(
      "desktop",
      this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/icons/desktop.svg")
    );
    this.matIconRegistry.addSvgIcon(
      "download",
      this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/icons/download.svg")
    );
    this.matIconRegistry.addSvgIcon(
      "expand-down",
      this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/icons/expand-down.svg")
    );
    this.matIconRegistry.addSvgIcon(
      "expand",
      this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/icons/expand.svg")
    );
    this.matIconRegistry.addSvgIcon(
      "facebook",
      this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/icons/facebook.svg")
    );
    this.matIconRegistry.addSvgIcon(
      "favorite-filled",
      this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/icons/favorite-filled.svg")
    );
    this.matIconRegistry.addSvgIcon(
      "favorite",
      this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/icons/favorite.svg")
    );
    this.matIconRegistry.addSvgIcon(
      "filter",
      this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/icons/filter.svg")
    );
    this.matIconRegistry.addSvgIcon(
      "fullscreen",
      this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/icons/fullscreen.svg")
    );
    this.matIconRegistry.addSvgIcon(
      "group",
      this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/icons/group.svg")
    );
    this.matIconRegistry.addSvgIcon(
      "home-filled",
      this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/icons/home-filled.svg")
    );
    this.matIconRegistry.addSvgIcon(
      "home",
      this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/icons/home.svg")
    );
    this.matIconRegistry.addSvgIcon(
      "instagram",
      this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/icons/instagram.svg")
    );
    this.matIconRegistry.addSvgIcon(
      "library-filled",
      this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/icons/library-filled.svg")
    );
    this.matIconRegistry.addSvgIcon(
      "library",
      this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/icons/library.svg")
    );
    this.matIconRegistry.addSvgIcon(
      "lyrics",
      this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/icons/lyrics.svg")
    );
    this.matIconRegistry.addSvgIcon(
      "more",
      this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/icons/more.svg")
    );
    this.matIconRegistry.addSvgIcon(
      "next",
      this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/icons/next.svg")
    );
    this.matIconRegistry.addSvgIcon(
      "pause",
      this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/icons/pause.svg")
    );
    this.matIconRegistry.addSvgIcon(
      "play",
      this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/icons/play.svg")
    );
    this.matIconRegistry.addSvgIcon(
      "playing-on",
      this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/icons/playing-on.svg")
    );
    this.matIconRegistry.addSvgIcon(
      "prev",
      this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/icons/prev.svg")
    );
    this.matIconRegistry.addSvgIcon(
      "previous",
      this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/icons/previous.svg")
    );
    this.matIconRegistry.addSvgIcon(
      "queue",
      this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/icons/queue.svg")
    );
    this.matIconRegistry.addSvgIcon(
      "repeat",
      this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/icons/repeat.svg")
    );
    this.matIconRegistry.addSvgIcon(
      "search-filled",
      this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/icons/search-filled.svg")
    );
    this.matIconRegistry.addSvgIcon(
      "search",
      this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/icons/search.svg")
    );
    this.matIconRegistry.addSvgIcon(
      "share",
      this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/icons/share.svg")
    );
    this.matIconRegistry.addSvgIcon(
      "shuffle",
      this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/icons/shuffle.svg")
    );
    this.matIconRegistry.addSvgIcon(
      "speaker",
      this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/icons/speaker.svg")
    );
    this.matIconRegistry.addSvgIcon(
      "tone",
      this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/icons/tone.svg")
    );
    this.matIconRegistry.addSvgIcon(
      "twitter",
      this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/icons/twitter.svg")
    );
  }
}
