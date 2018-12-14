<template>

  <div>
    <div class="hero">

      <div class="hero-container">
        <div class="logo">
          <h3>particip_io</h3>

          <p>A development lab within Edgeryders building experimental software and methodology for decentralized organizations and co-created culture.
          </p>
        </div>

        <div class="stats">
          <div class="card members">
            <h2>
              <countTo
                :startVal='1'
                :endVal='users.length'
                :decimals="0"
                :duration='3000'
              ></countTo> Active Members
            </h2>

            <img
              v-for="user in users"
              :src='"https://edgeryders.eu/"+ user.avatar_template.replace("{size}", "240")'
            />
          </div>

          <div class="card views">
            <countTo
              :startVal='0'
              :endVal='topics.length'
              :decimals="0"
              :duration='3000'
            ></countTo> Topics
          </div>

          <div class="card likes">
            <countTo
              :startVal='0'
              :endVal='totalLikes'
              :decimals="0"
              :duration='3000'
            ></countTo> Likes

          </div>
        </div>
      </div>
    </div>

    <div class="container">

      <div class="frow">

        <div class="col-left">
          <div class="intro">
            <p>In 2019, a bunch of hackers, artists and data scientists will run a project to develop open source software tools and methods for participatory and decentralised organisations. Our focus will especially be on organisations and projects related to arts and culture.</p>

          </div>

          <div class="projects">

            <h2>Here's what we're working on.</h2>

            <div class="summary realities_summary">
              <div class="realities_logo"></div>
              <p>We're building a tool for decentralised organizations to track keep track of their structure while helping them make decisions. This particular tool uses the Advice Process and TEAL organisations as it's point of departure. </p>
              <div class="info">
                <nuxt-link
                  to='/realities'
                  class="more_info"
                >Find out more</nuxt-link>
                <a
                  class="views"
                  target="_blank"
                  href="https://edgeryders.eu/c/participio/realities"
                >{{ $store.state.realities.topic_list.topics.length }} Discussions</a>
                <a
                  class="views"
                  target="_blank"
                  href="https://edgeryders.eu/c/participio/realities"
                >{{ $store.state.realities.users.length }} Contributors</a>

              </div>

            </div>

            <div class="summary ssna_summary">
              <div class="ssna_logo">
              </div>
              <h3>Collaborative Improvisation with SSNA</h3>

              <p>Inducing a semantic social network from a collective improvisational process, a group of 10 to 20 people will engage in a month-long online collective writing project. Each will act in a character of their choosing, similar to live role playing or improvisation theatre.</p>

              <div
                class="info"
                v-for="article in topics"
                v-if="article.id === 9220"
              >

                <a
                  :href="'http://edgeryders.eu/t/' + article.slug"
                  class="more_info"
                  target="_blank"
                >Project Post</a>

                <a
                  :href="'http://edgeryders.eu/t/' + article.slug"
                  class="views"
                  target="_blank"
                >{{ article.views }} Views</a>

                <a
                  :href="'http://edgeryders.eu/t/' + article.slug"
                  class="views"
                  target="_blank"
                >{{ article.posts_count }} Replies</a>

              </div>

            </div>

            <div class="summary cocreation_summary">
              <div class="cocreation_logo">
              </div>
              <h3>Tools for Artistic Co-Creation</h3>

              <p>Tools for artistic collaboration/co-exploration/co-making have different requirements than those for software development and productivity. We are exploring ways to understand these processes through touch, smell, sound, movement and more.</p>

              <div
                class="info"
                v-for="article in topics"
                v-if="article.id === 9191"
              >

                <a
                  :href="'http://edgeryders.eu/t/' + article.slug"
                  class="more_info"
                  target="_blank"
                >Project Post</a>

                <a
                  :href="'http://edgeryders.eu/t/' + article.slug"
                  class="views"
                  target="_blank"
                >{{ article.views }} Views</a>

                <a
                  :href="'http://edgeryders.eu/t/' + article.slug"
                  class="views"
                  target="_blank"
                >{{ article.posts_count }} Replies</a>

              </div>

            </div>

          </div>

        </div>
        <div class="col-right">

          <div class="posts">

            <h2 class="news">Talking Points</h2>

            <div
              v-for=" article in topics.slice(0, 1)"
              v-if="article.pinned == false"
              class="open-post"
              key="article"
            >

              <div class="item">
                <div class="title">
                  <nuxt-link :to='article.slug'>
                    <span class="date">{{ article.created_at.split("T")[0] }}</span> {{ article.title }}
                  </nuxt-link>

                  <div class="posters">
                    <div
                      v-for="poster in article.posters"
                      class="avatar"
                    >
                      <img
                        v-for="user in users"
                        v-if="user.id === poster.user_id"
                        :src='"https://edgeryders.eu/"+ user.avatar_template.replace("{size}", "240")'
                      />
                    </div>
                  </div>
                </div>

                <div class="excerpt">
                  <p v-html='article.excerpt'></p>

                </div>

                <div class="footer">
                  <p>{{article.views}} Views</p>
                  <p>{{article.posts_count}} Replies</p>
                  <a
                    :href='"https://edgeryders.eu/t/" + article.slug'
                    target="_blank"
                  >Join the discussion</a>
                </div>

              </div>

            </div>

            <div
              v-for=" article in topics.slice(1, 6)"
              v-if="article.pinned == false"
              class="test-post"
              key="article"
            >

              <div
                v-if="article.tags.includes('featured')"
                class="item featured"
              >
                <div
                  class="header"
                  v-if="article.image_url"
                >
                  <div
                    class="header-img"
                    :style="{ backgroundImage: 'url(' + 'https://edgeryders.eu' + article.image_url + ')' }"
                  ></div>
                  <img :src='"https://edgeryders.eu" + article.image_url' />
                  <div class="title">
                    <div class="post-link">
                      <a
                        :href='"https://edgeryders.eu/t/" + article.slug'
                        target="_blank"
                      >
                        {{ article.title }} <span class="date"> {{ article.created_at.split('T')[0] | formatDate }} </span>

                      </a>
                    </div>
                    <div
                      v-for="user in users"
                      v-if="user.id === article.posters[0].user_id"
                      class="avatar"
                    >
                      <img :src='"https://edgeryders.eu/"+ user.avatar_template.replace("{size}", "240")' />
                    </div>
                  </div>
                </div>

                <p v-html='article.excerpt'></p>

                <div class="footer">
                  <p>{{article.views}} Views</p>
                  <p>{{article.posts_count}} Replies</p>
                  <a
                    :href='"https://edgeryders.eu/t/" + article.slug'
                    target="_blank"
                  >Read more on Edgeryders</a>
                </div>
              </div>

              <div
                class="item"
                v-else
              >
                <div class="title">
                  <nuxt-link :to='article.slug'>
                    <span class="date">{{ article.created_at.split("T")[0] }}</span> {{ article.title }}
                  </nuxt-link>

                  <div class="posters">
                    <div
                      v-for="poster in article.posters"
                      class="avatar"
                    >
                      <img
                        v-for="user in users"
                        v-if="user.id === poster.user_id"
                        :src='"https://edgeryders.eu/"+ user.avatar_template.replace("{size}", "240")'
                      />
                    </div>
                  </div>
                </div>

                <div class="excerpt">
                  <p v-html='article.excerpt'></p>
                  <div class="excerpt-link">
                    <p><a>Join the discussion</a></p>
                  </div>
                </div>

              </div>

            </div>

          </div>

        </div>
      </div>

    </div>

    <div class="background">

      <div class="inner">

        <div class="goals">
          <p><b>Particip.io</b> has been launched with funding from the Swedish arts council fund Kulturbryggan to create open source software for participatory culture, and that's what we'll deliver in 2019. Here are our main objectives.</p>

          <ul>

            <li>Continue development on existing projects, document their use cases and tie them together when possible.</li>
            <li>Research which needs are not being met and what opportunities exist for developing new tools for participatory organisations and projects working with art and culture.</li>
            <li style="margin-top: -30px">Build a community of software developers, deployment experts, organisational consultants and otherwise savvy people that people and organisations can engage with to get software and methods deployed for their project. </li>

            <li>Identify existing open source tools, define cases for their use, outline what's needed to deploy them and if possible develop ways to tie them together with tools developed as part of Particip.io.</li>

          </ul>

        </div>

        <div class="brainstorm">

          <div class="credits">
            <div id="kulturbryggan_logo"> </div>
            <div id="er_logo">Edgeryders </div>

          </div>

          <h2>Latest Brainstorms</h2>

          <div
            class="pitch"
            v-for="article in topics"
            v-if="article.category_id === 296"
          >

            <div class="front">
              <nuxt-link :to='article.slug'>
                {{ article.title }}
              </nuxt-link>

              <div class="likes"> {{ article.like_count }} </div>

            </div>

            <div class="back">
              <h2>skjsskj</h2>

            </div>

          </div>

        </div>

      </div>

    </div>

    <div class="container">

      <div class="frow">

        <div class="involved">

          <h2>There are many way to get involved..</h2>

          <div class="inner">

            <div class="item freelance">
              <h3>Open freelance development</h3>
              <p>You are more than welcome to <a href='https://github.com/Edgeryders-Participio'>contribute to the codebase</a> and start working on an issue whenever you want to. You'll be joining the Particip.io community, and developers who make consistent contributions may be invited to join for a hackathon or a focused development week or allotted paid hours to do more focused long term work.</p>
            </div>

            <div class="item hackathon">
              <h3>Exploratory Hackathons</h3>
              <p>A total of three hackathons will be held in 2019. These will be 4 days long, with 8-12 participants. Travel, food and accommodation will be paid for by the project. Each of these hackathons will focus on exploring and prototyping solutions to specific problems collected from participants on the ER platform.
              </p>
              <div class="skills">
                <p class="skill">developers</p>
                <p class="skill">designers</p>
                <p class="skill">artists</p>
                <p class="skill">visionaries</p>
              </div>
            </div>

            <div class="item dev-week">
              <h3>Focused Development Weeks</h3>
              <p>Much of the hands on development will happen during focused work weeks, where 2-4 developers and designers meet somewhere to design and code functional prototypes or new releases of a project. Travel &amp; accommodation is provided by the project, and each participant is paid 1000 EUR for the week.</p>
              <div class="skills">
                <p class="skill">developers</p>
                <p class="skill">designers</p>
              </div>
            </div>

            <div class="item team-cycle">
              <h3>Distributed Team Cycle</h3>
              <p>When clear specifications and deliverables have already been decided upon for a project, work can be done in team sprints, where 2-4 developers work together remotely for a few weeks. A rule of thumb is that the scope and pay is similar to a sprint week on site, but done over a month.
              </p>
              <div class="skills">
                <p class="skill">developers</p>
                <p class="skill">designers</p>
              </div>
            </div>

            <div class="item paid-freelance">
              <h3>Paid Freelance Development</h3>
              <p>We have a total of 240 hours of freelance developer hours available. These hours will only be used by developers have participated in active development, have already contributed quality controlled additions to the code base of a project and want to spend freelance time on developing features or fixing bugs and issues.</p>
            </div>

            <div class="item contact">
              <h3>Want to join?</h3>
              <p>It's as as simple as introducing yourself on the platform and telling us a little about how you can contribute to any one of the projects we are currently working on. If you are a developer, we strongly recommend checking out the repositories for our projects on Github and familiarising yourself with the source code.</p>
              <div class="join">
                <a
                  class="post"
                  href="https://edgeryders.eu/c/participio"
                  target="_blank"
                >Post an introduction</a>
                <a
                  class="github"
                  href="https://github.com/Edgeryders-Participio"
                  target="_blank"
                >View projects on Github</a>
              </div>
            </div>

          </div>

        </div>

      </div>

    </div>
  </div>
