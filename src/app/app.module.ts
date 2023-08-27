import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './App-routing.module';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AboutComponent } from './about/about.component';
import { ClientsComponent } from './clients/clients.component';
import { ServicoesComponent } from './servicoes/servicoes.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ContactComponent } from './contact/contact.component';
import { PortfolioDetailsComponent } from './portfolio-details/portfolio-details.component';
import { TeamComponent } from './team/team.component';
import { TestimonialsComponent } from './testimonials/testimonials.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { NgIFNgForComponent } from './ng-if-ng-for/ng-if-ng-for.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { ProdutoVendasComponent } from './produto-vendas/produto-vendas.component';
import { DesktopsComponent } from './desktops/desktops.component';
import { NotebooksComponent } from './notebooks/notebooks.component';
import { SmartphonesComponent } from './smartphones/smartphones.component';
import { LoginComponent } from './login/login.component';
import { AuthService } from './login/auth.service';
import { PerfilComponent } from './perfil/perfil.component';
import { AuthGuard } from './guards/auth.guard';
import { ProdutosService } from './service/produto.service';
import { blogModule } from './blog/blog.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AboutComponent,
    ClientsComponent,
    ServicoesComponent,
    PortfolioComponent,
    ContactComponent,
    PortfolioDetailsComponent,
    TeamComponent,
    TestimonialsComponent,
    FooterComponent,
    HomeComponent,
    NgIFNgForComponent,
    DataBindingComponent,
    ProdutoVendasComponent,
    DesktopsComponent,
    NotebooksComponent,
    SmartphonesComponent,
    LoginComponent,
    PerfilComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    blogModule
  ],
  providers: [AuthService, AuthGuard, ProdutosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
