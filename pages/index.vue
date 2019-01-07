<template>

  <div id='home'>
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

            <h3 class="objectives">Development objectives</h3>

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

            <div class="section brainstorms">

              <h3>Pitches & Brainstorms</h3>

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

            <div class="call-action">
              <p>You can start by simply introducing yourself on the platform and telling us how you're interested in participating..</p>
            </div>

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
            placeholder='Subscribe to our newsletter'
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

<style lang="scss" scoped>
@import "assets/home.scss";
</style>