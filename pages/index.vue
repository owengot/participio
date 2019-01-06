<template>

  <div>
    <div class="hero">

      <div class="hero-container">
        <div class="logo">
          <h3>particip_io</h3>

          <div
            class="mobile_intro"
            v-if="$mq <= 'md'"
          >
            <p class="intro">In 2019, a bunch of hackers, artists and data scientists will run a project to develop open source software tools and methods for participatory and decentralised organisations.
            </p>
          </div>
          <div v-else>

            <p>A development lab within Edgeryders building experimental software and methodology for decentralized organizations and co-created culture.</p>

          </div>

          <div class="partners">
            <p>In partnership with..</p>
            <a
              href="https://www.konstnarsnamnden.se/Kulturbryggan"
              target="_blank"
            >
              <div id="kulturbryggan_logo"> </div>
            </a>
            <a
              href="https://edgeryders.eu"
              target="_blank"
            >
              <div id="er_logo">Edgeryders </div>
            </a>
          </div>
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
            <div class="member-avatars">
              <div
                class="avatar"
                v-for="user in users"
              >
                <a
                  :data-balloon="'@'+user.username"
                  data-balloon-pos="up"
                  :href='"https://edgeryders.eu/u/"+ user.username'
                >
                  <img :src='"https://edgeryders.eu/"+ user.avatar_template.replace("{size}", "240")' />

                </a>
              </div>
            </div>
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

    <div class="flex-container">

      <div class="flex-grid-two">

        <div class="col-left">

          <div class="section projects">

            <h2>Here's what we're working on.</h2>

            <div
              v-if="$mq >= 'md'"
              :class="$mq"
            >

              <no-ssr>
                <Flickity
                  ref="flickityProjects"
                  :options="flickityBrainstorms"
                  class="projects-slider"
                >

                  <div
                    class="project"
                    id="realities"
                  >
                    <p>We're building a tool for decentralised organizations to track keep track of their structure while helping them make decisions. This particular tool uses the Advice Process and TEAL organisations as it's point of departure. </p>
                    <div class="info">
                      <nuxt-link
                        to='/realities'
                        class="more_info"
                      >Project Page</nuxt-link>
                      <a
                        target="_blank"
                        href="https://edgeryders.eu/c/participio/realities"
                      >{{ $store.state.realities.topic_list.topics.length }} Topics</a>
                      <a
                        target="_blank"
                        href="https://edgeryders.eu/c/participio/realities"
                      >{{ $store.state.realities.users.length }} Members</a>

                    </div>

                  </div>

                  <div
                    class="project"
                    id="ssna"
                  >
                    <h3>Collaborative Improvisation with SSNA</h3>

                    <p>Inducing a semantic social network from a collective improvisational process, a group of 10 to 20 people will engage in a month-long online collective writing project. </p>

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
                        target="_blank"
                      >{{ article.views }} Views</a>

                      <a
                        :href="'http://edgeryders.eu/t/' + article.slug"
                        target="_blank"
                      >{{ article.posts_count }} Replies</a>

                    </div>

                  </div>

                  <div
                    class="project"
                    id="cocreation"
                  >
                    <h3>Tools for Artistic Co-Creation</h3>

                    <p>Tools for artistic collaboration, co-exploration and co-making have different requirements than those for software development and productivity. We are exploring ways to understand these processes through touch, smell, sound, movement and more.</p>

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
                        target="_blank"
                      >{{ article.views }} Views</a>

                      <a
                        :href="'http://edgeryders.eu/t/' + article.slug"
                        target="_blank"
                      >{{ article.posts_count }} Replies</a>

                    </div>

                  </div>

                </Flickity>
              </no-ssr>

            </div>

            <div v-else>
              <div
                class="project"
                id="realities"
              >
                <p>We're building a tool for decentralised organizations to track keep track of their structure while helping them make decisions. This particular tool uses the Advice Process and TEAL organisations as it's point of departure. </p>
                <div class="info">
                  <nuxt-link
                    to='/realities'
                    class="more_info"
                  >Find out more</nuxt-link>
                  <a
                    target="_blank"
                    href="https://edgeryders.eu/c/participio/realities"
                  >{{ $store.state.realities.topic_list.topics.length }} Discussions</a>
                  <a
                    target="_blank"
                    href="https://edgeryders.eu/c/participio/realities"
                  >{{ $store.state.realities.users.length }} Contributors</a>

                </div>

              </div>

              <div
                class="project"
                id="ssna"
              >
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
                    target="_blank"
                  >{{ article.views }} Views</a>

                  <a
                    :href="'http://edgeryders.eu/t/' + article.slug"
                    target="_blank"
                  >{{ article.posts_count }} Replies</a>

                </div>

              </div>

              <div
                class="project"
                id="cocreation"
              >
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
                    target="_blank"
                  >{{ article.views }} Views</a>

                  <a
                    :href="'http://edgeryders.eu/t/' + article.slug"
                    target="_blank"
                  >{{ article.posts_count }} Replies</a>

                </div>

              </div>

            </div>

          </div>

        </div>

        <div class="col-right">

          <div class="section news">

            <h2>Talking Points</h2>

            <div
              v-for=" article in topics.slice(0, 1)"
              v-if="article.pinned == false"
              key="article"
            >

              <div class="post open-post">
                <div class="title">
                  <nuxt-link :to='article.slug'>
                    <span
                      class="date"
                      :inner-html.prop="article.created_at.split('T')[0] | formatDate"
                    ></span> {{ article.title }}
                  </nuxt-link>

                </div>

                <div class="contributors">
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
              v-for=" article in topics.slice(1, 7)"
              v-if="article.pinned == false"
              key="article"
            >

              <div class="post">
                <div class="title">
                  <nuxt-link :to='article.slug'>
                    <span
                      class="date"
                      :inner-html.prop="article.created_at.split('T')[0] | formatDate"
                    ></span> {{ article.title }}
                  </nuxt-link>

                  <div class="contributors">
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

              </div>

            </div>

          </div>

        </div>

      </div>

    </div>

    <div class="section about">

      <div class="flex-container">

        <h2 v-scroll-reveal="{ delay: 20, origin: 'left', scale: 1,
    opacity: 0,
     }">What's it all about?</h2>

        <div
          v-scroll-reveal="{ delay: 200, scale: 1,
    opacity: 0,
    }"
          class="flex-grid"
          style="justify-content: left"
        >

          <div class="introduction">
            <div id="participio_logo"></div>
            <b>Particip.io</b> has been launched with funding from the Swedish arts council fund <a
              href="https://www.konstnarsnamnden.se/Kulturbryggan"
              target="_blank"
            >Kulturbryggan</a> to create open source software for participatory culture, and that's what we'll deliver in 2019.
          </div>

        </div>

        <div class="flex-grid">

          <div class="col">

            <h3>Development objectives</h3>

            <div
              v-if="$mq >= 'md'"
              :class="$mq"
            >
              <no-ssr>
                <Flickity
                  ref="flickityGoals"
                  :options="flickityBrainstorms"
                  class="goals"
                >

                  <div>Continue development on existing projects, document their use cases and tie them together when possible.</div>

                  <div>Build a community of software developers, deployment experts, organisational consultants and otherwise savvy people that organisations can engage with to get software and methods deployed for their project. </div>

                  <div>Research which needs are not being met and what opportunities exist for developing new tools for participatory organisations and projects working with art and culture.</div>

                  <div>Identify existing open source tools, define cases for their use, outline what's needed to deploy them and if possible develop ways to tie them together with tools developed as part of Particip.io.</div>

                </Flickity>
              </no-ssr>
            </div>

            <div
              v-else
              class="goals"
            >

              <div>Continue development on existing projects, document their use cases and tie them together when possible.</div>

              <div>Build a community of software developers, deployment experts, organisational consultants and otherwise savvy people that organisations can engage with to get software and methods deployed for their project. </div>

              <div>Research which needs are not being met and what opportunities exist for developing new tools for participatory organisations and projects working with art and culture.</div>

              <div>Identify existing open source tools, define cases for their use, outline what's needed to deploy them and if possible develop ways to tie them together with tools developed as part of Particip.io.</div>

            </div>

          </div>

          <div class="col">

            <h3>Pitches & Brainstorms</h3>

            <div class="section brainstorms">

              <div
                v-if="$mq === 'sm'"
                :class="$mq"
              >
                <no-ssr>
                  <Flickity
                    ref="flickityBrainstorms"
                    :options="flickityBrainstorms"
                  >

                    <div
                      v-for="article in topics"
                      v-if="article.category_id === 296"
                    >

                      <div class="card">
                        <div class="front">
                          <a href="">
                            {{ article.title }}
                          </a>

                          <div class="likes"> {{ article.like_count }} </div>

                        </div>
                      </div>

                    </div>
                  </Flickity>
                </no-ssr>
              </div>
              <div v-else>
                <div
                  v-scroll-reveal="{ delay: 820, scale: 0.3,
    opacity: 0,
    rotate: {
        x: 40,
        y: 0,
        z: 0
    } }"
                  class="card card-rotate"
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
                    <a :href='"https://edgeryders.eu/"+article.slug'>
                      <div class="url">
                      </div>

                      <div
                        v-for="user in users"
                        v-if="user.id === article.posters[0].user_id"
                        class="er_profile"
                      >
                        <div class="user_profile">
                          <img :src='"https://edgeryders.eu/"+ user.avatar_template.replace("{size}", "240")' />
                          <p>@{{ user.username }}</p>

                        </div>
                      </div>
                    </a>

                  </div>

                </div>
              </div>

            </div>

          </div>

        </div>

      </div>
    </div>

    <div class="flex-container">

      <div class="section involved">

        <div class="flex-grid">
          <div class="col">

            <h2 v-scroll-reveal="{ delay: 200, scale: 1,
    opacity: 0, origin: 'left'
    }">There are many ways to get involved..</h2>

            <div class="involved_slider">

              <div class="caroussel_nav">
                <button
                  class='freelance'
                  @click="select(0)"
                  :class="{highlight:selected == 0}"
                > </button>
                <button
                  class='hackathon'
                  @click="select(1)"
                  :class="{highlight:selected == 1}"
                ></button>
                <button
                  class='dev-week'
                  @click="select(2)"
                  :class="{highlight:selected == 2}"
                ></button>
                <button
                  class='team-cycle'
                  @click="select(3)"
                  :class="{highlight:selected == 3}"
                ></button>
                <button
                  class='paid-freelance'
                  @click="select(4)"
                  :class="{highlight:selected == 4}"
                ></button>
              </div>

              <no-ssr>
                <Flickity
                  ref="flickity"
                  :options="flickityOptions"
                >

                  <div>
                    <div class="card freelance">
                      <h3>Open freelance development</h3>
                      <p>You are more than welcome to <a href='https://github.com/Edgeryders-Participio'>contribute to the codebase</a> and start working on an issue whenever you want to. You'll be joining the Particip.io community, and developers who make consistent contributions may be invited to join for a hackathon or a focused development week or allotted paid hours to do more focused long term work.</p>
                    </div>
                  </div>
                  <div>
                    <div class="card hackathon">
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
                  </div>
                  <div>
                    <div class="card dev-week">
                      <h3>Focused Development Weeks</h3>
                      <p>Much of the hands on development will happen during focused work weeks, where 2-4 developers and designers meet somewhere to design and code functional prototypes or new releases of a project. Travel &amp; accommodation is provided by the project, and each participant is paid 1000 EUR for the week.</p>
                      <div class="skills">
                        <p class="skill">developers</p>
                        <p class="skill">designers</p>
                      </div>
                    </div>
                  </div>

                  <div>

                    <div class="card team-cycle">
                      <h3>Distributed Team Cycle</h3>
                      <p>When clear specifications and deliverables have already been decided upon for a project, work can be done in team sprints, where 2-4 developers work together remotely for a few weeks. A rule of thumb is that the scope and pay is similar to a sprint week on site, but done over a month.
                      </p>
                      <div class="skills">
                        <p class="skill">developers</p>
                        <p class="skill">designers</p>
                      </div>
                    </div>

                  </div>

                  <div>

                    <div class="card paid-freelance">
                      <h3>Paid Freelance Development</h3>
                      <p>We have a total of 240 hours of freelance developer hours available. These hours will only be used by developers have participated in active development, have already contributed quality controlled additions to the code base of a project and want to spend freelance time on developing features or fixing bugs and issues.</p>
                    </div>

                  </div>
                </Flickity>
              </no-ssr>
            </div>

            <h2 class="call_to_action">You can start by simply introducing yourself on the platform and telling us how you're interested in participating..</h2>

          </div>

          <div class="col">
            <section id="hackathon">
              <h2>Medenine Hackathon, Tunisia 2018</h2>
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/PB6_mB5rbNg?modestbranding=1;rel=0;showinfo=0"
                frameborder="0"
                allowfullscreen
              ></iframe>
              <blockquote>The coworking space OurGhema is our office for the weekend, the space right now slowly filling up with schoolkids doing homework while the sound of call to worship mixes with traffic and a calm rain outside.</blockquote>

              <div
                v-for="user in users"
                v-if="user.username === 'jakobskote'"
                class="er_profile"
              >
                <a :href='"https://edgeryders.eu/u/"+ user.username'>
                  <div class="user_profile">
                    <img :src='"https://edgeryders.eu/"+ user.avatar_template.replace("{size}", "240")' />
                    <p>@{{ user.username }}</p>

                  </div>
                </a>
              </div>
            </section>
          </div>

        </div>

      </div>

    </div>

    <div
      class="page_footer"
      v-scroll-reveal.reset="{ delay: 0, origin: 'bottom', scale: 1,
    opacity: 0, distance: '20px',
    rotate: {
        x: 0,
        y: 0,
        z: 0
    } }"
    >
      <div class="newsletter">
        <form
          name="newsletter"
          method="POST"
          data-netlify="true"
        >
          <input
            type="email"
            name="email"
            placeholder='Subscribe to our newsletter (email)'
          />
          <button type="submit"></button>
        </form>
      </div>
      <a
        href="https://edgeryders.eu/c/participio"
        target='_blank'
        class="introduction"
      >Write an introduction</a>
      <a
        href="https://github.com/Edgeryders-Participio"
        target='_blank'
        class="github"
      >View our projects on Github</a>
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
      selected: "",
      topics: "default",
      users: "0",
      views: "0",
      total: [],
      totalOfViews: 0,
      totalLikes: 0,
      flickityOptions: {
        prevNextButtons: false,
        contain: true,
        draggable: false,
        wrapAround: true,
        pageDots: false,
        selectedAttraction: 0.03,
        friction: 0.5
      },
      flickityBrainstorms: {
        prevNextButtons: false,
        contain: true,
        draggable: true,
        wrapAround: true,
        pageDots: false,
        selectedAttraction: 0.03,
        friction: 0.5
      }
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
  },
  methods: {
    select: function(index) {
      this.selected = index;
      return this.$refs.flickity.select(index);
    }
  }
};
</script>




