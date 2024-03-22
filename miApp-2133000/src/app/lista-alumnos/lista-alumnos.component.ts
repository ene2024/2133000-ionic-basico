import { Component, OnInit } from '@angular/core';
import { ActionSheetController } from '@ionic/angular';

@Component({
  selector: 'app-lista-alumnos',
  templateUrl: './lista-alumnos.component.html',
  styleUrls: ['./lista-alumnos.component.scss'],
})

export class ListaAlumnosComponent  implements OnInit {

  constructor(public actionSheetController: ActionSheetController) { }

  ngOnInit() {}

  alumnos: any = ["Carlos", "Ximena", "Alberto", "Eduardo", "Baraba", "Georgina", "Kevin"];


async mostraractionsheet(index:number){
    const actionSheet = await this.actionSheetController.create({
      header: 'Confirmar Eliminacion',
      
      buttons: [
        {
          text: 'Eliminar',
          handler: () => {
            this.eliminaralumno(index);
          }
        },
        {
          text: 'Cancelar',
          role: 'cancel',
          handler: () => {
            console.log('Cancelado');
          }
        }
      ]
    });

    await actionSheet.present();
    
  }

  
  eliminaralumno(index: number) {
    this.alumnos.splice(index, 1);
  }

}


