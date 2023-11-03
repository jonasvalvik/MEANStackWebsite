import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-team',
  template: `
  <div class="parallax1"> </div>

  <section id="about">
  <body>
  <h1>Small choices. Big consequences.</h1>
  <p>
  Dream House is a game that teaches the importance of making environmentally friendly choices, <br>
  by takingthe player through challenging levels in which they control the level of difficulty based on the choices theymake.
  </p>
  </body>
</section>

<div class="parallax2"> </div>


<section class="section2">
<body>
<h1>Players already love it!</h1>

<p>
Player: "Being able to actually somewhat control how hard it was going to be, was nice."
 </p>

 <br>

    <p>
    IGN: "Amazing transformational game. Super innovative!" &#9733;&#9733;&#9733;&#9733;&#9733;
     </p>

     <br>

     <p>
     Kotaku: "Rewarding once I found out after a couple tries." &#9733;&#9733;&#9733;&#9733;&#9733;
      </p>
      <br>

      <p>
      GameSpot: "Overall, the two parts on their own are pretty cool." &#9733;&#9733;&#9733;&#9733;&#9733;
       </p>
       <br>

    </body>
</section>
  `,
  styles: [`

  @import url('https://fonts.googleapis.com/css2?family=Alegreya&display=swap');

  .parallax1 {
    background-image: url("assets/image/level1.png");
    min-height: 300px;
    background-attachment: fixed;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
  }
  .parallax2 {
    background-image: url("assets/image/level2.png");
    min-height: 300px;
    background-attachment: fixed;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
  }

  :root {
    --primary-color: #3a4052;
  }
  
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
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
    font-size: 60px;
    line-height: 1.2;
    margin-bottom: 15px;
   color: rgb(250, 250, 250);
  }

  #about  {
    background-image: url("assets/image/grad1.png");
    background-position: center;
    background-size: cover;

    padding: 40px;
    text-align: center;
  }
  
  #about p {
    font-size: 1.2rem;
    max-width: 100%;
    margin: auto;
    color: rgb(250, 250, 250);
  }

  .section2  {
    background-image: url("assets/image/grad2.png");
    background-position: center;
    background-size: cover;


    padding: 40px;
    text-align: center;
  }
  
  .section2 p {
    color: rgb(250, 250, 250);
    font-size: 1.2rem;
    max-width: 100%;
    margin: auto;
  }

  

`]
})
export class TeamComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
