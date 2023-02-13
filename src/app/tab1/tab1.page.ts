import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['style.css']
})
export class Tab1Page {

  constructor(private alertController: AlertController) {}

  async presentAlert(){
    const alert = await this.alertController.create({
      header: 'Alerta',
      subHeader: 'Recordatorio',
      message: 'Recuerda Comprar Pan',
      buttons: ['OK', 'CANCEL', 'ERROR']
    });

    await alert.present()
  }

}
