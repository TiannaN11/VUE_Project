<script setup>
import PrimaryTemplate from "./Template/PrimaryTemplate.vue";
</script>

<template>
  <primary-template>

    <h2>Browse</h2>

    <div class="form">
      <form>
        <label for="search"></label>
        <input type="text" id="search" name="search" placeholder="Books, Genres, and More">
        <input type="submit" class="search" value="Search">
      </form>
    </div>

    <div class="suggestions">

      <div class="suggestion one">
        <h1>Hot & Trending</h1>
      </div>

      <div class="suggestion two">
        <h1>Critics Pics</h1>
      </div>

      <div class="suggestion three">
        <h1>Best Romance</h1>
      </div>

      <div class="suggestion four">
        <h1>Choice Awards</h1>
      </div>

      <div class="suggestion five">
        <h1>ROM COM</h1>
      </div>

      <div class="svgs">

        <div class="first">
          <svg width="95" height="95" viewBox="0 0 143 136" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M121.215 0H21.7854C9.75364 0 0 9.81804 0 21.9292V114.071C0 126.182 9.75364 136 21.7854 136H121.215C133.246 136 143 126.182 143 114.071V21.9292C143 9.81804 133.246 0 121.215 0Z"
                fill="#313283"/>
            <path
                d="M95.2728 35.1361C81.3478 39.9113 72 52.9697 72 67.635C72 52.9584 62.6522 39.9113 48.7272 35.1361L25 27V67.3634C25 84.371 35.6199 99.5795 51.6348 105.486L72 113L92.3652 105.486C108.369 99.5795 119 84.371 119 67.3634V27L95.2728 35.1361ZM98.1464 81.0781C98.1464 90.6626 92.1607 99.2286 83.1423 102.555L71.6706 106.788L60.1989 102.555C51.1805 99.2286 45.1948 90.6626 45.1948 81.0781V58.3447L58.5633 62.9276C66.4118 65.6208 71.6706 72.976 71.6706 81.2366C71.6706 72.9647 76.9408 65.6095 84.7779 62.9276L98.1464 58.3447V81.0781Z"
                fill="white"/>
          </svg>
        </div>

        <div class="second">
          <svg width="95" height="95" viewBox="0 0 144 135" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M122.062 0H21.9377C9.82186 0 0 9.74585 0 21.768V113.232C0 125.254 9.82186 135 21.9377 135H122.062C134.178 135 144 125.254 144 113.232V21.768C144 9.74585 134.178 0 122.062 0Z"
                fill="#1382A7"/>
            <path
                d="M78.7148 34.0851V33.7553C78.7148 28.9228 74.7785 25 69.9295 25C65.0805 25 61.1443 28.9228 61.1443 33.7553V34.3352C42.1819 38.5878 28 55.4618 28 75.6446C28 99.0339 47.0309 118 70.5 118C93.9691 118 113 99.0339 113 75.6446C113 55.0524 98.2477 37.8942 78.7034 34.0851H78.7148ZM70.5114 110.689C51.0926 110.689 35.3477 94.9973 35.3477 75.6446C35.3477 56.2918 51.0926 40.6004 70.5114 40.6004C89.9302 40.6004 105.675 56.2918 105.675 75.6446C105.675 94.9973 89.9302 110.689 70.5114 110.689Z"
                fill="white"/>
            <path
                d="M74.405 75.4929L70.2131 44L66.1012 76.7608C66.1012 76.7608 66.1012 76.818 66.1012 76.8522C65.7585 78.4857 66.2953 80.0849 67.5746 80.8046L93 90L74.3935 75.5044L74.405 75.4929Z"
                fill="white"/>
          </svg>
        </div>

        <div class="third">
          <svg width="95" height="95" viewBox="0 0 143 135" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M121.215 0H21.7854C9.75365 0 0 9.74585 0 21.768V113.232C0 125.254 9.75365 135 21.7854 135H121.215C133.246 135 143 125.254 143 113.232V21.768C143 9.74585 133.246 0 121.215 0Z"
                fill="#D16F8C"/>
            <path
                d="M91.1187 37.5455C68.4133 30.484 48.6872 34.1757 41.6667 46.7921L25 76.7402L58.3904 87.666C77.9909 94.0719 95.2169 91.0702 101.279 80.1789L120 46.5161L91.1073 37.534L91.1187 37.5455ZM62.2717 80.0294C52.1918 74.3365 48.5959 61.4901 54.2466 51.3349C59.8973 41.1797 72.6484 37.557 82.7397 43.2499C92.831 48.9428 96.4155 61.7891 90.7648 71.9559C85.1141 82.1111 72.363 85.7338 62.2831 80.0409L62.2717 80.0294Z"
                fill="white"/>
            <path
                d="M72.5 73C78.8513 73 84 67.8513 84 61.5C84 55.1487 78.8513 50 72.5 50C66.1487 50 61 55.1487 61 61.5C61 67.8513 66.1487 73 72.5 73Z"
                fill="white"/>
            <path
                d="M73.5 79C76.5376 79 79 76.5376 79 73.5C79 70.4624 76.5376 68 73.5 68C70.4624 68 68 70.4624 68 73.5C68 76.5376 70.4624 79 73.5 79Z"
                fill="white"/>
            <path
                d="M82.9445 106.946C83.4602 111.394 80.3212 115.422 75.9378 115.944C71.5432 116.466 67.5633 113.289 67.0476 108.852C66.5319 104.416 70.2763 99.6505 74.9176 94C80.3661 100.899 82.44 102.51 82.9557 106.946H82.9445Z"
                fill="white"/>
          </svg>
        </div>

        <div class="fourth">
          <svg width="95" height="95" viewBox="0 0 143 135" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M121.215 0H21.7854C9.75365 0 0 9.74585 0 21.768V113.232C0 125.254 9.75365 135 21.7854 135H121.215C133.246 135 143 125.254 143 113.232V21.768C143 9.74585 133.246 0 121.215 0Z"
                fill="#CE437A"/>
            <path
                d="M110 47.8335V30L92.3326 33.5963C81.9643 35.7017 75 41.4717 75 47.9587V68L90.1674 64.6769C102.087 62.0707 110 55.3447 110 47.8335Z"
                fill="white"/>
            <path
                d="M34 88.4861V108L49.1674 104.764C61.0871 102.227 69 95.6778 69 88.3642V71L51.3326 74.5016C40.9643 76.5516 34 82.1698 34 88.4861Z"
                fill="white"/>
            <path
                d="M51.6674 33.5963L34 30V47.8335C34 55.3447 41.9129 62.0707 53.8326 64.6769L69 68V47.9587C69 41.4717 62.0357 35.7017 51.6674 33.5963Z"
                fill="white"/>
            <path
                d="M90.1674 74.2357L75 71V90.5139C75 96.8302 81.9643 102.448 92.3326 104.498L110 108V90.6358C110 83.3222 102.087 76.7733 90.1674 74.2357Z"
                fill="white"/>
          </svg>
        </div>
      </div>
    </div>
  </primary-template>
