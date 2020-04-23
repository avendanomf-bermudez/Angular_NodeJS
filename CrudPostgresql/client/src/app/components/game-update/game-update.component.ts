import { Component, OnInit, HostBinding } from '@angular/core';
import { Game } from '../../models/game';
import { GameService } from '../../services/game.service';
import { Router, ActivatedRoute } from '@angular/router';
import { ModelGame } from '../../models/modelGame';

@Component({
  selector: 'app-game-update',
  templateUrl: './game-update.component.html',
  styleUrls: ['./game-update.component.css']
})
export class GameUpdateComponent implements OnInit {
  @HostBinding('class') classes = 'row';

  game: ModelGame = new ModelGame();
  
  constructor(private gameService: GameService, private router: Router, private activatedRoute: ActivatedRoute) {  }
  ngOnInit() {
    // this.game = new Game();
    const param: any = this.activatedRoute.snapshot.params;
    console.log('ID: ', param.id); // acá imprime bien el id que trae
    console.log(param);
    if ( param.id ) {
      this.gameService.getGameById(param.id).subscribe(
        res => {
          console.log(res); // acá imprime bien el resultado
          this.game = res; // acá no hay problemas con la asignacion
          console.log(this.game); // acá imprime bien los datos asignados.
        },
        err => {
          console.log( err);
        }
      );
    }
  }

  // UpdateGame(updateGame: Game) {
  //   this.gameService.updateGame(updateGame).subscribe(
  //     res => {
  //       console.log(res);
  //       this.game = res;
  //     },
  //     err => console.log(err)
  //   );
  // }

}