<style scoped>
.flickity-slider div {
  width: 100%;
  display: inline-block;
}

.caroussel_nav {
  display: flex;
  margin: 10px 0 0 0;
}

.caroussel_nav button {
  border: none;
  z-index: 99999;
}

.caroussel_nav button {
  display: inline-block;
  height: 70px;
  width: 70px;
  background-color: #fff;
}

button:hover {
  cursor: pointer;
}

button.freelance:hover,
.freelance.highlight {
  background: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 126.5 194.6'%3E%3Cpath fill='orangered' d='M119.8 142.2h-15.1a14.3 14.3 0 0 1-15.7 8l-25.7-4.9-25.8 4.9a14.3 14.3 0 0 1-15.7-8h-15a6.7 6.7 0 1 0 0 13.5h113a6.8 6.8 0 0 0 0-13.5z'/%3E%3Ccircle fill='orangered' cx='63.2' cy='22.5' r='22.5'/%3E%3Cpath fill='orangered' d='M19.9 100.8c2.7 3 6.2 5 10.4 6.5 1.8.6 3.7 1 5.7 1.5V92.3l-.5-.1a8.6 8.6 0 0 1-3.7-2.2c-.7-.7-1-1.3-1-3v-.3c0-1.7.7-4.2 2-7 .8-2 2-4 3.2-5.9v-2.2h54.5v2.2l1.9 3.1c2 3.7 3.2 7.5 3.3 9.8v.3c0 1.7-.3 2.3-1 3-.5.6-1.5 1.4-3.7 2.2l-.5.1v16.5c2-.4 4-.9 5.7-1.5 4.2-1.4 7.7-3.6 10.4-6.5 1.9-2 3.2-4.4 4-6.8a21 21 0 0 0 1.1-7c0-5-1.4-9.6-3.3-13.8a67.5 67.5 0 0 0-16.6-22c-1-.8-1.8-1.5-3-2-1-.6-1.9-1.2-3.8-1.4-.7-.3-1.6-.4-2.4-.4H43.9l-2.4.3c-1.1.2-2 .5-2.6.8-1.7.7-2.8 1.6-4 2.5-4 3.2-8.5 8.2-12.5 14.4-4 6.3-7.5 13.4-7.6 21.6 0 2.3.3 4.7 1.1 7a19 19 0 0 0 4 6.8z'/%3E%3Cpath fill='orangered' d='M38 111.3l25.3 4.8 25.2-4.8V73.6H38zM23 128c2.1-3.2 5.4-5.3 9.2-6l25.7-4.9-36.1-6.8a12.4 12.4 0 1 0-4.6 24.3l3.3.6c.2-2.5 1-5 2.5-7.2zM68.6 144.3l20.8 4a12.4 12.4 0 0 0 14.4-10l.1-.6-35.3 6.6z'/%3E%3Cpath fill='orangered' d='M37.1 148.2l72.2-13.6a12.4 12.4 0 0 0-4.6-24.3L32.5 124a12.4 12.4 0 1 0 4.6 24.3z'/%3E%3C/svg%3E")
    #fff;
  background-position: 15px 2px;
  background-repeat: no-repeat;
  background-size: 39px;
  cursor: pointer;
}

