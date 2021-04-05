import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  //atributos
  mensagens_sucesso = [];
  mensagens_erro = [];

  constructor(private httpClient:HttpClient) { }

  ngOnInit(): void {
  }

  cadastrarUsuario(formRegister) : void {
    
    //limpando as mensagens..
    this.mensagens_sucesso = [];
    this.mensagens_erro = [];

    this.httpClient.post(environment.apiUrl + "/usuarios", formRegister.form.value)
      .subscribe(
        (data:any) => {
          this.mensagens_sucesso = data;
          formRegister.form.reset(); //limpar os campos do formulário..
        },
        (e) => {
          this.mensagens_erro = e.error;
        }
      );

  }

}
