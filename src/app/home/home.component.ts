import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `

	<section id="showcase">

			<div class="video-container">

        <video src="assets/video/preview.mp4" autoplay loop></video>

      </div>
      <div class="content">
        <body>
        <h2>Kaiba Corp. Presents</h2>
        <h1>Dream House</h1>
        <p>An innovative transformational game</p>
       

        <a href="#about" class="btn">Read More</a>
        <div class="divider"> </div>
        <a href="/signup" class="btn">Sign Up</a>
        <div class="divider"> </div>
        <a href="#trailer" class="btn">Watch trailer</a>
        </body>
			</div>
    </section>

    <app-team></app-team>

    <app-trailer></app-trailer>

    <app-footer></app-footer>
  `,
  styles: [`

  @import url('https://fonts.googleapis.com/css2?family=Alegreya&display=swap');

  :root {
    --primary-color: #3a4052;
  }

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  .divider{
    width:10px;
    height:auto;
    display:inline-block;
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
    font-weight: 300;
    font-size: 80px;
    line-height: 1.2;
    margin-bottom: 15px;
  }

  h2 {
    font-size: 30px;
  }

  p {
    font-size: 20px;
  }

  #showcase {
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    color: #fff;
    padding: 0 20px;
  }

  .video-container {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 106%;
    overflow: hidden;
      center/cover;
  }

  .video-container video {
    min-width: 100%;
    min-height: 100%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    object-fit: cover;
  }

  .video-container:after {
    content: '';
    z-index: 1;
    height: 100%;
    width: 100%;
    top: 0;
    left: 0;
    background: rgba(0, 0, 0, 0.5);
    position: absolute;
  }

  .content {
    z-index: 2;
  }

  .btn {
    display: inline-block;
    padding: 10px 30px;
    background: var(--primary-color);
    color: #fff;
    border-radius: 5px;
    border: solid #fff 1px;
    margin-top: 25px;
    opacity: 0.7;
  }

  .btn:hover {
    transform: scale(0.98);
    background:rgb(157, 50, 228);
  }




`]
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
