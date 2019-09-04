import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { ProduitsComponent } from './produits/produits.component';
import { PanierComponent } from './panier/panier.component';
import { AproposComponent } from './apropos/apropos.component';


const routes: Routes = [
  {path:"", component: HomeComponent, pathMatch:'full'},
  {path:"produits", component: ProduitsComponent},
  {path:"panier", component: PanierComponent},
  {path:"contact", component: ContactComponent},
  {path:"apropos", component: AproposComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