</template>

<style scoped>

/*text format*/
h2 {
  color: black;
  padding: 2rem 2rem 0 2rem;
  text-align: center;
}

/* Search Bar*/
.form {
  display: flex;
  justify-content: center;
  padding: 1rem;
  box-sizing: border-box;
  width: 100%;
}

.form, input[type="text"], input[type="submit"] {
  font-family: "Montserrat Alternates", sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: clamp(0.2em, 6vw, 1em);
  color: white;
  padding: .7em;
  border-radius: 2rem;
}

input[type="text"] {
  color: black;
  margin: 0.5rem;
  width: 20em;
  border: #A07234 solid 2px;
}

input[type="submit"] {
  background-color: #C9A97A;
  color: white;
  margin: 0.5rem;
  border: none;
}

/* text suggestion blurbs*/
.suggestions {
  display: flex;
  flex-direction: column;
  margin-bottom: 7rem;

  .suggestion {
    border-radius: 2rem;
    margin: 0.5rem 2rem 0.5rem 2rem;
  }

  h1 {
    text-wrap: wrap;
    margin: 2rem;
    padding-left: 1rem;
  }

  /* individual text suggestion blurbs*/

  .one {
    background-image: linear-gradient(to right, #76002E, #B82D32, #F5AA39);
    padding: 3rem 0 3rem;
  }

  .two {
    background-image: linear-gradient(to right, #FC7327, #88BA1A);
  }

  .three {
    background-image: linear-gradient(to right, #C7274D, #5B54BC);
    padding: 4rem 0 4rem;
  }

  .four {
    background-image: linear-gradient(to right, #1382A7, #C93285);
  }

  .five {
    background-image: linear-gradient(to right, #88BA1A, #FFBC2B);
  }

  .svgs {
    display: flex;
    justify-content: space-between;
    align-content: center;
    margin: 1.5rem;

    .first, .second, .third, .fourth {
      margin: 0.5rem;
    }
  }

}


/*tablet and beyond*/
@media only screen and (width > 750px) {

  h2 {
    padding-top: 7rem;
  }

  .suggestions {
    margin-bottom: 2rem;
  }

  input[type="text"] {
    width: 37em;
  }

  input[type="submit"] {
    width: 8em;
  }

  .first, .second, .third, .fourth {
    svg {
      height: 200px;
      width: 200px;
    }
  }

}

/*Desktop */
@media only screen and (width > 1200px) {

  input[type="text"] {
    width: 50em;
  }

  input[type="submit"] {
    width: 10em;
  }

  .first, .second, .third, .fourth {
    svg {
      height: 400px;
      width: 400px;
    }
  }
}

</style>