import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { VVK2020 } from 'src/app/data/data';
import { Video } from 'src/app/interfaces/class';
import { VideoDialogComponent } from 'src/app/video-dialog/video-dialog.component';


const WINNINGVIDEOS: Video[] = [
   {
    name: "Bedste Video - Qillaq Nielsen",
    date: new Date("2021-04-01"),
    desc: `Qillaq er et tech powerhouse fra Grønland boende i Silkeborg. Han har kørt BMX siden 2010 og flyttede til Danmark i 2014. Holdene der har stemt på Qillaq har bl.a. skrevet: "Sindsyge tricks, meget højere niveau end alle os andre" og "Et fuldstændigt overdådigt talent på cyklen og laver tricks gang på gang, der fik os til at tabe kæben."`,
    videoUrl: "https://www.youtube-nocookie.com/embed/CnjXl5r3y28",
    tags: ["silkeborg"],
    riders: ["Qillaq Nielsen"]
  },
  {
    name: "Bedste Old Boy - Stefan Nielsen ",
    riders: ["Stefan Nielsen"],
    tags: ["aalborg"],
    date: new Date("2021-04-01"),
    desc: ` Stefan fra Øster Hornum, har han masser af moderne tricks i ærmet, selvom han deltager i Old Boy kategorien. Holdene der har stemt på Stefan har bl.a. skrevet: "God stil! fedt at han både grinder og hopper store dirtjumps" og "Selvom han er på den anden side af 35 somre, så kan han stadig både flyve, men ikke mindst også lave tricks som en 18 årig!"`,
    videoUrl: "https://www.youtube-nocookie.com/embed/srZEshLSwfc"
},
{
  name: "Bedste Young Gun - Emil Rasmussen ",
  riders: ["Lasse Kristensen", "Emil Rasmussen"],
  tags: ["Aalestrup"],
  date: new Date("2021-03-27"),
  desc: `Efter en ekstra stemmerundte imod Conrad Mattsson endte Emil med at tage sejren. Emil har sammen med han kammerat Lasse, filmet adskillige store bangers, både fra Tjele efterskole og fra DIY-parken i Aalestrup Her er lidt gode ord fra nogle af de hold der stemte på Emil: "Kæmpe tricks og god stil!" og "Emil er jo et kæmpe talent"`,
  videoUrl: "https://www.youtube-nocookie.com/embed/4JFwSAtsPzM"
},
{
  name: "Bedste Filmer/Klipper - Holmen Dirt Boys ",
  riders: ["Asger Duus", "Lukas Keysell", "Andreas Houmann"],
  tags: ["holmen", "københavn"],
  date: new Date("2021-03-29"),
  desc: `Efter en ekstra stemmerundte imod 8K BMX fra Aarhus, endte københavner-drengene fra Holmen Dirt Boys med at tage sejren. Super video i høj kvalitet, som både viste store tricks, men også viser den gode vibe som der er på Holmen. Her er lidt gode ord fra nogle af holdene der stemte på Holmen Dirt Boys: "Utrolig gennemført video" og "Musikken, vinklerne og klippearbejdet fortjener sejren" Især tillykke til Asger Duus, for at have samlet holdet og for at have redigeret denne fede video.`,
  videoUrl: "https://www.youtube-nocookie.com/embed/juaZ850SRQQ"
},

]



@Component({
  selector: 'app-video2020',
  templateUrl: './video2020.component.html',
  styleUrls: ['./video2020.component.scss']
})
export class Video2020Component implements OnInit {

  constructor(public dialog: MatDialog,) { }

  videos: Video[] = VVK2020;
  winningVideos: Video[] = WINNINGVIDEOS;

  ngOnInit(): void {
  }




  chooseDialogHeight(): string {
    const maxHeight = 800
    if (window.innerHeight - 20 > maxHeight) return "800px"
    else return window.innerHeight - 20 + "px"
  }

  chooseDialogWidth(): string {
    return window.innerWidth + 100 + 'px'

  }

  openVideoDialog(video: Video) {
    const dialogRef = this.dialog.open(VideoDialogComponent, {
      panelClass: 'app-full-bleed-dialog',
      width: this.chooseDialogWidth(),
      maxHeight: this.chooseDialogHeight(),
      autoFocus: false,
      data: video

    });
  }


}
