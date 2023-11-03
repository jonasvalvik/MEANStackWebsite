import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-game',
  template: `
  <section id="game">
  <h1>About Dreamhouse</h1>
  <p>
    This is a landing page with a full screen video background. Feel free to
    use this landing page in your projects. keep adding sections, change the
    video, content , etc
  </p>

  <a href="#trailer" class="btn">Watch trailer</a>

</section>
  `,
  styles: [`

    :root {
      --primary-color: #3a4052;
    }
    
    * {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
    }
    
    body {
      font-family: 'Open Sans', sans-serif;
      line-height: 1.5;
    }
    
    a {
      text-decoration: none;
      color: var(--primary-color);
    }
    
    h1 {
      font-weight: 300;
      font-size: 60px;
      line-height: 1.2;
      margin-bottom: 15px;
    }

    #game {
      padding: 40px;
      text-align: center;
    }
    
    #game p {
      font-size: 1.2rem;
      max-width: 600px;
      margin: auto;
    }



    .btn {
      display: inline-block;
      padding: 10px 30px;
      background-color: #4CAF50;
      color: #fff;
      border-radius: 5px;
      margin-top: 25px;
      opacity: 1;
    }
    
    .btn:hover {
      transform: scale(0.98);
    }
    
    `]
})
export class GameComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