button.freelance {
  background: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 126.5 194.6'%3E%3Cpath fill='#c6c6c4' d='M119.8 142.2h-15.1a14.3 14.3 0 0 1-15.7 8l-25.7-4.9-25.8 4.9a14.3 14.3 0 0 1-15.7-8h-15a6.7 6.7 0 1 0 0 13.5h113a6.8 6.8 0 0 0 0-13.5z'/%3E%3Ccircle fill='#c6c6c4' cx='63.2' cy='22.5' r='22.5'/%3E%3Cpath fill='#c6c6c4' d='M19.9 100.8c2.7 3 6.2 5 10.4 6.5 1.8.6 3.7 1 5.7 1.5V92.3l-.5-.1a8.6 8.6 0 0 1-3.7-2.2c-.7-.7-1-1.3-1-3v-.3c0-1.7.7-4.2 2-7 .8-2 2-4 3.2-5.9v-2.2h54.5v2.2l1.9 3.1c2 3.7 3.2 7.5 3.3 9.8v.3c0 1.7-.3 2.3-1 3-.5.6-1.5 1.4-3.7 2.2l-.5.1v16.5c2-.4 4-.9 5.7-1.5 4.2-1.4 7.7-3.6 10.4-6.5 1.9-2 3.2-4.4 4-6.8a21 21 0 0 0 1.1-7c0-5-1.4-9.6-3.3-13.8a67.5 67.5 0 0 0-16.6-22c-1-.8-1.8-1.5-3-2-1-.6-1.9-1.2-3.8-1.4-.7-.3-1.6-.4-2.4-.4H43.9l-2.4.3c-1.1.2-2 .5-2.6.8-1.7.7-2.8 1.6-4 2.5-4 3.2-8.5 8.2-12.5 14.4-4 6.3-7.5 13.4-7.6 21.6 0 2.3.3 4.7 1.1 7a19 19 0 0 0 4 6.8z'/%3E%3Cpath fill='#c6c6c4' d='M38 111.3l25.3 4.8 25.2-4.8V73.6H38zM23 128c2.1-3.2 5.4-5.3 9.2-6l25.7-4.9-36.1-6.8a12.4 12.4 0 1 0-4.6 24.3l3.3.6c.2-2.5 1-5 2.5-7.2zM68.6 144.3l20.8 4a12.4 12.4 0 0 0 14.4-10l.1-.6-35.3 6.6z'/%3E%3Cpath fill='#c6c6c4' d='M37.1 148.2l72.2-13.6a12.4 12.4 0 0 0-4.6-24.3L32.5 124a12.4 12.4 0 1 0 4.6 24.3z'/%3E%3C/svg%3E");
  background-position: 15px 2px;
  background-repeat: no-repeat;
  background-size: 39px;
  height: 60px;
  width: 70px;
}

