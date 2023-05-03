export interface Seleccion {
    name:string;
    contry_name:string;
    Alternative_names:string[];
    colors:string[];
    won_titles:string[];
    capitain_name:string;
    coach_name:string;
    logo:string;
    abbreviation:string;
    top_scorer:top;
    estadio:Estadio;
    players:Player[];
}
export interface top {
    nombre:string;
    goles:number;
}
export interface Estadio{
    name:string;
    nickname:string;
    location:string;
    capacity:number;
}
export interface Player{
    name:string;
    lastname:string;
    age:string;
    height:string;
    place_of_birth:string;
    position:string;
    current_club:string;
    shirt_number:number;
}