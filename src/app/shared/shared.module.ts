import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { DemoMaterialModule } from './modules';
import { MusicPlayerComponent, MusicPlayerMobileComponent, NavigationComponent, SideNavigationComponent } from './components';

@NgModule({
    imports: [
        FormsModule,
        ReactiveFormsModule,
        RouterModule,
        DemoMaterialModule
    ],
    declarations: [
        NavigationComponent,
        SideNavigationComponent,
        MusicPlayerComponent,
        MusicPlayerMobileComponent,
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
