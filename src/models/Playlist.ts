//src/models/Playlist.ts

//se importa la clase 'Song' para utilizarla como tipo/parametro
import { Song } from "./Song";

export class Playlist {
    name: string;
    songs: Song[] = [];
    //songs: es un array de objetos del tipo 'Song' que inicialmente está vacío ([]).
    
    constructor(name: string) {
        this.name = name;
    }

    addSong(song: Song): void {
        this.songs.push(song);
        console.log(`Added ok.`);
    }

    //Este método permite eliminar una canción de la lista usando su título (songTitle).
    removeSong(songTitle: string): void {
        this.songs = this.songs.filter(song =>song.title !== songTitle);
        console.log('Deleted');
    }

    // Mostrar todos los detalles de las canciones en la playlist

    getPlaylistDetails(): string[] {//el metodo devuelve un array de strings
        //.map itera y la F.flecha llama al metodo .getDetails de 'Song'
        return this.songs.map(song => song.getDetails());
        //que devuelve un string con detalles de la cancion
    }
}


