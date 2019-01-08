<template>

  <nav class="navBar">
    <nav class="wrapper">
      <div class="logos">
        <div id="er_logo"></div>
         <a href="/">
          <h1>particip_io</h1>
        </a>
      </div>

      <input
        type="checkbox"
        class="openSidebarMenu"
        id="openSidebarMenu"
      >
      <label
        for="openSidebarMenu"
        class="sidebarIconToggle"
      >
        <div class="spinner diagonal part-1"></div>
        <div class="spinner horizontal"></div>
        <div class="spinner diagonal part-2"></div>
      </label>

      <ul>
        <li>
          <a href="/realities">Realities</a>
        </li>
        <li> <a
            href="http://edgeryders.eu/t/ssna-on-collaborative-improvisation-project-outline"
            target='_blank'
          >Collaborative Improv with SSNA</a></li>
        <li> <a
            href="http://edgeryders.eu/t/what-does-the-participio-software-need-to-be-useful-for-artistic-co-creation"
            target='_blank'
          >Co-Creation Tools for Artists</a></li>
      </ul>
    </nav>
  </nav>

</template>

<script>
export default {
  mounted() {
    window.onscroll = function() {
      var nav = document.getElementById("nav");
      if (window.pageYOffset > 300) {
        nav.classList.add("navbar1");
      } else {
        nav.classList.remove("navbar1");
      }
    };
  }
};
</script>

<style scoped>
h1 {
  font-family: "Exo 2";
  font-weight: 300;
  color: rgb(242, 242, 242);
  float: right;
  font-size: 1.55em;
  padding: 6px 0 0 0 !important;
  transition: all 1s ease;
}
#er_logo {
  background: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' width='500' height='500' version='1'%3E%3Cdefs%3E%3Cpath id='a' d='M0 250a250 250 0 1 1 500 0 250 250 0 0 1-500 0zm97-103v106h42v-16h-26v-31h19v-16h-19v-27h26v-16H97zm80 91c6 0 8-4 8-11v-52c0-8-4-12-13-12h-4v75h9zm-25-91h23c19 0 27 10 27 29v48c0 20-8 29-26 29h-24V147zm63 25c0-17 9-27 25-27s24 9 24 27v10h-16v-11c0-8-3-11-8-11-6 0-9 3-9 11v59c0 7 3 11 9 11 5 0 8-4 8-11v-17h-10v-13h26v53h-8l-3-7c-4 7-9 10-16 10-14 0-22-11-22-30v-54zm64-25h43v16h-26v27h18v16h-18v31h26v16h-43V147zM112 381H95V275h24c18 0 26 8 26 30 0 13-3 21-10 26l12 50h-17l-10-45h-8v45zm0-60v-31h6c8 0 10 3 10 15 0 11-2 16-10 16h-6zm53-46l10 42h1l10-42h17l-19 62v44h-16v-42l-20-64h17zm69 90c6 0 9-4 9-11v-51c0-9-4-13-13-13h-4v75h8zm-24-90h23c18 0 27 9 27 29v47c0 20-8 30-26 30h-24V275zm136 46v-31h6c8 0 10 3 10 15 0 11-2 16-10 16h-6zm-72-46h43v15h-26v28h19v15h-19v32h26v16h-43V275zm72 106h-16V275h24c17 0 25 8 25 30 0 13-3 21-10 26l12 50h-17l-10-45h-8v45zm57-30c1 11 4 16 11 16 6 0 10-4 10-10 0-9-6-14-15-23-12-12-20-21-20-35 0-15 11-26 25-26s24 10 25 26l-16 2c-1-9-3-13-9-13-5 0-9 4-9 10 0 9 7 16 17 25 11 11 18 19 18 34s-11 26-26 26-26-11-27-29l16-3zm-65-172v-42h-42a42 42 0 1 1 42 42z'/%3E%3C/defs%3E%3Cuse fill='#fff' fill-rule='evenodd' xlink:href='%23a'/%3E%3C/svg%3E");
  background-size: 45px;
  background-position: 4px 3px;
  margin: 15px 15px 10px 0;
  background-repeat: no-repeat;
  width: 65px;
  height: 50px;
  display: inline-block;
  border-right: 1px solid #d7d7d7;
}

.logos {
  position: relative;
  float: left;
  margin: 0 0 0 15px;
}

input[type="checkbox"] {
  transition: all 0.3s;
  box-sizing: border-box;
  display: none;
}

