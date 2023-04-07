<script setup lang="ts"></script>

<template>
  <ContentQuery :path="$route.path" v-slot="{ data }">
    <Navbar />
    <main>
      <article class="prose mx-auto">
        <nuxt-img :src="data[0].headerPhoto[0]" />
        {{ data[0]["headerPhoto name"] }}
        <h1>{{ data[0].title }}</h1>
        <h2>{{ data[0].Subtitle }}</h2>

        <ContentDoc />
        <div class="divider"></div>
      </article>
      <div class="content">
        <div class="max-w-5xl mx-auto px-2">
          <div class="row">
            <div v-if="data[0].tags.length === 1">
              <li v-for="item in data[0].tags[0].split(',')">
                {{ item }}
              </li>
            </div>
            <div v-else>
              <li>
                {{ data[0].tags[0] }}
              </li>
            </div>
            <div class="col-sm-12">lees ook</div>
            <div class="col-sm-12">Footer</div>
          </div>
        </div>
      </div>
    </main>
  </ContentQuery>
</template>