</template>


<script>
import axios from "axios";
import countTo from "vue-count-to";
import Vuex from "vuex";

export default {
  components: { countTo },
  fetch({ store }) {
    let promises = [
      new Promise(resolve => {
        axios
          .get("https://edgeryders.eu/c/participio/realities.json")
          .then(resp => {
            resolve(resp.data);
          });
      }),
      new Promise(resolve => {
        axios
          .get("https://edgeryders.eu/c/participio/realities.json")
          .then(resp => {
            resolve(resp.data);
          });
      })
    ];

    return Promise.all(promises).then(resp => {
      store.commit("setCurrentPost", resp[0]);
    });
  },
  data() {
    return {
      topics: "default",
      users: "0",
      views: "0",
      total: [],
      totalOfViews: 0,
      totalLikes: 0
    };
  },
  computed: {
    realitiesViews() {
      return this.$store.state.realities.topic_list.topics.reduce(
        (sum, currentItem) => currentItem.views + sum,
        0
      );
    }
  },
  asyncData({ params }, callback) {
    axios
      .get(`https://edgeryders.eu/c/participio.json?order=created`)
      .then(res => {
        callback(null, {
          topics: res.data.topic_list.topics,
          users: res.data.users,
          totalOfViews: res.data.topic_list.topics.reduce(
            (sum, currentItem) => currentItem.views + sum,
            0
          ),
          totalLikes: res.data.topic_list.topics.reduce(
            (sum, currentItem) => currentItem.like_count + sum,
            0
          )
        });
      });
  },
  head: {
    script: [
      { src: "/js/segment.min.js", body: true, defer: "" },
      { src: "/js/d3-ease.v0.6.js", body: true, defer: "" },
      { src: "/js/letters.js", body: true, defer: "" },
      { src: "/js/demo-1.js", body: true, defer: "" }
    ]
  }
};
</script>