button.hackathon {
  background: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 95.1'%3E%3Cpath fill='#c6c6c4' d='M31.9 68.8v8.3h36.2v-8.3zM45.8 56.3c0-.8-.6-1.4-1.4-1.4-.6 0-1 .4-1.3 1l-2.4 7.3h-7.4a1.4 1.4 0 1 0 0 2.8h9.4l3-9.3.1-.5z'/%3E%3Cpath fill='#c6c6c4' d='M36.1 54.9h-12l-3.5-9.6a4.2 4.2 0 0 0-5.8-2.5C5.3 47.6 0 58.3 0 72.9c0 2.3 1.9 4.2 4.2 4.2h12.5V91a4.2 4.2 0 1 0 8.3 0V73c0-2.4-1.9-4.2-4.2-4.2H8.5c.5-6 2.3-12.5 7-16.5l4.2 6.6c.5.9 1.4 1.5 2.5 1.5h14a2.8 2.8 0 1 0 0-5.5z'/%3E%3Ccircle fill='#c6c6c4' cx='27.8' cy='39.6' r='6.3'/%3E%3Cpath fill='#c6c6c4' d='M66.7 63.2h-7.4L57 55.8c-.2-.5-.7-1-1.3-1-.8 0-1.4.7-1.4 1.5v.4l3.1 9.3h9.4a1.4 1.4 0 1 0 0-2.8z'/%3E%3Ccircle fill='#c6c6c4' cx='72.2' cy='39.6' r='6.3'/%3E%3Cpath fill='#c6c6c4' d='M85.2 42.8c-.6-.3-1.2-.4-1.9-.4a4.2 4.2 0 0 0-4 2.9L76 54.9h-12a2.8 2.8 0 1 0 0 5.5h13.9c1 0 2-.6 2.5-1.5l4.2-6.6c4.7 4 6.5 10.5 7 16.4H79.2A4.2 4.2 0 0 0 75 73v18a4.2 4.2 0 1 0 8.3 0V77.2h12.5c2.3 0 4.2-1.9 4.2-4.2 0-14.6-5.3-25.3-14.8-30.1zM50 29.2A14.6 14.6 0 1 1 50 0a14.6 14.6 0 0 1 0 29.2zm0-26.4a11.8 11.8 0 1 0 0 23.6 11.8 11.8 0 0 0 0-23.6z'/%3E%3Cpath fill='#c6c6c4' d='M57 9a1.4 1.4 0 0 0-2.4-1l-3.2 3.2v-5a1.4 1.4 0 1 0-2.8 0v8.4a1.4 1.4 0 0 0 2.4 1l5.5-5.6c.3-.2.4-.6.4-1z'/%3E%3C/svg%3E")
    #fff;
  background-position: 10px 2px;
  background-repeat: no-repeat;
  background-size: 50px;
}

