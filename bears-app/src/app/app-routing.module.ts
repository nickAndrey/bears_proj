import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {AboutUsComponent} from "./about-us/about-us.component";
import {DeliveryComponent} from "./delivery/delivery.component";
import {PageNotFoundComponent} from "./page-not-found/page-not-found.component";

const routes: Routes = [
  {
    path: "",
    redirectTo: "/about-us",
    pathMatch: "full"
  }, {
    path: "about-us",
    component: AboutUsComponent
  }, {
    path: "delivery",
    component: DeliveryComponent
  }, {
    path: "**",
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