<style scoped>
.col-left {
  padding-right: 3%;
  width: 52%;
  float: left;
}

.col-right {
  width: 48%;
  margin-left: 0;
}

.frow {
  clear: both;
}

.summary {
  border: 1px solid #efefef;
  border-radius: 10px;
  padding: 20px;
  margin-bottom: 20px;
  position: relative;
}

.summary .info {
  width: 100%;
  border-top: 1px solid #efefef;
  height: 60px;
  display: block;
}

.summary .info a {
  width: auto;
  float: left;
  background: #fafafa;
  margin: 15px 20px 20px 0;
  font-size: 1em !important;
  border-radius: 10px;
  display: inline-block;
  padding: 15px 20px;
  border: 0.5px solid #cbcbcb;
  text-decoration: none !important;
  transition: all 0.5s ease;
}

.summary .info a:hover {
  border: 0.5px solid #888888;
}

a.more_info {
  border: 0.5px solid rgb(0, 175, 187) !important;
  background: none;
  color: rgb(0, 182, 223);
}

a.more_info:hover {
  border: 0.5px solid rgb(0, 175, 187) !important;
  color: rgb(0, 182, 223);
}

.realities_summary a.more_info {
  border: 0.5px solid orangered !important;
  background: none;
  color: orangered;
}

.realities_summary a.more_info:hover {
  border: 0.5px solid orangered;
  background: #fafafa;
}

.realities_logo {
  background: url("/realities_logo_capitalized.png") no-repeat;
  width: 100%;
  height: 60px;
  background-size: 250px;
  background-position: 0px 0;

  padding-bottom: 10px;
  padding-left: 30px;

  padding: 20px;
}

.cocreation_logo {
  background: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 34.6'%3E%3Cpath d='M0 9.3s14.1-7.1 16.2-7.1c4.2 0 18 1.8 18.4 2 .5.2 8.9 3.5 9.7 4.2l5.7 4.8c.4.4.8 1.1.8 1.9 0 .7-.7 1.8-2.3 1.7-.8-.1-1.7-.8-1.7-.8l-5.4-4.1c-.2-.2-7.2-.6-11.3-.7-1.2 0-1.9.6-2.1 1.1-.2.4-.2 1.3.5 1.9 1.3 1.1 8.4 4.1 9.4 4.6 1.2.7 2 1.8 1.4 3.2-.6 1.4-1.9 1.5-4.4.6-2.4-.9-9.1-2.9-15.4-5.2-.8-.3-2.1-2.3-3.1-3.5l-8.5 5.5L0 9.3z'/%3E%3Cpath d='M36.5 12.1l4.5.2 4.9 8.4s1.1 2-1 2.7c-1.6.5-2.4-1-3.7-3.5s-4.7-7.8-4.7-7.8zM36 12.1l6.1 10.4s-.9.3-2-.8c0 0 .5-1.7-1.8-3.2l-3.6-1.6-3-4.9 4.3.1z'/%3E%3Cg%3E%3Cpath d='M79.8 25.3h-.2c-.8.1-1.5-.4-1.6-1.2l-.6-4c-.1-.8.3-1.4.7-1.7 0 0 1 .8 2.3 1.2l.6 4.1c.1.8-.5 1.5-1.2 1.6zM71.7 26.5l-.8.2h-.2c-.8 0-1.4-.6-1.4-1.4v-3.7l2.4-.9v5.8zM73.7 27.7h-.2c-.8 0-1.4-.6-1.4-1.4v-5.7l5.4-2.2-2.4 2.3v5.6c0 .8-.6 1.4-1.4 1.4z'/%3E%3Cpath d='M94.5 0L79.7 3.1l-19 5.1-6.4 3.3s-2 1.1-.3 3.2c.8.9 3.3-.1 5.5-1.1l4.4-1.7 6.4 2.1 5.3-3.6.5.6s-5 3.5-7.4 4.9c-1 .6-2.1 1.1-2.8 1.7-1 .6-1.4 1.9-.9 2.9.3.7 1 1.1 1.7 1.2.7.1 4-1.3 6.6-2.3 4.4-1.7 9.9-4 10.4-4.4.8-.7 3.7-5.1 3.7-5.1l.6.4-3.8 5.1c-.2.2-6 2.6-6 2.6s2.5 1.9 6.1 1.2c5.7-1.1 8.9-6.4 8.9-6.4l6.5-.7L94.5 0z'/%3E%3C/g%3E%3C/svg%3E")
    no-repeat;
  width: 100%;
  height: 64px;
  background-size: 230px;
  background-position: 0px 0;
  margin-top: 10px;
  padding-bottom: 0px;
  padding-left: 30px;
}

.ssna_summary,
.cocreation_summary {
  border: 1px solid #efefef;
  border-radius: 10px;
  padding: 20px;
}

.ssna_summary h3 {
  font-size: 1.4em;
  background: url("/ssna.png") no-repeat;
  width: 90%;
  margin: 0 0 10px 0;
  padding: 90px 0px 0px;
  height: 110px;
  margin-right: 2%;
  border-radius: 20px;
  background-size: 270px;
  background-position: 0px 0px;
}

.ssna_summary p {
}

.brainstorm {
  display: inline-block;
  perspective: 600;
  position: relative;
  width: 35%;
  top: -23px;
  left: -3%;
  background: #fff;
}

.front,
.back {
  width: 100%;
  float: left;
  border: 1px solid rgb(240, 240, 240);
  color: rgb(0, 182, 223);
  margin-right: 2%;

  height: 200px;
  border-radius: 10px;
  padding: 10px;
  position: relative;
}