button.hackathon:hover,
button.hackathon.highlight {
  background: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 95.1'%3E%3Cpath fill='orangered' d='M31.9 68.8v8.3h36.2v-8.3zM45.8 56.3c0-.8-.6-1.4-1.4-1.4-.6 0-1 .4-1.3 1l-2.4 7.3h-7.4a1.4 1.4 0 1 0 0 2.8h9.4l3-9.3.1-.5z'/%3E%3Cpath fill='orangered' d='M36.1 54.9h-12l-3.5-9.6a4.2 4.2 0 0 0-5.8-2.5C5.3 47.6 0 58.3 0 72.9c0 2.3 1.9 4.2 4.2 4.2h12.5V91a4.2 4.2 0 1 0 8.3 0V73c0-2.4-1.9-4.2-4.2-4.2H8.5c.5-6 2.3-12.5 7-16.5l4.2 6.6c.5.9 1.4 1.5 2.5 1.5h14a2.8 2.8 0 1 0 0-5.5z'/%3E%3Ccircle fill='orangered' cx='27.8' cy='39.6' r='6.3'/%3E%3Cpath fill='orangered' d='M66.7 63.2h-7.4L57 55.8c-.2-.5-.7-1-1.3-1-.8 0-1.4.7-1.4 1.5v.4l3.1 9.3h9.4a1.4 1.4 0 1 0 0-2.8z'/%3E%3Ccircle fill='orangered' cx='72.2' cy='39.6' r='6.3'/%3E%3Cpath fill='orangered' d='M85.2 42.8c-.6-.3-1.2-.4-1.9-.4a4.2 4.2 0 0 0-4 2.9L76 54.9h-12a2.8 2.8 0 1 0 0 5.5h13.9c1 0 2-.6 2.5-1.5l4.2-6.6c4.7 4 6.5 10.5 7 16.4H79.2A4.2 4.2 0 0 0 75 73v18a4.2 4.2 0 1 0 8.3 0V77.2h12.5c2.3 0 4.2-1.9 4.2-4.2 0-14.6-5.3-25.3-14.8-30.1zM50 29.2A14.6 14.6 0 1 1 50 0a14.6 14.6 0 0 1 0 29.2zm0-26.4a11.8 11.8 0 1 0 0 23.6 11.8 11.8 0 0 0 0-23.6z'/%3E%3Cpath fill='orangered' d='M57 9a1.4 1.4 0 0 0-2.4-1l-3.2 3.2v-5a1.4 1.4 0 1 0-2.8 0v8.4a1.4 1.4 0 0 0 2.4 1l5.5-5.6c.3-.2.4-.6.4-1z'/%3E%3C/svg%3E")
    #fff;
  background-position: 10px 2px;
  background-repeat: no-repeat;
  background-size: 50px;
}

