import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
//biblioteca para acesso aos métodos da API (HttpClientModule)
import { HttpClientModule } from '@angular/common/http';
//biblioteca para desenvolvimento de formulários
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
//bibliotea para mapeamento das rotas
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { CadastroTarefasComponent } from './cadastro-tarefas/cadastro-tarefas.component';
import { ConsultaTarefasComponent } from './consulta-tarefas/consulta-tarefas.component';

//configurando as rotas que irão acessar cada componente do projeto..
const routes:Routes = [
  { path : 'login', component : LoginComponent },
  { path : 'register', component : RegisterComponent },
  { path : 'cadastro-tarefas', component : CadastroTarefasComponent },
  { path : 'consulta-tarefas', component : ConsultaTarefasComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    CadastroTarefasComponent,
    ConsultaTarefasComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