.sidebarIconToggle {
  transition: all 0.3s;
  box-sizing: border-box;
  cursor: pointer;

  z-index: 99;
  height: 100%;
  width: 100%;
  float: right;
  height: 32px;
  margin: 35px 30px 0 0;
  width: 22px;
  transform: scale(1.3);
}

.spinner {
  transition: all 0.3s;
  box-sizing: border-box;
  position: absolute;
  height: 3px;
  width: 100%;
  background-color: #fff;
}

.horizontal {
  transition: all 0.3s;
  box-sizing: border-box;
  position: relative;
  float: left;
  margin-top: 3px;
}

.diagonal.part-1 {
  position: relative;
  transition: all 0.3s;
  box-sizing: border-box;
  float: left;
}

.diagonal.part-2 {
  transition: all 0.3s;
  box-sizing: border-box;
  position: relative;
  float: left;
  margin-top: 3px;
}

input[type="checkbox"]:checked ~ .sidebarIconToggle > .horizontal {
  transition: all 0.3s;
  box-sizing: border-box;
  opacity: 0;
}

input[type="checkbox"]:checked ~ .sidebarIconToggle > .diagonal.part-1 {
  transition: all 0.3s;
  box-sizing: border-box;
  transform: rotate(135deg);
  margin-top: 8px;
}

input[type="checkbox"]:checked ~ .sidebarIconToggle > .diagonal.part-2 {
  transition: all 0.3s;
  box-sizing: border-box;
  transform: rotate(-135deg);
  margin-top: -9px;
}

.label-toggle {
  display: block;
}
.wrapper {
  background: rgba(34, 34, 34, 0.432);
  box-shadow: 0 2px 20px rgba(0, 0, 0, 0.07);
  height: auto;
  border-radius: 0 0 20px 20px;
  display: inline-block !important;
  z-index: 99999;
  transition: all 0.3s ease;
  width: 100%;
  padding: 0;
  position: fixed;
  font-family: "Exo 2";
  margin: 0 auto;
  max-width: 100%;
}

nav ul {
  display: flex;
  align-content: flex-end;
  list-style-type: none;
  width: auto;
  float: right;
  padding-top: 13px;
  padding-right: 15px;
  li {
    display: inline-block;
    width: auto;
    margin: 0;
  }
}
nav ul a {
  color: white;
  text-decoration: none;

  font-size: 1.1em;
  padding: 13px;
  border: 1px solid rgba(255, 255, 255, 0.507);
  border-radius: 10px;
  transition: all 0.5s ease;
  margin-right: 20px !important;
}

.sidebarIconToggle {
  display: none;
}
nav .label-toggle {
  display: none;
}
nav .wrapper {
  align-items: center;
  display: flex;
  justify-content: space-between;
  transition: all 1s ease;
}
@media screen and (max-width: 980px) {
  .sidebarIconToggle {
    display: inline-block;
  }
  nav ul li a {
    color: rgb(255, 255, 255);
    text-decoration: none !important;
    margin: 0;
    width: 94% !important;
    display: block;
    border-radius: 10px;
    border: none;
    border: 0.75px solid rgb(87, 87, 87);
  }
  .navBar {
    box-shadow: none !important;
    position: fixed;
    z-index: 99999;
    width: 100%;
  }
  nav ul {
    clear: both;
    max-height: 0;
    list-style-type: none;
    opacity: 0;
    width: 92% !important;
    display: inline-block;

    margin: 0px auto;
    justify-content: left;
    padding: 0 5px;
    visibility: hidden;
    transition: all 1s ease !important;
  }
  nav li {
    color: rgb(255, 255, 255);
    display: block;
    font-size: 1.26em !important;
    width: auto;
    float: left;
    font-family: "Exo 2";
    font-weight: 100;

    border: none;
    border: none;
    width: 100% !important;
    padding: 0 15px;
    margin: 0 0 10px 0 !important;
    display: inline-block;
  }
  nav li:last-child {
    margin-bottom: 20px !important;
  }
  input[type="checkbox"]:checked ~ ul {
    opacity: 1;
    max-height: 400px;
    transition: all 1s ease !important;
    visibility: visible;
  }

  input[type="checkbox"]:checked ~ .wrapper {
    height: auto;
    visibility: visible;
  }
  nav .label-toggle {
    cursor: pointer;
    display: block;
    float: right;
    height: 35px;
    margin: 23px 20px 0 0;
    width: 35px;
  }
  nav .wrapper {
    display: block;
    background: rgba(0, 0, 0, 0.8);
    transition: all 1s ease;
  }
}

@media screen and (max-width: 500px) {
  nav ul {
    width: 88% !important;
    float: left;
  }
  nav li {
    float: left;
  }
}
</style>