import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  //atributos
  mensagens_sucesso = [];
  mensagens_erro = [];

  //declarando o atributo para utilizar HttpClient
  constructor(private httpCliente:HttpClient) { }

  ngOnInit(): void {
  }

  autenticarUsuario(formLogin) : void {

    //limpar as mensagens exibidas na página
    this.mensagens_sucesso = [];
    this.mensagens_erro = [];

    //realizando a chamada para a API..
    this.httpCliente.post(environment.apiUrl + "/login", formLogin.form.value)
      .subscribe(
        (data:any) => {
          this.mensagens_sucesso = data;
          formLogin.form.reset(); //limpar os campos do formulário
        },
        (e) => {
          this.mensagens_erro = e.error;
        }
      );
  }

}