button.dev-week {
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 125'%3E%3Cswitch%3E%3Cg%3E%3Cpath fill='#c6c6c4' stroke='#c6c6c4' stroke-width='1px' d='M71.5 86.2h-43a10 10 0 0 1-10-10v-43a10 10 0 0 1 10-10h43a10 10 0 0 1 10 10v43a10 10 0 0 1-10 10zm-43-60a7 7 0 0 0-7 7v43a7 7 0 0 0 7 7h43a7 7 0 0 0 7-7v-43a7 7 0 0 0-7-7h-43z'/%3E%3Cpath fill='#c6c6c4' stroke='#c6c6c4' stroke-width='1px' d='M38 39.3c-3 0-5.5-2.5-5.5-5.5s2.5-5.5 5.5-5.5 5.5 2.5 5.5 5.5-2.5 5.5-5.5 5.5zm0-8c-1.4 0-2.5 1.1-2.5 2.5s1.1 2.5 2.5 2.5 2.5-1.1 2.5-2.5-1.1-2.5-2.5-2.5zM62 39.3c-3 0-5.5-2.5-5.5-5.5s2.5-5.5 5.5-5.5 5.5 2.5 5.5 5.5-2.5 5.5-5.5 5.5zm0-8c-1.4 0-2.5 1.1-2.5 2.5s1.1 2.5 2.5 2.5 2.5-1.1 2.5-2.5-1.1-2.5-2.5-2.5zM80 44.1H20c-.8 0-1.5-.7-1.5-1.5s.7-1.5 1.5-1.5h60c.8 0 1.5.7 1.5 1.5s-.7 1.5-1.5 1.5zM63.2 65.2h-25c-.8 0-1.5-.7-1.5-1.5s.7-1.5 1.5-1.5h25c.8 0 1.5.7 1.5 1.5s-.7 1.5-1.5 1.5z'/%3E%3Cpath fill='#c6c6c4' stroke='#c6c6c4' stroke-width='1px' d='M36.8 67.4l-.8-.2c-.7-.4-.9-1.4-.5-2.1l.9-1.4-.9-1.4c-.4-.7-.2-1.6.5-2.1.7-.4 1.6-.2 2.1.5l1.4 2.2c.3.5.3 1.1 0 1.6l-1.4 2.2c-.3.5-.8.7-1.3.7zM48.8 76.4L46.1 75l5.8-11.3-5.8-11.3c-.4-.7-.1-1.6.6-2 .7-.4 1.6-.1 2 .6L55 63l.2.7-6.4 12.7z'/%3E%3Cg%3E%3Cpath fill='#c6c6c4' stroke='#c6c6c4' stroke-width='1px' d='M38 32.8c-.8 0-1.5-.7-1.5-1.5v-16c0-.8.7-1.5 1.5-1.5s1.5.7 1.5 1.5v16c0 .8-.7 1.5-1.5 1.5z'/%3E%3C/g%3E%3Cg%3E%3Cpath fill='#c6c6c4' stroke='#c6c6c4' stroke-width='1px' d='M62 32.8c-.8 0-1.5-.7-1.5-1.5v-16c0-.8.7-1.5 1.5-1.5s1.5.7 1.5 1.5v16c0 .8-.7 1.5-1.5 1.5z'/%3E%3C/g%3E%3C/g%3E%3C/switch%3E%3C/svg%3E");
  background-position: 4px -9px !important;
  background-repeat: no-repeat;
  background-size: 67px;
}

