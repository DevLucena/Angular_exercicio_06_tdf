import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent {

  nome:string = ''
  sobrenome:string = ''
  cpf:string = ''
  tel:string = ''
  sex:string = ''
  estado:string = ''
  endereco:string = ''
  complemento:string = ''
  usuario:string = ''

  constructor(
    public dialogRef: MatDialogRef<DialogComponent>,
  ) { }

  cancelDialog(): void {
    this.dialogRef.close();
  }

}
