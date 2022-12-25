import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'movie-showcase';
  bkwallpapers: Background[];
  constructor() {
    this.bkwallpapers = [
      {
        imgUrl: '../assets/movie-pics/lalaland.jpg',
        selected: true
      },
      {
        imgUrl: '../assets/movie-pics/wonderwoman.jpg',
        selected: false
      }
    ]
  }

  changeBackground(index:number){
    this.bkwallpapers.forEach(res=>{
      res.selected=false;
    })
    this.bkwallpapers[index].selected=true;
  }

  selectedBackground(){
    return this.bkwallpapers.filter(res=>res.selected)[0].imgUrl;
  }


}

export class Background {
  imgUrl: string = '';
  selected: boolean = false;
}
