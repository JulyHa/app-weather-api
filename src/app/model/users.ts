import { City } from "./city"
import { Gender } from "./gender"

export class Users {
    id: number
    username: string
    password: string 
    gender: Gender
    phoneNumber: string
    defaultAddress: City
    local : City[];

}