button.dev-week:hover,
button.dev-week.highlight {
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 125'%3E%3Cswitch%3E%3Cg%3E%3Cpath fill='orangered' d='M71.5 86.2h-43a10 10 0 0 1-10-10v-43a10 10 0 0 1 10-10h43a10 10 0 0 1 10 10v43a10 10 0 0 1-10 10zm-43-60a7 7 0 0 0-7 7v43a7 7 0 0 0 7 7h43a7 7 0 0 0 7-7v-43a7 7 0 0 0-7-7h-43z'/%3E%3Cpath fill='orangered'  stroke='orangered' stroke-width='0px' d='M38 39.3c-3 0-5.5-2.5-5.5-5.5s2.5-5.5 5.5-5.5 5.5 2.5 5.5 5.5-2.5 5.5-5.5 5.5zm0-8c-1.4 0-2.5 1.1-2.5 2.5s1.1 2.5 2.5 2.5 2.5-1.1 2.5-2.5-1.1-2.5-2.5-2.5zM62 39.3c-3 0-5.5-2.5-5.5-5.5s2.5-5.5 5.5-5.5 5.5 2.5 5.5 5.5-2.5 5.5-5.5 5.5zm0-8c-1.4 0-2.5 1.1-2.5 2.5s1.1 2.5 2.5 2.5 2.5-1.1 2.5-2.5-1.1-2.5-2.5-2.5zM80 44.1H20c-.8 0-1.5-.7-1.5-1.5s.7-1.5 1.5-1.5h60c.8 0 1.5.7 1.5 1.5s-.7 1.5-1.5 1.5zM63.2 65.2h-25c-.8 0-1.5-.7-1.5-1.5s.7-1.5 1.5-1.5h25c.8 0 1.5.7 1.5 1.5s-.7 1.5-1.5 1.5z'/%3E%3Cpath stroke='orangered' fill='orangered'  stroke-width='1px' d='M36.8 67.4l-.8-.2c-.7-.4-.9-1.4-.5-2.1l.9-1.4-.9-1.4c-.4-.7-.2-1.6.5-2.1.7-.4 1.6-.2 2.1.5l1.4 2.2c.3.5.3 1.1 0 1.6l-1.4 2.2c-.3.5-.8.7-1.3.7zM48.8 76.4L46.1 75l5.8-11.3-5.8-11.3c-.4-.7-.1-1.6.6-2 .7-.4 1.6-.1 2 .6L55 63l.2.7-6.4 12.7z'/%3E%3Cg%3E%3Cpath fill='orangered'  stroke='orangered' stroke-width='1px' d='M38 32.8c-.8 0-1.5-.7-1.5-1.5v-16c0-.8.7-1.5 1.5-1.5s1.5.7 1.5 1.5v16c0 .8-.7 1.5-1.5 1.5z'/%3E%3C/g%3E%3Cg%3E%3Cpath stroke='orangered' fill='orangered'  stroke-width='1px' d='M62 32.8c-.8 0-1.5-.7-1.5-1.5v-16c0-.8.7-1.5 1.5-1.5s1.5.7 1.5 1.5v16c0 .8-.7 1.5-1.5 1.5z'/%3E%3C/g%3E%3C/g%3E%3C/switch%3E%3C/svg%3E");
  background-position: 3px 3px;
  background-repeat: no-repeat;
  background-size: 67px;
}

button.team-cycle {
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 125'%3E%3Cpath fill='#c6c6c4' stroke='white' stroke-width='1px' d='M50 5c-5 0-9 4-9 9s4 9 9 9 9-4 9-9-4-9-9-9zm0 6a3 3 0 0 1 3 3 3 3 0 0 1-3 3 3 3 0 0 1-3-3 3 3 0 0 1 3-3zm0 13c-4.6 0-8.9 1-12.2 3-3.2 2-5.8 5.2-5.8 9v9a3 3 0 0 0 3 3h30a3 3 0 0 0 3-3v-9c0-3.8-2.6-7-5.8-9-3.3-2-7.6-3-12.2-3zm0 6c3.7 0 7 1 9 2.2 2.2 1.3 3 2.6 3 3.8v6H38v-6c0-1.2.8-2.5 3-3.8 2-1.3 5.3-2.2 9-2.2zm0 20a3 3 0 0 0-3 3v8.3l-8.5 5.1a3 3 0 1 0 3 5.2l8.5-5.1 8.5 5a3 3 0 1 0 3-5L53 61.2V53a3 3 0 0 0-3-3zm-27 2c-5 0-9 4-9 9s4 9 9 9 9-4 9-9-4-9-9-9zm54 0c-5 0-9 4-9 9s4 9 9 9 9-4 9-9-4-9-9-9zm-54 6a3 3 0 0 1 3 3 3 3 0 0 1-3 3 3 3 0 0 1-3-3 3 3 0 0 1 3-3zm54 0a3 3 0 0 1 3 3 3 3 0 0 1-3 3 3 3 0 0 1-3-3 3 3 0 0 1 3-3zM23 71c-4.6 0-8.9 1-12.2 3C7.6 76 5 79.2 5 83v9a3 3 0 0 0 3 3h30a3 3 0 0 0 3-3v-9c0-3.8-2.6-7-5.8-9-3.3-2-7.6-3-12.2-3zm54 0c-4.6 0-8.9 1-12.2 3-3.2 2-5.8 5.2-5.8 9v9a3 3 0 0 0 3 3h30a3 3 0 0 0 3-3v-9c0-3.8-2.6-7-5.8-9-3.3-2-7.6-3-12.2-3zm-54 6c3.7 0 7 1 9 2.2 2.2 1.3 3 2.6 3 3.8v6H11v-6c0-1.2.8-2.5 3-3.8 2-1.3 5.3-2.2 9-2.2zm54 0c3.7 0 7 1 9 2.2 2.2 1.3 3 2.6 3 3.8v6H65v-6c0-1.2.8-2.5 3-3.8 2-1.3 5.3-2.2 9-2.2z' color='%23000' overflow='visible' style='text-indent:0;text-transform:none;block-progression:tb'/%3E%3C/svg%3E");

  background-position: 10px 2px;
  background-repeat: no-repeat;
  background-size: 47px;
}

