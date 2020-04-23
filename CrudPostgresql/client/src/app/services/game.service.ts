import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Game } from '../models/game';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class GameService {
  API_URI = 'http://localhost:3000/api';
  constructor(private http: HttpClient) { }
  getGames() {
    return this.http.get(`${this.API_URI}/games`);
  }
  getGameById(id: string): Observable<Game>  {
    return this.http.get(`${this.API_URI}/games/${id}`);
  }
  saveGame(game: Game) {
    return this.http.post(`${this.API_URI}/games`, game);
  }
  updateGame(game: Game): Observable<Game> {
    return this.http.put(`${this.API_URI}/games/${game.id}`, game);
  }
  deleteGame(id: string) {
    return this.http.delete(`${this.API_URI}/games/${id}`);
  }
}
