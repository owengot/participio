<template>

  <div id='realities'>
    <div class="hero">
      <div class="logo">
        <p>Decentralised organisations and co-created events without traditional top-down management</p>

        <div class="dev">
          <div class="react">
            React
          </div>
          <div class="graphql">
            GraphQL
          </div>
          <div class="github">
            View on Github
          </div>
        </div>
      </div>

      <div class="stats">
        <div class="card contributors">
          <p class="border">
            <countTo
              :startVal='1'
              :endVal='contributors.length'
              :decimals="0"
              :duration='1000'
              class="bold"
            ></countTo> Contributors
          </p>
          <div class="avatars">
            <img
              v-for="contributor in contributors"
              :src='contributor.avatar_url'
              class="avatar"
            />
          </div>

          <svg
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            x="0px"
            y="0px"
            viewBox="0 0 43.1 85.9"
            style="enable-background:new 0 0 43.1 85.9;"
            xml:space="preserve"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              class="st0 draw-arrow"
              d="M11.3,2.5c-5.8,5-8.7,12.7-9,20.3s2,15.1,5.3,22c6.7,14,18,25.8,31.7,33.1"
            />
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              class="draw-arrow tail-1"
              d="M40.6,78.1C39,71.3,37.2,64.6,35.2,58"
            />
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              class="draw-arrow tail-2"
              d="M39.8,78.5c-7.2,1.7-14.3,3.3-21.5,4.9"
            />
          </svg>
        </div>

        <div class="card commits">
          <p>
            <countTo
              :startVal='1'
              :endVal='commits'
              :decimals="0"
              :duration='3000'
              class="bold"
            ></countTo> Commits
          </p>

          <svg
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            x="0px"
            y="0px"
            viewBox="0 0 43.1 85.9"
            style="enable-background:new 0 0 43.1 85.9;"
            xml:space="preserve"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              class="st0 draw-arrow"
              d="M11.3,2.5c-5.8,5-8.7,12.7-9,20.3s2,15.1,5.3,22c6.7,14,18,25.8,31.7,33.1"
            />
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              class="draw-arrow tail-1"
              d="M40.6,78.1C39,71.3,37.2,64.6,35.2,58"
            />
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              class="draw-arrow tail-2"
              d="M39.8,78.5c-7.2,1.7-14.3,3.3-21.5,4.9"
            />
          </svg>

        </div>

        <div class="card code">
          <p>
            <countTo
              :startVal='1'
              :endVal='code_frequency'
              :decimals="0"
              :duration='3000'
              class="bold"
            ></countTo> Lines of code commited
          </p>
        </div>

      </div>

    </div>

    <div class="flex-container intro">

      <div class="flex-grid">

        <div class="col introduction">
          <h3>We're building a tool for decentralised organizations to keep track of their structure while helping them make decisions. </h3>

          <img
            class="node"
            src="node2_animated.svg"
          />
          <p>In such organisations, work is not organised in a top down way. Instead, everyone in the organisation is allowed to make decisions as long as they seek advice from key stakeholders. Identifying those stakeholders and making sure you've sought their advice can be cumbersome and difficult, especially without deep knowledge about an organisation. Realities is a tool which aims to meet that challenge.</p>

        </div>
        <div class="col">

          <div class="hackathon">
            <div class="medenine">
              <div class="credits">
                <div id="participio_logo"> </div>
                <div id="er_logo"> </div>
                <div id="kulturbryggan_logo"> </div>

              </div>

            </div>
            <p>The Realities platform is part of <nuxt-link to='/'>Participio</nuxt-link>, a brand new development lab initiated by <a
                href='http://edgeryders.eu'
                target='_blank'
              >Edgeryders</a> with funding from <a
                href='https://www.konstnarsnamnden.se/kulturbryggan'
                target='_blank'
              >Kulturbryggan</a>. The purpose of Participio is to develop experimental software and methodology for decentralized organizations and co-created culture. If you're interested in contibuting to this project, simply join us on Edgeryders and <a href='http://edgeryders.eu/c/participio'>make an introduction post</a>. </p>
          </div>

        </div>
      </div>

    </div>

    <div class="section timeline">
      <h2>Development Timeline</h2>

      <div class="slider">

        <div class="slides">

          <a
            :href="'http://edgeryders.eu/t/' + article.slug"
            v-for=" article in topics"
            v-if="article.pinned == false"
            target="_blank"
          >
            <div class="slide">
              <div class="post-date">{{ article.created_at.split("T")[0] | formatDateString }}</div>
              <div class="post-title">{{ article.title }}</div>
              <div class="post-contributors">
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
          </a>

        </div>
      </div>

    </div>

    <div class="flex-container">

      <div class="flex-grid">

        <div class="col">

          <div class="section functionality">

            <h2>Core Functionality</h2>

            <img
              src="node42.svg"
              class="connected_node"
            />
            <p class="introduction">We want to build a tool that makes it as easy as possible for community leaders to find and claim their place, and in doing so, change the very structure of the organization. We also want to make sure that if they leave, the structure doesn't collapse in their absence. For this, Realities uses the <a
                href='http://www.reinventingorganizationswiki.com/Decision_Making'
                target='_blank'
              >Advice Process and TEAL organisations</a> as it's point of departure.</p>
            <p>Realities should give users the ability to create Needs and then Responsibilities and to assign a Guide and a Realiser to each Need and Responsibility. Needs and Responsibilities are connected by Dependencies which clarify how they are connected. Creating and assigning Needs and Responsibilities and connecting them with Dependencies should be simple and intuitive. The UI of the software should also transparently indicate the correlations of these elements to each other for a faster overview of the larger scope, for example by drawing graphs and connecting them to each other.</p>

            <p>The Realities platform harnesses the information held by an organization's members to model what that organizations does. "Model" here means two things: breaking down the organization's work into activities and mapping out how they are interlocked; and associating activities to people who are responsible for carrying them out. This model is stored in digital form and displayed in an easily navigable node view.

              <p>Realities uses a graph database to do this, so its logic mirrors the human logic of “who is responsible for what” and “what depends on what”. This graph is easy to simplify and manipulate to obtain human-readable information.</p>

          </div>

        </div>

        <div class="col">

          <div class="section terminology">
            <h2>Terminology</h2>

            <div
              v-if="$mq >= 'md'"
              :class="$mq"
            >
              <no-ssr>
                <Flickity
                  ref="flickityTerms"
                  :options="flickityOptions"
                  class="projects-slider"
                >

                  <div class="entry need">

                    <h3>Need</h3>
                    <p class="definition">A concrete and defined condition that needs to be true for a user to fulfill a task.</p>

                  </div>

                  <div class="entry responsibility">

                    <h3>Responsibility</h3>
                    <p class="definition">A role or task that a user can assign herself which partially or completely fulfils a Need.</p>

                  </div>

                  <div class="entry dependency">
                    <h3>Dependency</h3>
                    <p class="definition">A directed relation between a Need and Responsibility, between two Needs or between two Responsibilities.</p>

                  </div>

                  <div class="entry realiser">
                    <h3>Realiser</h3>
                    <p class="definition">A user who is assigned either to coordinate many Responsibilities needed to completely fulfill a Need, or to carry out a Responsibility.</p>

                  </div>

                  <div class="entry guide">
                    <h3>Guide</h3>
                    <p class="definition">A user who is assigned to make sure that a specific Need or Responsibility has an active and competent Realiser. This may include defining requirements and headhunting for a suitable Realiser. It is the task of the Reality Guide to find a new Realiser if one drops out from one of the Responsibilities that Reality Guide is responsible for.</p>

                  </div>

                </Flickity>
              </no-ssr>
            </div>
            <div
              v-else
              class="definitions"
            >

              <div class="entry need">

                <h3>Need</h3>
                <p class="definition">A concrete and defined condition that needs to be true for a user to fulfill a task.</p>

              </div>

              <div class="entry responsibility">

                <h3>Responsibility</h3>
                <p class="definition">A role or task that a user can assign herself which partially or completely fulfils a Need.</p>

              </div>

              <div class="entry dependency">
                <h3>Dependency</h3>
                <p class="definition">A directed relation between a Need and Responsibility, between two Needs or between two Responsibilities.</p>

              </div>

              <div class="entry realiser">
                <h3>Realiser</h3>
                <p class="definition">A user who is assigned either to coordinate many Responsibilities needed to completely fulfill a Need, or to carry out a Responsibility.</p>

              </div>

              <div class="entry guide">
                <h3>Guide</h3>
                <p class="definition">A user who is assigned to make sure that a specific Need or Responsibility has an active and competent Realiser. This may include defining requirements and headhunting for a suitable Realiser. It is the task of the Reality Guide to find a new Realiser if one drops out from one of the Responsibilities that Reality Guide is responsible for.</p>

              </div>

            </div>

          </div>
        </div>

      </div>

    </div>

    <div class="flex-container">

      <div class="flex-grid">

        <div class="col">

          <div class="section guidelines">
            <h2>Development Guidelines</h2>

            <div
              v-if="$mq >= 'md'"
              :class="$mq"
            >

              <no-ssr>
                <Flickity
                  ref="flickityGuidelines"
                  :options="flickityOptions"
                  class="guidelines-slider"
                >

                  <div>It all starts from a <span
                      class="need"
                      style="margin-right: 7px"
                    >Need</span>: There must always be a Need initialised for other elements to relate to it (Responsibility, Reality Guide, Realiser etc).</div>

                  <div>A Need element has: A <span class="guide">Guide</span>, a <span class="realiser">Realiser</span>, a title, a description, a link to where discussion of the Need happens, a list of <span class="dependency">Dependencies</span>.</div>

                  <div>A Need cannot be created without a <span class="guide">Reality Guide</span> assigned to it, and the person creating the Need automatically becomes the first Reality Guide for that Need.</div>

                  <div>A <span class="responsibility">Responsibility</span> has: A <span class="need">Need</span> (<i>required</i>), a <span class="guide">Reality Guide</span> (automatically becomes the user creating the Responsibility, but can be reassigned), a <span class="realiser">Realiser</span>, a title, a description, a link to where discussion of the Responsibility happens, a list of <span class="dependency">Dependencies</span>.</div>

                  <div>Every <span class="need">Need</span> and <span class="responsibility">Responsibility</span> can also connect to other Needs and Responsibilities through <span class="dependency">Dependencies</span>. A Dependency is directed so that one element is <b>Dependent On</b> another element. Dependencies are added to <span class="need">Needs</span> or <span class="responsibility">Responsibilities</span> by selecting from all existing elements. Dependencies are tools to understand how elements fit together, but <b>do not block any functionality</b>.</div>

                  <div>Each <span class="need">Need</span> and <span class="responsibility">Responsibility</span> can <b>only have one <span class="guide">Guide</span> and one <span class="realiser">Realiser</span></b>. This principle is in place so bystander effect is minimized. We want for individuals to be empowered and be held accountable when holding a responsibility and have it as clear as possible who to contact when inquiring about some aspect of organization.</div>

                </Flickity>
              </no-ssr>

            </div>

            <div v-else>

              <ul>
                <li>It all starts from a <span
                    class="need"
                    style="margin-right: 7px"
                  >Need</span>: There must always be a Need initialised for other elements to relate to it (Responsibility, Reality Guide, Realiser etc).</li>

                <li>A Need element has: A <span class="guide">Guide</span>, a <span class="realiser">Realiser</span>, a title, a description, a link to where discussion of the Need happens, a list of <span class="dependency">Dependencies</span>.</li>

                <li>A Need cannot be created without a <span class="guide">Reality Guide</span> assigned to it, and the person creating the Need automatically becomes the first Reality Guide for that Need.</li>

                <li>A <span class="responsibility">Responsibility</span> has: A <span class="need">Need</span> (<i>required</i>), a <span class="guide">Reality Guide</span> (automatically becomes the user creating the Responsibility, but can be reassigned), a <span class="realiser">Realiser</span>, a title, a description, a link to where discussion of the Responsibility happens, a list of <span class="dependency">Dependencies</span>.</li>

                <li>Every <span class="need">Need</span> and <span class="responsibility">Responsibility</span> can also connect to other Needs and Responsibilities through <span class="dependency">Dependencies</span>. A Dependency is directed so that one element is <b>Dependent On</b> another element. Dependencies are added to <span class="need">Needs</span> or <span class="responsibility">Responsibilities</span> by selecting from all existing elements. Dependencies are tools to understand how elements fit together, but <b>do not block any functionality</b>.</li>

                <li>Each <span class="need">Need</span> and <span class="responsibility">Responsibility</span> can <b>only have one <span class="guide">Guide</span> and one <span class="realiser">Realiser</span></b>. This principle is in place so bystander effect is minimized. We want for individuals to be empowered and be held accountable when holding a responsibility and have it as clear as possible who to contact when inquiring about some aspect of organization.</li>

              </ul>

            </div>

            <p>The end-user experience should be made as simple as possible. Essentially their experience can be contained by answering these questions for them, “<b>How can I help?</b>”, “<b>What am I supposed to do next?</b>” and “<b>Who do I need to talk to?</b>”. The correlation between elements should be made visually explicit in a manner via which participants can easily grasp the big and small picture.</p>

          </div>

        </div>

        <div class="col">
          <div class="section">
            <div class="featured-posts">
              <div
                v-for=" article in topics.slice(0, 7)"
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
                  <div class="title">
                    <div class="post-link">
                      <a
                        :href='"https://edgeryders.eu/t/" + article.slug'
                        target="_blank"
                      >
                        {{ article.title }} <span class="date"> {{ article.created_at.split('T')[0] | formatDateString }} </span>

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

            </div>

          </div>

          <div class="section resources">
            <h2>Links &amp; Resources</h2>
            <a
              href="http://edgeryders.eu/t/realities-project-white-paper/"
              target="_blank"
            >
              <div class="link whitepaper">
                <p class="description">Project Whitepaper</p>
                <div class="url">
                  <p>http://edgeryders.eu/t/realities-project-white-paper/</p>
                </div>
              </div>
            </a>
            <a
              href="https://edgeryders.eu/t/realities-description-document/"
              target="_blank"
            >
              <div class="link description_doc">
                <p class="description">Description Paper</p>
                <div class="url">
                  <p>https://edgeryders.eu/t/realities-description-document</p>
                </div>

              </div>
            </a>

            <a
              href="http://realities-staging.herokuapp.com/"
              target="_blank"
            >
              <div class="link staging">
                <p class="description">Staging App</p>
                <div class="url">
                  <p>https://realities-staging.herokuapp.com</p>
                </div>
              </div>
            </a>

            <div class="contact">
              <p>Have any questions? Looking for answers? In addition to posting on Edgeryders, you can find us through the following channels..
              </p>

              <a
                href="https://gitter.im/realities/Lobby"
                class="gitter"
              >Gitter: Realities Lobby</a> <a
                href="https://twitter.com/Edgeryders"
                class="twitter"
              >Twitter</a> <a
                href="https://github.com/Edgeryders-Participio/realities"
                class="github"
              >Github</a>

            </div>

          </div>
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

