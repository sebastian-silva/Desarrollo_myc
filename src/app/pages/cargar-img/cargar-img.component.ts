import { HttpClient, HttpEventType } from '@angular/common/http';
import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './cargar-img.component.html',
  styleUrls: ['./cargar-img.component.css'],
})

export class CargarImgComponent {
  constructor(private httpClient: HttpClient) { }
  selectedFile: File;
  retrievedImage: any;
  base64Data: any;
  retrieveResonse: any;
  message: string;
  imageName: any;
  imageShow: any;
  public imagePath;
  //Gets called when the user selects an image

  onFileChanged(event) {
    //Select File
    if(event.target.files.length==0)
    return;
    var mineType=event.target.files[0].type;
    if(mineType.match(/image\/*/)==null){
      this.message="Solo se admiten imagenes";
      return;
    }
    this.selectedFile = event.target.files[0];
    var reader= new FileReader();
    this.imagePath = event.target.files;
    reader.readAsDataURL(event.target.files[0]);
    reader.onload=(_e)=>{
      this.imageShow=reader.result;
      console.log(reader.result)
    }
  }
  //Gets called when the user clicks on submit to upload the image
  onUpload() {
    console.log(this.selectedFile);
    
    //FormData API provides methods and properties to allow us easily prepare form data to be sent with POST HTTP requests.
    const uploadImageData = new FormData();
    uploadImageData.append('imageFile', this.selectedFile, this.selectedFile.name);
  
    //Make a call to the Spring Boot Application to save the image
    this.httpClient.post('http://localhost:8080/image/upload', uploadImageData, { observe: 'response' })
      .subscribe((response) => {
        if (response.status === 200) {
          this.message = 'Image uploaded successfully';
        } else {
          this.message = 'Image not uploaded successfully';
        }
      }
      );
  }
    //Gets called when the user clicks on retieve image button to get the image from back end
    
    getImage() {
    //Make a call to Sprinf Boot to get the Image Bytes.
    this.httpClient.get('http://localhost:8080/image/get/' + this.imageName)
      .subscribe(
        res => {
          this.retrieveResonse = res;
          this.base64Data = this.retrieveResonse.picByte;
          this.retrievedImage = 'data:image/jpeg;base64,' + this.base64Data;
        }
      );
  }
}
