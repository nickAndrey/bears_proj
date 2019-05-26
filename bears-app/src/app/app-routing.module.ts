import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {AboutUsComponent} from "./about-us/about-us.component";
import {DeliveryComponent} from "./delivery/delivery.component";

const routes: Routes = [
  {path: "about-us", component: AboutUsComponent},
  {path: "delivery", component: DeliveryComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