.front .likes {
  width: 90%;
  height: 45px;
  background: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 125'%3E%3Cpath fill='#fff' d='M81 24a19 19 0 0 0-27 0l-4 4-4-4a19 19 0 0 0-27 0 19 19 0 0 0 0 27l4 4 27 27 27-27 4-4a19 19 0 0 0 0-27z'/%3E%3C/svg%3E")
    no-repeat 0 7px;
  background-size: 25px;
  position: absolute;
  bottom: 0;
  right: 5%;
  border-top: 0.5px solid blue;
  color: rgb(28, 28, 28);
  padding: 10px 0 0 30px;
  font-family: "Exo 2";
  font-size: 1em;
}

.front a {
  color: rgb(69, 69, 69) !important;
  text-decoration: none;
  font-weight: bold !important;
  line-height: 1.3em;
  font-family: "Open Sans";
  font-size: 1em;
}

.brainstorm .pitch:last-child {
  margin-right: 0;
}

.pitch {
  float: left;
  width: 46%;
  margin: 0 0 4% 4%;
  height: auto;
  -webkit-perspective: 1000;
  -moz-perspective: 1000;
  -ms-perspective: 1000;
  perspective: 1000;
  -ms-transform: perspective(1000px);
  -moz-transform: perspective(1000px);
  -moz-transform-style: preserve-3d;
  -ms-transform-style: preserve-3d;
  transform-style: preserve-3d;
  backface-visibility: hidden;
  -webkit-backface-visibility: hidden;
}

.pitch:last-child {
}
.front,
.back {
  text-align: center;
  border-radius: 10px;
  transition: 0.6s;
  transform-style: preserve-3d;
  position: absolute;
  top: 0;
  height: 200px;
  left: 0;
  backface-visibility: hidden;
  -webkit-backface-visibility: hidden;
  -webkit-transition: all 1200ms cubic-bezier(0.175, 0.885, 0.32, 1.275);
  transition: all 1200ms cubic-bezier(0.175, 0.885, 0.32, 1.275);
}
.front {
  z-index: 2;
  transform: rotateY(0deg);
  position: relative;
  padding: 20px;
  text-align: left;
  background: rgb(255, 255, 255);

  color: rgb(0, 182, 223);
}
.back {
  width: 100%;
  height: 100%;
  background: blue;
  color: #fff;
  padding-top: 7%;
  transform: rotateY(-180deg);
}
.pitch:hover .back {
  transform: rotateY(0deg);
}
.pitch:hover .front {
  transform: rotateY(180deg);
}

.involved {
  display: inline-block;
  margin: 0px;
  border-radius: 20px;
  transform: rotate(0deg);
  padding: 0 0 40px;
}

.involved h2 {
  background-size: 1.9em;
  width: auto;
  display: inline-block;
  clear: both;
  text-align: left;
  font-size: 2.2em;
  font-weight: 200;
  font-family: "Exo 2";
  position: relative;
  padding: 25px 30px 20px 10px;
  color: #2d2d2d;
  border-radius: 10px;
  transform: rotate(0deg);
  margin: 15px 0 0px 0px;
  font-size: 2.4em;
  font-weight: 200;
}

.involved .item {
  width: 31%;
  padding: 0px;
  border-radius: 20px;
  float: left !important;
  line-height: 30px;
  margin: 20px 2% 30px 0;
}

.involved .item .skills {
  margin: 10px 0 0 0;
  padding: 10px 0 0 10px;
  border-top: 1px solid #efefef;
}
.involved .item .skills p {
  color: #00b6df;
  border: 0.5px solid #d8d8d8;
  padding: 10px 10px;
  margin: 0 13px 0 0;
  position: relative;
  top: 10px;
  display: inline;
  font-size: 0.9em;
  border-radius: 10px 10px 0 10px;
}

.involved .item .join {
  font-family: "Exo 2";
  margin: 10px 0 0 0;
  padding: 10px 0 26px 10px;
  border-top: 1px solid #efefef;
}
.involved .item .join a.post {
  border: 0.5px solid orangered !important;
  background: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='500' height='500' version='1'%3E%3Cpath fill='rgb(255, 68, 0)' fill-rule='evenodd' d='M0 250a250 250 0 1 1 500 0 250 250 0 0 1-500 0zm250 183V250H67a183 183 0 1 1 183 183z'/%3E%3C/svg%3E")
    #fff no-repeat 8px 9px;
  background-size: 1.4em;
  color: orangered;
  border-radius: 10px;
  padding: 10px 10px 10px 38px;
  margin: 0 20px 0 0;
  position: relative;
  top: 10px;
  display: inline;
  font-size: 1em;
  text-decoration: none !important;
}

.join .github {
  border: 0.5px solid #00b6df !important;
  background: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1024' height='1024' fill='none'%3E%3Cpath fill='%2300b6df' fill-rule='evenodd' d='M512 0A511.9 511.9 0 0 0 0 512c0 226.6 146.6 418 350 485.8 25.7 4.4 35.3-11 35.3-24.4 0-12.1-.7-52.4-.7-95.3-128.6 23.7-161.9-31.4-172.1-60.2-5.8-14.7-30.7-60.1-52.5-72.3-18-9.6-43.5-33.3-.6-34 40.3-.6 69 37.2 78.7 52.6 46 77.4 119.7 55.6 149.1 42.2 4.5-33.3 18-55.7 32.6-68.5-113.9-12.8-233-57-233-252.8 0-55.7 20-101.7 52.6-137.6-5.2-12.8-23-65.3 5-135.7 0 0 43-13.4 140.9 52.5a475 475 0 0 1 128-17.3c43.5 0 87 5.8 128 17.3 97.9-66.5 140.8-52.5 140.8-52.5 28.1 70.4 10.2 123 5.1 135.7a198.1 198.1 0 0 1 52.5 137.6c0 196.5-119.7 240-233.6 252.8 18.5 16 34.5 46.7 34.5 94.7 0 68.5-.6 123.6-.6 140.8 0 13.5 9.6 29.5 35.2 24.4A512.8 512.8 0 0 0 1024 512C1024 229.1 794.9 0 512 0z' clip-rule='evenodd'/%3E%3C/svg%3E")
    #fff no-repeat 8px 9px;
  background-size: 1.4em;
  text-decoration: none !important;
  color: #00b6df;
  border-radius: 10px;
  padding: 10px 10px 10px 38px;
  margin: 0 10px 0 0;
  position: relative;
  top: 10px;
  display: inline;
  font-size: 1em;
}

