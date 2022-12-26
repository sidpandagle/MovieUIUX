import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'movie-showcase';
  bkwallpapers: Background[];
  currentBackgroundIndex: number;
  constructor() {
    this.currentBackgroundIndex=3;
    this.bkwallpapers = [{
      imgUrl: '../assets/movie-pics/captainamerica.jpg',
      selected: false
    }, {
      imgUrl: '../assets/movie-pics/inception.jpg',
      selected: false
    }, {
      imgUrl: '../assets/movie-pics/kingkong.jpg',
      selected: false
    }, {
      imgUrl: '../assets/movie-pics/lalaland.jpg',
      selected: true
    }, {
      imgUrl: '../assets/movie-pics/starwars.jpg',
      selected: false
    },
    {
      imgUrl: '../assets/movie-pics/tron.jpg',
      selected: false
    }, {
      imgUrl: '../assets/movie-pics/wonderwoman.jpg',
      selected: false
    }
    ]
  }

  changeBackground(index: number) {
    this.currentBackgroundIndex = index;
    this.bkwallpapers.forEach(res => {
      res.selected = false;
    })
    this.bkwallpapers[this.currentBackgroundIndex].selected = true;
  }

  nextBackground() {
    if(this.currentBackgroundIndex==this.bkwallpapers.length-1){
      this.currentBackgroundIndex = 0
    }else{
      this.currentBackgroundIndex++;
    }
    this.bkwallpapers.forEach(res => {
      res.selected = false;
    })
    this.bkwallpapers[this.currentBackgroundIndex].selected = true;
  }
  prevBackground() {
    if(this.currentBackgroundIndex==0){
      this.currentBackgroundIndex = this.bkwallpapers.length-1
    }else{
      this.currentBackgroundIndex--;
    }
    this.bkwallpapers.forEach(res => {
      res.selected = false;
    })
    this.bkwallpapers[this.currentBackgroundIndex].selected = true;
  }

  selectedBackground() {
    return this.bkwallpapers.filter(res => res.selected)[0].imgUrl;
  }

}

export class Background {
  imgUrl: string = '';
  selected: boolean = false;
}
