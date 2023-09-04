import { Injectable } from "@angular/core";
import { Iuser } from "../model/users.model";


@Injectable({
   providedIn:"root"
})
export class UserService {
 public  users  : Array <Iuser>=[{
    userName:"jhon",
    userId :1
  },
  {
    userName:"may",
    userId :2
  },
  {
    userName:"dow",
    userId :3
  },
]




getAllUser(){
    return this.users
}

}