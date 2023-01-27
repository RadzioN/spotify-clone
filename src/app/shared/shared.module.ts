import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { DemoMaterialModule } from './modules';
import { FsMusicPlayerComponent } from './components/fs-music-player/fs-music-player.component';
import { FsMusicPlayerMobileComponent } from './components/fs-music-player-mobile/fs-music-player-mobile.component';

@NgModule({
    imports: [
        FormsModule,
        ReactiveFormsModule,
        RouterModule,
        DemoMaterialModule
    ],
    declarations: [
    ],
    exports: [
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
        RouterModule,
        DemoMaterialModule
    ]
})
export class SharedModule { }
