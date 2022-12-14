import { Component } from '@angular/core';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'chaar-dham';
  image = ''

  async captureImage() {
    const image = await Camera.getPhoto({
      quality: 90,
      allowEditing: true,
      source: CameraSource.Prompt,
      resultType: CameraResultType.Base64
    })

    if (image) {
      this.image = `data:image/jpeg;base66,${image.base64String}`!;
    }
  }
}
