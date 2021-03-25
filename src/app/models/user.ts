import { Profil } from "./profil";

export class User{
  id:number;
  username: string;
  prenom: string;
  nom: string;
  password: string;
  cni: number;
  phone: number;
  address: string;
  profil: Profil;
  avatar: Blob;
}
