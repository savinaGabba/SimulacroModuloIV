//scr/models/Song.ts

//Enum para los generos de las canciones
export enum Genre {
    pop = 'Pop',
    rock = 'Rock',
    jazz = 'Jazz',
    electronic = 'Electronic',
    funk = 'Funk',
    indie = 'Indie'
}

//Clase Song
export class Song {
    title: string;
    artist: string;
    durationSeg: number;
    genre: Genre;

    constructor(title: string, artist: string, durationSeg: number, genre: Genre) {
        this.title = title;
        this.artist = artist;
        this.durationSeg = durationSeg;
        this.genre = genre;
    }

    //metodo para mostrar detalles de la cancion
    getDetails(): string {
        return `${this.title} by ${this.artist} - ${this.durationSeg} sec [${this.genre}]`;
    } 
};