.involved h3 {
  font-family: "Exo 2";
  font-size: 1.4em;
  clear: both;
  padding: 5px 0 0 10px;
  border: 1px solid #efefef;
  border-radius: 10px;
  padding: 15px;
  margin-bottom: 10px;
}

.involved p {
  padding: 0px 10px;
  margin: 0;
  line-height: 1.7em;
  font-family: "Exo 2";
  font-size: 1.15em;
  font-weight: 300;
}

.involved .contact {
  background: #fff;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.05);
  padding: 15px !important;
}

.contact h3 {
  border: none;
  margin: 0;
}

.paid-freelance {
  background: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 126.5 194.6'%3E%3Cpath d='M119.8 142.2h-15.1a14.3 14.3 0 0 1-15.7 8l-25.7-4.9-25.8 4.9a14.3 14.3 0 0 1-15.7-8h-15a6.7 6.7 0 1 0 0 13.5h113a6.8 6.8 0 0 0 0-13.5z'/%3E%3Ccircle cx='63.2' cy='22.5' r='22.5'/%3E%3Cpath d='M19.9 100.8c2.7 3 6.2 5 10.4 6.5 1.8.6 3.7 1 5.7 1.5V92.3l-.5-.1a8.6 8.6 0 0 1-3.7-2.2c-.7-.7-1-1.3-1-3v-.3c0-1.7.7-4.2 2-7 .8-2 2-4 3.2-5.9v-2.2h54.5v2.2l1.9 3.1c2 3.7 3.2 7.5 3.3 9.8v.3c0 1.7-.3 2.3-1 3-.5.6-1.5 1.4-3.7 2.2l-.5.1v16.5c2-.4 4-.9 5.7-1.5 4.2-1.4 7.7-3.6 10.4-6.5 1.9-2 3.2-4.4 4-6.8a21 21 0 0 0 1.1-7c0-5-1.4-9.6-3.3-13.8a67.5 67.5 0 0 0-16.6-22c-1-.8-1.8-1.5-3-2-1-.6-1.9-1.2-3.8-1.4-.7-.3-1.6-.4-2.4-.4H43.9l-2.4.3c-1.1.2-2 .5-2.6.8-1.7.7-2.8 1.6-4 2.5-4 3.2-8.5 8.2-12.5 14.4-4 6.3-7.5 13.4-7.6 21.6 0 2.3.3 4.7 1.1 7a19 19 0 0 0 4 6.8z'/%3E%3Cpath d='M38 111.3l25.3 4.8 25.2-4.8V73.6H38zM23 128c2.1-3.2 5.4-5.3 9.2-6l25.7-4.9-36.1-6.8a12.4 12.4 0 1 0-4.6 24.3l3.3.6c.2-2.5 1-5 2.5-7.2zM68.6 144.3l20.8 4a12.4 12.4 0 0 0 14.4-10l.1-.6-35.3 6.6z'/%3E%3Cpath d='M37.1 148.2l72.2-13.6a12.4 12.4 0 0 0-4.6-24.3L32.5 124a12.4 12.4 0 1 0 4.6 24.3z'/%3E%3C/svg%3E")
    15px 12px no-repeat #fff;
  background-size: 31px;
}

.dev-week {
  background: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 95.1'%3E%3Cpath d='M31.9 68.8v8.3h36.2v-8.3zM45.8 56.3c0-.8-.6-1.4-1.4-1.4-.6 0-1 .4-1.3 1l-2.4 7.3h-7.4a1.4 1.4 0 1 0 0 2.8h9.4l3-9.3.1-.5z'/%3E%3Cpath d='M36.1 54.9h-12l-3.5-9.6a4.2 4.2 0 0 0-5.8-2.5C5.3 47.6 0 58.3 0 72.9c0 2.3 1.9 4.2 4.2 4.2h12.5V91a4.2 4.2 0 1 0 8.3 0V73c0-2.4-1.9-4.2-4.2-4.2H8.5c.5-6 2.3-12.5 7-16.5l4.2 6.6c.5.9 1.4 1.5 2.5 1.5h14a2.8 2.8 0 1 0 0-5.5z'/%3E%3Ccircle cx='27.8' cy='39.6' r='6.3'/%3E%3Cpath d='M66.7 63.2h-7.4L57 55.8c-.2-.5-.7-1-1.3-1-.8 0-1.4.7-1.4 1.5v.4l3.1 9.3h9.4a1.4 1.4 0 1 0 0-2.8z'/%3E%3Ccircle cx='72.2' cy='39.6' r='6.3'/%3E%3Cpath d='M85.2 42.8c-.6-.3-1.2-.4-1.9-.4a4.2 4.2 0 0 0-4 2.9L76 54.9h-12a2.8 2.8 0 1 0 0 5.5h13.9c1 0 2-.6 2.5-1.5l4.2-6.6c4.7 4 6.5 10.5 7 16.4H79.2A4.2 4.2 0 0 0 75 73v18a4.2 4.2 0 1 0 8.3 0V77.2h12.5c2.3 0 4.2-1.9 4.2-4.2 0-14.6-5.3-25.3-14.8-30.1zM50 29.2A14.6 14.6 0 1 1 50 0a14.6 14.6 0 0 1 0 29.2zm0-26.4a11.8 11.8 0 1 0 0 23.6 11.8 11.8 0 0 0 0-23.6z'/%3E%3Cpath d='M57 9a1.4 1.4 0 0 0-2.4-1l-3.2 3.2v-5a1.4 1.4 0 1 0-2.8 0v8.4a1.4 1.4 0 0 0 2.4 1l5.5-5.6c.3-.2.4-.6.4-1z'/%3E%3C/svg%3E")
    17px 13px no-repeat;
  background-size: 39px;
}

.dev-week h3 {
  padding-left: 68px;
}

.freelance h3 {
  padding-left: 55px !important;
}

