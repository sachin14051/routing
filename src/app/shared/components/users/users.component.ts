import { Component, OnInit } from '@angular/core';
import { Iuser } from '../../model/users.model';
import { UserService } from '../../service/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  usersArray : Array<Iuser>=[]
  constructor(private _usersService: UserService) { }

  ngOnInit(): void {


    this.usersArray = this._usersService.getAllUser()
  }

}