button.team-cycle:hover,
button.team-cycle.highlight {
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 125'%3E%3Cpath fill='orangered' stroke='white' stroke-width='1px' d='M50 5c-5 0-9 4-9 9s4 9 9 9 9-4 9-9-4-9-9-9zm0 6a3 3 0 0 1 3 3 3 3 0 0 1-3 3 3 3 0 0 1-3-3 3 3 0 0 1 3-3zm0 13c-4.6 0-8.9 1-12.2 3-3.2 2-5.8 5.2-5.8 9v9a3 3 0 0 0 3 3h30a3 3 0 0 0 3-3v-9c0-3.8-2.6-7-5.8-9-3.3-2-7.6-3-12.2-3zm0 6c3.7 0 7 1 9 2.2 2.2 1.3 3 2.6 3 3.8v6H38v-6c0-1.2.8-2.5 3-3.8 2-1.3 5.3-2.2 9-2.2zm0 20a3 3 0 0 0-3 3v8.3l-8.5 5.1a3 3 0 1 0 3 5.2l8.5-5.1 8.5 5a3 3 0 1 0 3-5L53 61.2V53a3 3 0 0 0-3-3zm-27 2c-5 0-9 4-9 9s4 9 9 9 9-4 9-9-4-9-9-9zm54 0c-5 0-9 4-9 9s4 9 9 9 9-4 9-9-4-9-9-9zm-54 6a3 3 0 0 1 3 3 3 3 0 0 1-3 3 3 3 0 0 1-3-3 3 3 0 0 1 3-3zm54 0a3 3 0 0 1 3 3 3 3 0 0 1-3 3 3 3 0 0 1-3-3 3 3 0 0 1 3-3zM23 71c-4.6 0-8.9 1-12.2 3C7.6 76 5 79.2 5 83v9a3 3 0 0 0 3 3h30a3 3 0 0 0 3-3v-9c0-3.8-2.6-7-5.8-9-3.3-2-7.6-3-12.2-3zm54 0c-4.6 0-8.9 1-12.2 3-3.2 2-5.8 5.2-5.8 9v9a3 3 0 0 0 3 3h30a3 3 0 0 0 3-3v-9c0-3.8-2.6-7-5.8-9-3.3-2-7.6-3-12.2-3zm-54 6c3.7 0 7 1 9 2.2 2.2 1.3 3 2.6 3 3.8v6H11v-6c0-1.2.8-2.5 3-3.8 2-1.3 5.3-2.2 9-2.2zm54 0c3.7 0 7 1 9 2.2 2.2 1.3 3 2.6 3 3.8v6H65v-6c0-1.2.8-2.5 3-3.8 2-1.3 5.3-2.2 9-2.2z' color='%23000' overflow='visible'/%3E%3C/svg%3E");

  background-position: 10px 2px;
  background-repeat: no-repeat;
  background-size: 47px;
}

button.paid-freelance {
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 125'%3E%3Cpath fill='#c6c6c4' d='M56.5 47.4l19.7 7.1c1.6.6 3-1.3 2-2.7A200.6 200.6 0 0 1 53.6 8a3.8 3.8 0 0 0-7.1 0 204.8 204.8 0 0 1-24.6 43.8c-1.1 1.4.3 3.3 2 2.7l19.7-7.1c-2.9 23.1-13.3 34.2-33.3 35.8-3 .2-5.3 2.6-5.3 5.6 0 3.3 2.8 5.9 6 5.6 19.4-1.5 32.4-10.5 39.1-27.2C57 83.7 70 92.8 89 94.4c3.2.3 6-2.4 6-5.6 0-2.9-2.3-5.4-5.2-5.6-19.7-1.7-30.4-13-33.3-35.8z'/%3E%3C/svg%3E");

  background-position: 3px 3px;
  background-repeat: no-repeat;
  background-size: 44px;
}

button.paid-freelance:hover,
button.paid-freelance.highlight {
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 125'%3E%3Cpath fill='orangered' d='M56.5 47.4l19.7 7.1c1.6.6 3-1.3 2-2.7A200.6 200.6 0 0 1 53.6 8a3.8 3.8 0 0 0-7.1 0 204.8 204.8 0 0 1-24.6 43.8c-1.1 1.4.3 3.3 2 2.7l19.7-7.1c-2.9 23.1-13.3 34.2-33.3 35.8-3 .2-5.3 2.6-5.3 5.6 0 3.3 2.8 5.9 6 5.6 19.4-1.5 32.4-10.5 39.1-27.2C57 83.7 70 92.8 89 94.4c3.2.3 6-2.4 6-5.6 0-2.9-2.3-5.4-5.2-5.6-19.7-1.7-30.4-13-33.3-35.8z'/%3E%3C/svg%3E");
  background-position: 3px 3px;
  background-repeat: no-repeat;
  background-size: 44px;
}
</style>

<style lang="scss" scoped>
@import "assets/home.scss";
</style>