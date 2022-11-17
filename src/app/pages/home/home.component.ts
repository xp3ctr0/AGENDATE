import { Component } from '@angular/core';
import Swal, { SweetAlertIcon } from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  constructor(private router:Router) {}


  val:boolean = false;
  modalidad!: string;
  anun:boolean = false;
  ready:boolean = false;

  x(){
    if(this.val == false){
      this.val = true;
    }
    else{
      this.val = false;
    }
  }

  r(){

  }

  setData(data: any){
    this.modalidad = data;
  }

  sendNotification(type:SweetAlertIcon,msj:string){
    const Toast = Swal.mixin({
      toast: true,
      position: 'top-end',
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.addEventListener('mouseenter', Swal.stopTimer)
        toast.addEventListener('mouseleave', Swal.resumeTimer)
      }
    })

    Toast.fire({
      icon: type,
      title: msj
    });
    this.anun = true;
    this.val = true;
  };

  setAnun(){
    this.ready = true;
  }

  goMedios(){
    this.router.navigate(['/medios']);
  }

  goHome() {
    this.router.navigate(['/home']);
  }
}