.freelance {
  background: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 125'%3E%3Cpath d='M56.5 47.4l19.7 7.1c1.6.6 3-1.3 2-2.7A200.6 200.6 0 0 1 53.6 8a3.8 3.8 0 0 0-7.1 0 204.8 204.8 0 0 1-24.6 43.8c-1.1 1.4.3 3.3 2 2.7l19.7-7.1c-2.9 23.1-13.3 34.2-33.3 35.8-3 .2-5.3 2.6-5.3 5.6 0 3.3 2.8 5.9 6 5.6 19.4-1.5 32.4-10.5 39.1-27.2C57 83.7 70 92.8 89 94.4c3.2.3 6-2.4 6-5.6 0-2.9-2.3-5.4-5.2-5.6-19.7-1.7-30.4-13-33.3-35.8z'/%3E%3C/svg%3E")
    no-repeat 17px 16px #fff;
  background-size: 30px;
}

.hackathon {
  background: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 125'%3E%3Cswitch%3E%3Cg%3E%3Cpath d='M71.5 86.2h-43a10 10 0 0 1-10-10v-43a10 10 0 0 1 10-10h43a10 10 0 0 1 10 10v43a10 10 0 0 1-10 10zm-43-60a7 7 0 0 0-7 7v43a7 7 0 0 0 7 7h43a7 7 0 0 0 7-7v-43a7 7 0 0 0-7-7h-43z'/%3E%3Cpath d='M38 39.3c-3 0-5.5-2.5-5.5-5.5s2.5-5.5 5.5-5.5 5.5 2.5 5.5 5.5-2.5 5.5-5.5 5.5zm0-8c-1.4 0-2.5 1.1-2.5 2.5s1.1 2.5 2.5 2.5 2.5-1.1 2.5-2.5-1.1-2.5-2.5-2.5zM62 39.3c-3 0-5.5-2.5-5.5-5.5s2.5-5.5 5.5-5.5 5.5 2.5 5.5 5.5-2.5 5.5-5.5 5.5zm0-8c-1.4 0-2.5 1.1-2.5 2.5s1.1 2.5 2.5 2.5 2.5-1.1 2.5-2.5-1.1-2.5-2.5-2.5zM80 44.1H20c-.8 0-1.5-.7-1.5-1.5s.7-1.5 1.5-1.5h60c.8 0 1.5.7 1.5 1.5s-.7 1.5-1.5 1.5zM63.2 65.2h-25c-.8 0-1.5-.7-1.5-1.5s.7-1.5 1.5-1.5h25c.8 0 1.5.7 1.5 1.5s-.7 1.5-1.5 1.5z'/%3E%3Cpath d='M36.8 67.4l-.8-.2c-.7-.4-.9-1.4-.5-2.1l.9-1.4-.9-1.4c-.4-.7-.2-1.6.5-2.1.7-.4 1.6-.2 2.1.5l1.4 2.2c.3.5.3 1.1 0 1.6l-1.4 2.2c-.3.5-.8.7-1.3.7zM48.8 76.4L46.1 75l5.8-11.3-5.8-11.3c-.4-.7-.1-1.6.6-2 .7-.4 1.6-.1 2 .6L55 63l.2.7-6.4 12.7z'/%3E%3Cg%3E%3Cpath d='M38 32.8c-.8 0-1.5-.7-1.5-1.5v-16c0-.8.7-1.5 1.5-1.5s1.5.7 1.5 1.5v16c0 .8-.7 1.5-1.5 1.5z'/%3E%3C/g%3E%3Cg%3E%3Cpath d='M62 32.8c-.8 0-1.5-.7-1.5-1.5v-16c0-.8.7-1.5 1.5-1.5s1.5.7 1.5 1.5v16c0 .8-.7 1.5-1.5 1.5z'/%3E%3C/g%3E%3C/g%3E%3C/switch%3E%3C/svg%3E")
    10px 5px no-repeat;
  background-size: 51px;
}

.hackathon h3 {
  padding-left: 65px !important;
}

.team-cycle h3 {
  padding-left: 63px !important;
}

.team-cycle {
  background: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 125'%3E%3Cpath d='M50 5c-5 0-9 4-9 9s4 9 9 9 9-4 9-9-4-9-9-9zm0 6a3 3 0 0 1 3 3 3 3 0 0 1-3 3 3 3 0 0 1-3-3 3 3 0 0 1 3-3zm0 13c-4.6 0-8.9 1-12.2 3-3.2 2-5.8 5.2-5.8 9v9a3 3 0 0 0 3 3h30a3 3 0 0 0 3-3v-9c0-3.8-2.6-7-5.8-9-3.3-2-7.6-3-12.2-3zm0 6c3.7 0 7 1 9 2.2 2.2 1.3 3 2.6 3 3.8v6H38v-6c0-1.2.8-2.5 3-3.8 2-1.3 5.3-2.2 9-2.2zm0 20a3 3 0 0 0-3 3v8.3l-8.5 5.1a3 3 0 1 0 3 5.2l8.5-5.1 8.5 5a3 3 0 1 0 3-5L53 61.2V53a3 3 0 0 0-3-3zm-27 2c-5 0-9 4-9 9s4 9 9 9 9-4 9-9-4-9-9-9zm54 0c-5 0-9 4-9 9s4 9 9 9 9-4 9-9-4-9-9-9zm-54 6a3 3 0 0 1 3 3 3 3 0 0 1-3 3 3 3 0 0 1-3-3 3 3 0 0 1 3-3zm54 0a3 3 0 0 1 3 3 3 3 0 0 1-3 3 3 3 0 0 1-3-3 3 3 0 0 1 3-3zM23 71c-4.6 0-8.9 1-12.2 3C7.6 76 5 79.2 5 83v9a3 3 0 0 0 3 3h30a3 3 0 0 0 3-3v-9c0-3.8-2.6-7-5.8-9-3.3-2-7.6-3-12.2-3zm54 0c-4.6 0-8.9 1-12.2 3-3.2 2-5.8 5.2-5.8 9v9a3 3 0 0 0 3 3h30a3 3 0 0 0 3-3v-9c0-3.8-2.6-7-5.8-9-3.3-2-7.6-3-12.2-3zm-54 6c3.7 0 7 1 9 2.2 2.2 1.3 3 2.6 3 3.8v6H11v-6c0-1.2.8-2.5 3-3.8 2-1.3 5.3-2.2 9-2.2zm54 0c3.7 0 7 1 9 2.2 2.2 1.3 3 2.6 3 3.8v6H65v-6c0-1.2.8-2.5 3-3.8 2-1.3 5.3-2.2 9-2.2z' color='%23000' overflow='visible' style='text-indent:0;text-transform:none;block-progression:tb'/%3E%3C/svg%3E")
    no-repeat 16px 14px;
  background-size: 37px;
}

.paid-freelance h3 {
  padding-left: 58px;
}