export default {
  components: { countTo },
  data() {
    return {
      topics: "default",
      users: "0",
      views: "0",
      total: [],
      totalOfViews: 0,
      code_frequency: "",
      contributors: "",
      commits: "",
      totalLikes: 0,
      github: "",
      flickityOptions: {
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
  async asyncData({ query, error }) {
    let [res, github] = await Promise.all([
      axios.get("https://edgeryders.eu/c/participio/realities.json"),
      axios.get("https://participio-api.herokuapp.com")
    ]);
    return {
      topics: res.data.topic_list.topics,
      users: res.data.users,
      totalOfViews: res.data.topic_list.topics.reduce(
        (sum, currentItem) => currentItem.views + sum,
        0
      ),
      totalLikes: res.data.topic_list.topics.reduce(
        (sum, currentItem) => currentItem.like_count + sum,
        0
      ),
      commits: github.data[
        "repos/Edgeryders-Participio/realities/contributors"
      ].reduce((sum, currentItem) => currentItem.contributions + sum, 0),
      contributors:
        github.data["repos/Edgeryders-Participio/realities/contributors"],
      code_frequency: github.data[
        "repos/Edgeryders-Participio/realities/stats/code_frequency"
      ].reduce((sum, currentItem) => currentItem[1] + currentItem[2] + sum, 0)
    };
  },
  head: {}
};
</script>

<style lang="scss" scoped>
@import "assets/global.sass";
@import "assets/realities.scss";
</style>
