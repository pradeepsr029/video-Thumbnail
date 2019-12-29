import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class VideothumbnailService {
  scaleFactor:number=0.25;
  
  /**
   * @Author by Rawat 2019
   * Get Video Thumbnail by Canvas
   */


  constructor() { }

  capture(video) {
    let w = video.videoWidth * this.scaleFactor;
    let h = video.videoHeight * this.scaleFactor;
    let canvas = document.createElement('canvas');
    canvas.width = w;
    canvas.height = h;
    let ctx = canvas.getContext('2d');
    ctx.drawImage(video, 0, 0, w, h);
    let dataURI = canvas.toDataURL('image/jpeg');
    // let a = 
    let boj={
      canvas:canvas,
      file:this.dataURLtoFile(dataURI, `${+new Date()}.jpg`),
      base64:dataURI
    }
    return boj;
  }

  dataURLtoFile(dataurl, filename) {
    var arr = dataurl.split(','), mime = arr[0].match(/:(.*?);/)[1],
      bstr = atob(arr[1]), n = bstr.length, u8arr = new Uint8Array(n);
    while (n--) {
      u8arr[n] = bstr.charCodeAt(n);
    }
    return new File([u8arr], filename, { type: mime });
  }
}