.brainstorm {
  margin: 36px 0 0 20px;
  background: rgba(255, 255, 255, 0.589);
}

.brainstorm .pitch .likes {
  width: 90%;
  height: 45px;
  background: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 125'%3E%3Cpath fill='blue' d='M81 24a19 19 0 0 0-27 0l-4 4-4-4a19 19 0 0 0-27 0 19 19 0 0 0 0 27l4 4 27 27 27-27 4-4a19 19 0 0 0 0-27z'/%3E%3C/svg%3E")
    no-repeat 0 10px;
  background-size: 25px;
  position: absolute;
  padding-top: 13px !important;
  bottom: 0;
  right: 5%;
  border-top: 0.5px solid blue;
  color: blue;
  padding: 10px 0 0 30px;
}

.brainstorm .pitch a {
  color: blue !important;
  text-decoration: none;

  font-weight: bold;
  font-size: 1.2em;
}

.brainstorm .pitch:last-child {
  margin-right: 0;
}

.brainstorm h2 {
  background: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 640'%3E%3Cpath fill='blue' d='M481 186a110.1 110.1 0 0 0-87.3-127A109.7 109.7 0 0 0 221 39.8a109 109 0 0 0-36.9 11.9c-23.3 4-44.2 15.5-60 31.8a109.8 109.8 0 0 0-94.9 110.1 69.4 69.4 0 0 0 53 125.1l3.1 3.8.4.4 1 1.1.8 1a91.1 91.1 0 0 0 85.5 27.8l-23.8 67.5H192l-21.3 85.3L320 356.3h-42.7l4.6-6.9a91 91 0 0 0 51.3-20.5 69.3 69.3 0 0 0 104.2-15.8l5 .2A69.5 69.5 0 0 0 481 186zM210 436l2.7-10.5 6.6-26.5h-39.8l19.6-55.7a91.1 91.1 0 0 0 18.8-13.8 91.2 91.2 0 0 0 39.4 18.4l-19.8 29.7h31L210 436.1zm168.5-111.6a48.2 48.2 0 0 1-45.5-64h-22.2a70 70 0 0 0 8.5 52.3 69.2 69.2 0 0 1-44.1 15.6 69.3 69.3 0 0 1-44-15.4l-14.5-11.7-13.5 12.9a69.8 69.8 0 0 1-104-8.4l-1-1.3a69.5 69.5 0 0 1-4.2-76.1H70.3a91.1 91.1 0 0 0 .3 70.2h-1a48.3 48.3 0 0 1-28-87.5l9.2-6.5-.1-11.2v-.5-.6a87.8 87.8 0 0 1 95.6-88.1l6.9.6a87.8 87.8 0 0 1 59.5 38.2h24.6a110 110 0 0 0-65.2-55.6A89.2 89.2 0 0 1 236 60.1 88.3 88.3 0 0 1 305 93.4a88.3 88.3 0 0 1 19.1 49.6h21.4c-.5-9.1-2-17.9-4.5-26.3a88.5 88.5 0 0 1 55 98l-2.4 13.6 11.6 7.8a48.2 48.2 0 0 1-26.7 88.3zm67.7-32.6a69.7 69.7 0 0 0-29.2-73.5 110.2 110.2 0 0 0-87.3-127 109.8 109.8 0 0 0-75.3-51 85.6 85.6 0 0 1 45.5-12.6A88.5 88.5 0 0 1 369 61a90 90 0 0 1 4.8 6.5l.2.4 1.3 2a87.8 87.8 0 0 1 12.8 40.7h21.4c-.5-9.1-2-17.9-4.5-26.3a88.5 88.5 0 0 1 55 98l-2.4 13.6 11.6 7.7a48.2 48.2 0 0 1-23 88.2z'/%3E%3C/svg%3E")
    no-repeat 14px 14px;
  background-size: 1.2em;
  padding: 12px 0px 14px 56px !important;
  font-family: "Exo 2";
  font-size: 1.6em !important;
  font-weight: 200 !important;
  margin: 0px 0 11px 24px !important;
  border-radius: 10px;
  color: blue !important;
}

.background {
  clear: both;
  width: 100% !important;
  padding: 40px 10px 0px;
  border: 1px solid #e8e8e8;
  display: inline-block;
  margin: 0 auto;
  background-color: rgba(255, 255, 255, 0.432);
  background-image: linear-gradient(
      rgba(218, 218, 218, 0.2) 2px,
      transparent 2px
    ),
    linear-gradient(90deg, rgba(237, 237, 237, 0.2) 2px, transparent 1px),
    linear-gradient(rgba(237, 237, 237, 0.2) 1px, transparent 1px),
    linear-gradient(90deg, rgba(232, 232, 232, 0.2) 1px, transparent 1px);
  background-size: 100px 100px, 100px 100px, 20px 20px, 20px 20px;
  background-position: -2px -2px, -2px -2px, -1px -1px, -1px -1px;
}

.background .goals {
  color: rgb(74, 73, 73);
  border-radius: 10px;
  display: inline-block;
  width: 60%;

  float: left;
}

.background img {
  width: 30%;
  margin: 20px auto;
  padding-top: 15px;
  border-top: 1px solid #efefef;
}

.goals p {
  font-size: 1.3em;
  line-height: 1.6em;
  font-family: "Exo 2";
  width: 80%;
  margin: 0 0 30px 70px;
  font-weight: 300;
  padding: 0px 0px 0 80px;
  text-align: left;
  float: left;
  border-radius: 20px;
  color: rgba(0, 0, 0, 0.8);
  display: block;
  background: url("/participio_black.png") no-repeat 0 10px;
  background-size: 70px;
}

.goals .credits {
  width: 100%;
  float: left;
  margin: 0 0 0 10px !important;
  background: rgba(255, 255, 255, 0.4);
  clear: none !important;
}

.background ul {
  width: 100%;
  color: white;
  display: inline-block;
}

.background li {
  font-family: "Exo 2";
  font-size: 1.15em;
  line-height: 1.75em;
  border: 1px solid rgb(240, 240, 240);
  color: black;
  list-style-type: none;
  padding: 10px 0;
  font-weight: 300;
  width: 45%;
  margin: 0 3% 3% 0 !important;
  background: #fff;
  border-radius: 0 20px 20px 20px;
  padding: 20px;
  float: left;
  color: rgb(40, 40, 40);
  position: relative;
  padding: 20px 20px 20px 45px;
}

