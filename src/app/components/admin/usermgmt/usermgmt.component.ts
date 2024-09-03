import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-usermgmt',
  standalone: true,
  imports: [],
  templateUrl: './usermgmt.component.html',
  styleUrl: './usermgmt.component.scss'
})
export class UsermgmtComponent {

  constructor(private toastr: ToastrService){

  }

  clcckme (){
    this.toastr.success("toast woking")
  }
}
