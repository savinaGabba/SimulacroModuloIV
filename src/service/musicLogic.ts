// src/services/musicLogic.ts

import { Playlist } from "../models/Playlist";
import { Song, Genre } from "../models/Song";

//Array para almacenar las Plalist
// Se utiliza la clase PLaylist como tipo para la variable playlist
const playlists: Playlist[] = [];

//funcion para crear una nueva playlist

//1.se declara  la F. q devuelve un valor del tipo 'Playlist'
export function createPlaylist(name: string): Playlist {
    //2.Se crea una nueva instancia de la clase Playlist y se almacena en la constante playlist.
    const playlist = new Playlist(name);
    //3.llama al constructor de la clase Playlist, usando 'name' como el nombre de la lista de
    //reproducción. Esto significa que, al crear la instancia, se inicializa con el nombre que
    //se pasó a la función createPlaylist.
    playlists.push(playlist);
    //4.se agrega al array y se devuelve la instancia Playlist
    return playlist;
};

// Añadir una canción a una playlist específica

//1.dos parametros, string y de tipo 'Song'(instancia de la clase 'Song' que se quiere agregar a playlists)
export function addSongToPlaylist(playlistName: string, song: Song): void {
    //2.busca en el array una lista de reproducción cuyo nombre coincida con playlistName
    const playlist = playlists.find(p => p.name === playlistName);
    //3. Si playlist tiene un valor(proporcinado por .find() ejecuta el if
    if (playlist) {
        //4.Llama al método addSong(), pasando la instancia de song como parámetro.
        playlist.addSong(song);//se agrega a la playlist
    } else {//5.si playlist tiene valor 'undefined'(que seria lo q devuelve en .find())
            // si no encuentra el .name solicitado
        console.log("Playlist no encontrada.");
    }
};

//Eliminar una cancion de una playlist

//igual a la anterior con la diferencia en que llama al metodo de la clase Playlist .removeSong
export function removeSongFromPlaylist(playlistName: string, songTitle: string): void {
    const playlist = playlists.find(p => p.name === playlistName);
    if (playlist) {
        playlist.removeSong(songTitle);
    } else {
        console.log("Playlist no encontrada.");
    }
};

// Listar todas las playlists creadas

//1. se define una función llamada listPlaylists que no recibe parámetros y devuelve un array
//de strings (string[]).
export function listPlaylists(): string[] {
    //2.se utiliza .map para iterar y con la f.flecha devuelve la propiedad 'name'
    return playlists.map(playlist => playlist.name);
    //3.map crea un nuevo array con los resultados, que en este caso será una lista de nombres
    //de las playlists.
};

//Obtener detalles de una playlist específica

//1.La función tiene un tipo de retorno string[] | undefined, lo que significa que devolverá un
//array de strings (detalles de canciones) o undefined si no encuentra la lista.
export function getPlaylistDetails(playlistName: string): string[] | undefined {
    //2.playlists.find(...) busca una lista de reproducción cuyo nombre coincida con playlistName.
    const playlist = playlists.find(p => p.name === playlistName);
    //3.F.flecha que verifica si el name de cada elemento (p) en el array es igual a playlistName
    //4.Si playlist tiene un valor, ejecuta playlist.getPlaylistDetails(), metodo de 'Playlists' q da info de la clase
    return playlist ? playlist.getPlaylistDetails() : undefined;
};

// Simulación de reproducción de una canción
export async function playSong(song: Song): Promise<void> {
    console.log(`Reproduciendo: ${song.title} por ${song.artist}...`);
    
    // Usamos un temporizador para simular la duración de la canción
    await new Promise(resolve => setTimeout(resolve, song.durationSeg * 1000));

    console.log(`Canción finalizada: ${song.title}`);
}