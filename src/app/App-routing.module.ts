import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ClientsComponent } from './clients/clients.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { PortfolioDetailsComponent } from './portfolio-details/portfolio-details.component';
import { ServicoesComponent } from './servicoes/servicoes.component';
import { TeamComponent } from './team/team.component';
import { TestimonialsComponent } from './testimonials/testimonials.component';
import { ContactComponent } from './contact/contact.component';
import { NgIFNgForComponent } from './ng-if-ng-for/ng-if-ng-for.component';
import { ProdutoVendasComponent } from './produto-vendas/produto-vendas.component';
import { DesktopsComponent } from './desktops/desktops.component';
import { NotebooksComponent } from './notebooks/notebooks.component';
import { SmartphonesComponent } from './smartphones/smartphones.component';
import { LoginComponent } from './login/login.component';
import { PerfilComponent } from './perfil/perfil.component';

import { AuthGuard } from './guards/auth.guard';
import { BlogComponent } from './blog/blog.component';


const routes: Routes = [
  { path: '', component: HomeComponent },

  { path: 'blog', component: BlogComponent },

  { path: 'home', component: HomeComponent },

  { path: 'about', component: AboutComponent },

  { path: 'clients', component: ClientsComponent },

  { path: 'portfolio', component: PortfolioComponent },

  { path: 'portfolio-details', component: PortfolioDetailsComponent },

  { path: 'servicos', component: ServicoesComponent },

  { path: 'produtoVendas', component: ProdutoVendasComponent },

  { path: 'desktops', component: DesktopsComponent },

  { path: 'notebooks', component: NotebooksComponent },

  { path: 'smartphones', component: SmartphonesComponent },

  { path: 'team', component: TeamComponent },

  { path: 'contact', component: ContactComponent },

  { path: 'testimonials', component: TestimonialsComponent },

  { path: 'teste', component: NgIFNgForComponent },

  {path: 'login', component:LoginComponent},

  {path: 'perfil', component: PerfilComponent, canActivate: [AuthGuard]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
