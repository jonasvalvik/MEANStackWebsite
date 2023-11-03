import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-social-media',
  template: `

	<div class="socialmedia">

  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.12.0-2/css/all.min.css" integrity="sha256-46r060N2LrChLLb5zowXQ72/iKKNiw/lAmygmHExk/o=" crossorigin="anonymous" />
  <h1>Follow Us On Social Media</h1>

  <div class="icons">
  <a href="https://www.facebook.com/Dream-House-100255135063239/" target="_blank"><i class="fab fa-twitter fa-3x"></i></a>
  <a href="https://www.facebook.com/Dream-House-100255135063239/" target="_blank"><i class="fab fa-facebook fa-3x"></i></a>
  </div>

  </div>
  `,
  styles: [`

  @import url('https://fonts.googleapis.com/css2?family=Alegreya&display=swap');

  .socialmedia{
      text-align: center;
      margin-bottom: 1rem;
  }

   h1 {
    font-family: 'Alegreya', serif;
    margin: 30px ;
    color: var(--primary-color);
  }

.icons a {
  margin:  2rem;
}

`]
})
export class SocialMediaComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
