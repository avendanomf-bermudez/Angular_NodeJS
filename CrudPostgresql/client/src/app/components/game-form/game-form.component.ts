import { Component, OnInit, HostBinding } from '@angular/core';
import { Game } from '../../models/game';
import { GameService } from '../../services/game.service';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-game-form',
  templateUrl: './game-form.component.html',
  styleUrls: ['./game-form.component.css']
})
export class GameFormComponent implements OnInit {
  @HostBinding('class') classes = 'row';
  editar = false;
  game: Game = {
    id: 0,
    title: '',
    description: '',
    image: '',
    create_at: new Date()
  };

  constructor(private gameService: GameService, private router: Router, private activatedRoute: ActivatedRoute) { }
  SaveGame() {
    delete this.game.create_at;
    delete this.game.id;
    const resultado = this.gameService.saveGame(this.game).subscribe(
      res => {
        console.log(res);
        this.router.navigate(['/games']);
      },
      err => {
        console.log(err);
        this.router.navigate(['/games']);
      }
    );
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
   ngOnInit() {
    // const param: any = this.activatedRoute.snapshot.params;
    // console.log(param);
    // if ( param.id ) {
    //   const obj =  this.gameService.getGameById(param.id).subscribe(
    //     res => {
    //       console.log(res);
    //       console.log(this.game);
    //       this.game = res;
    //       console.log(this.game);
    //       this.editar = true;
    //     },
    //     err => console.log( err)
    //   );
    // }
  }

}
