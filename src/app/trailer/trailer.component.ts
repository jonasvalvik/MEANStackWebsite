import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-trailer',
  template: `

  <div class="parallax1"> </div>

  <section id="trailer">

  <body>
  <h1>Watch the trailer now!</h1>
  </body>

  </section>

  <div class="video-container" >
  <video src="assets/video/Trailer.mp4" controls mute p></video>
  </div>
  `,
  styles: [`

  @import url('https://fonts.googleapis.com/css2?family=Alegreya&display=swap');

  .parallax1 {
    background-image: url("assets/image/level2-1.png");
    min-height: 300px;
    background-attachment: fixed;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
  }

  body {
    font-family: 'Alegreya', serif;
    line-height: 1.5;
  }
  a {
    text-decoration: none;
    color: var(--primary-color);
  }
  
  h1 {
    color: white;
    font-weight: 300;
    font-size: 60px;
    line-height: 1.2;
    margin-bottom: 15px;
  }

  #trailer {
    background-image: url("assets/image/grad4.png");
    background-position: center;
    background-size: cover;
    padding: 40px;
    text-align: center;
  }


.video-container{
}

.video-container video {
  width: 100%;
  height: 100%;
}
  `]
})
export class TrailerComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