.background li:before {
  background: rgb(255, 255, 255);
  width: 50px;
  height: 50px;
  color: rgb(79, 79, 79);
  border: 0.5px solid rgba(187, 187, 187, 0.493);
  position: absolute;
  left: -10px;
  top: -15px;
  font-family: "Exo 2";
  border-radius: 80%;
  text-align: center;
  font-weight: 300;
  padding-top: 2.5%;

  color: rgb(0, 182, 223);
}

.background li:first-child:before {
  content: "1";
}

.background li:nth-child(2):before {
  content: "2";
}

.background li:nth-child(3) {
  margin-top: -30px !important;
}

.background li:nth-child(3):before {
  content: "3";
}

.background li:nth-child(4):before {
  content: "4";
}

.intro {
  background: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 96 120'%3E%3Cdefs/%3E%3Cg data-name='Your Icons'%3E%3Cpath fill='#000' d='M82.2 4a6 6 0 0 0-6 6 6 6 0 0 0 1.2 3.7l-28.2 28a8 8 0 0 0-8-1l-11-19.4a1 1 0 1 0-1.8 1l11.1 19.4a8 8 0 0 0-3.2 6.4 8 8 0 0 0 .4 2.5L17 60.9a1 1 0 0 0-.4 1.3 1 1 0 0 0 .9.6 1 1 0 0 0 .4-.1l19.7-10.3a8 8 0 0 0 6.7 3.7 7.3 7.3 0 0 0 1.4-.1l9.4 25.7a6 6 0 0 0 .4 10.6 5.9 5.9 0 0 0 2.5.6A6 6 0 1 0 57 81l-9.4-25.6a8 8 0 0 0 3.9-3.8L71.8 59a1 1 0 0 0 .4 0 1 1 0 0 0 .3-1.9l-20.4-7.3a8 8 0 0 0 .2-1.6 8 8 0 0 0-1.7-4.9L78.8 15a6 6 0 0 0 3.3 1 6 6 0 0 0 0-12zM58 83a4 4 0 0 1 3.8 2.6 4 4 0 0 1-2.4 5.1A4 4 0 1 1 58 83zM44.3 53a5 5 0 1 1 5-5 5 5 0 0 1-5 5zm37.9-39a4 4 0 1 1 4-4 4 4 0 0 1-4 4zM28.9 19.3a4 4 0 1 0-5.7-.4 4 4 0 0 0 5.7.4zM9.3 61.4a4 4 0 1 0 5.7.6 4 4 0 0 0-5.7-.6z' class='cls-1'/%3E%3Cpath fill='#000' d='M78.6 56.2a4 4 0 1 0 3.4 4.6 4 4 0 0 0-3.4-4.6z' class='cls-1'/%3E%3C/g%3E%3C/svg%3E")
    no-repeat;
  background-size: 7em;
  padding-left: 120px;
  margin: 10px 0;
  padding-bottom: 15px;
}

.intro p {
  font-size: 1.28em !important;
  font-weight: 200;
  font-family: "Exo 2";
  line-height: 2.4em;
  padding: 8px 10px;
  display: inline;
  background: #f5f5f5;
  box-decoration-break: clone;
}

@keyframes acrossIn {
  0% {
    transform: translate3d(-100%, 0, 0);
  }
  100% {
    transform: translate3d(0, 0, 0);
  }
}
@keyframes acrossOut {
  0% {
    transform: translate3d(0, 0, 0);
  }
  100% {
    transform: translate3d(-100%, 0, 0);
  }
}

.logo {
  width: 690px;
  float: left;
  margin: 20px 0 0 0;
}

@import url("https://fonts.googleapis.com/css?family=Open+Sans");
.logo h3 {
  margin: 0;
  height: 125px;
  font-size: 0px;
}
.logo p {
  font-family: "Exo 2", sans-serif;
  margin: 0;
  color: white;
  line-height: 1.55em;
  font-size: 1.65em;
  font-weight: 100;
}
@font-face {
  font-family: Biko;
  src: url("https://s3-us-west-2.amazonaws.com/s.cdpn.io/4273/biko-black.woff");
}
/* ----------------------------------------------
 * Generated by Animista on 2018-11-14 15:19:29
 * w: http://animista.net, t: @cssanimista
 * ---------------------------------------------- */

/**
 * ----------------------------------------
 * animation color-change-2x
 * ----------------------------------------
 */
@-webkit-keyframes color-change-2x {
  0% {
    background: #19dcea;
  }
  100% {
    background: #b22cff;
  }
}
@keyframes color-change-2x {
  0% {
    background: #19dcea;
  }
  100% {
    background: #b22cff;
  }
}

.hero {
  -webkit-animation: color-change-2x 12s linear infinite alternate both;
  animation: color-change-2x 12s linear infinite alternate both;
  height: auto;
  position: relative;
  padding-top: 90px;
  width: 100%;
  display: flex;
  justify-content: center;
  font-family: "Open Sans", sans-serif;
  margin-bottom: 50px;
}

.hero-container {
  margin: 30px auto !important;
  max-width: 85%;
  padding: 0 0 30px;
  display: inline-block;
}

svg {
  display: auto !important;
}

h1 {
  font-size: 1.8em;
  font-family: Biko;
}
.stats {
  width: 38%;
  float: right;
  margin: 30px 0 0 0;
}

.card {
  height: auto;
  color: white;
  display: inline-block;
  margin: 0 0px 15px 0;
  font-weight: bold;
}

.card p {
  font-size: 2em;
  margin: 0;
  padding: 0;
}
.card.likes,
.card.views {
  border: 1px solid #efefef;
  width: auto;
  display: inline;
  padding: 10px 20px;
  float: left;
  font-weight: 100 !important;
  border-radius: 10px;
  font-weight: 700;
  margin: 0 20px 0 0;
  font-size: 1.5em;
  font-family: "Exo 2";
}

.members h2 {
  font-weight: 200;
  font-size: 1.6em;
  width: auto;
  clear: both;
  margin: 0 0 20px 0;
  padding: 10px 20px;
  border-radius: 10px;
  border: 1px solid #efefef;
  font-family: "Exo 2";
}
.members img {
  border-radius: 20px;
  width: 30px !important;
  height: 30px !important;
  float: left;
  margin: 0 0px 9px 9px !important;
}

.item >>> .emoji {
  width: 15px !important;
}
</style>

<style lang="scss" scoped>
@import "assets/home.scss";
</style>