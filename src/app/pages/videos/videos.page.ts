import { Component, OnInit, ViewChildren, QueryList} from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-videos',
  templateUrl: './videos.page.html',
  styleUrls: ['./videos.page.scss'],
})
export class VideosPage implements OnInit {

  currentPlaying:any = null;
  @ViewChildren('player')
  videoPlayer!: QueryList<any>;
  constructor(public dataService: DataService,) { }

  ngOnInit() {
    console.log('running')
  }

  didScroll(event:any){
    console.log(event)
    if(this.currentPlaying && this.isEventInViewport(this.currentPlaying)){
      return
    }else if (this.currentPlaying && !this.isEventInViewport(this.currentPlaying) ){
      this.currentPlaying.pause();
      this.currentPlaying = null
    }

    this.videoPlayer.forEach(player => {
      console.log('player: ', player);

      if(this.currentPlaying){
        return
      }

      const nativeElement = player.nativeElement;
      const inView = this.isEventInViewport(nativeElement);

      if(inView){
        this.currentPlaying = nativeElement;
        this.currentPlaying.muted = true;
        this.currentPlaying.play();
        // return
      }
    })
  }

  isEventInViewport(el:any){
    const rect = el.getBoundingClientRect()
    return(
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.bottom <= (window.innerWidth || document.documentElement.clientWidth)
    )
  }

  public changeVideoAudio(event: any, id: string) {
    // console.log('working  mute' ,id);
    let vid: any = document.getElementById('media-' + id);
    vid.muted = !vid.muted;
    // this.mute = vid.muted
    // this.volumeAnimation = true
    setTimeout(() => {
      // this.volumeAnimation = false
    }, 1200);
  }



}
