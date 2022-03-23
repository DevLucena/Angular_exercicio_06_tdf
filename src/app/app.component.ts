import { Component } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { DialogComponent } from './dialog/dialog.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  constructor(
    public dialog: MatDialog,
  ){}

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogComponent, {
      width: '250px',
     
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
 
  nome: string = ''
  sobrenome:string = ''
  cpf: string = ''
  tel: string = ''
  sex: string = ''
  estado: string = ''
  endereco: string = ''
  complemento: string = ''
  email: string = ''
  usuario: string = ''
  senha: string = ''
  validaSenha: string = ''

  submit():void {
    console.log(`Nome = ${this.nome}`)
    console.log(`Sobrenome = ${this.sobrenome}`)
    console.log(`CPF = ${this.cpf}`)
    console.log(`Telefone = ${this.tel}`)
    console.log(`Sexo = ${this.sex}`)
    console.log(`Estado = ${this.estado}`)
    console.log(`Endereço = ${this.endereco}`)
    console.log(`Complemento = ${this.complemento}`)
    console.log(`E-mail = ${this.email}`)
    console.log(`Usuario = ${this.usuario}`)
    console.log(`Senha = ${this.senha}`)
    console.log(`ValidaSenha = ${this.validaSenha}`)

    let ref = this.dialog.open(DialogComponent)

    ref.componentInstance.nome = this.nome
    ref.componentInstance.sobrenome = this.sobrenome
    ref.componentInstance.cpf = this.cpf
    ref.componentInstance.tel = this.tel
    ref.componentInstance.sex = this.sex
    ref.componentInstance.estado = this.estado
    ref.componentInstance.endereco = this.endereco
    ref.componentInstance.complemento = this.complemento
    ref.componentInstance.usuario = this.usuario
  }

  validadorDeSenha():void {
  
    if(this.senha === this.validaSenha){
    console.log("As senhas conferem, cadastro efetuado")
    }else{
    alert('Cadastro inválido. Tente novamente. (Senhas não coincidem)')
    }
    
    }


}
