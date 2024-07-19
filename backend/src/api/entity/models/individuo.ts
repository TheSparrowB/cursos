import { BASE } from "./base";

export interface INDIVIDUO extends BASE {

    nid_individuo?: string;
    txt_nombre?: string;
    tip_individuo?: string;
    flg_activo?: number;
    txt_ruta?: string;

}