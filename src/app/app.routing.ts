import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { catalogueComponent } from './components/catalogueComponent/catalogueComponent.component';
import { NuevoCursoComponent } from './components/nuevo-curso/nuevo-curso.component';

const appRoutes: Routes= [
    {path: '', component: catalogueComponent},
    {path: 'nuevo-curso', component: NuevoCursoComponent}
];

export const appRoutingProviders: any[] = [];
//export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
export const routing: ModuleWithProviders<any> = RouterModule.forRoot(appRoutes);