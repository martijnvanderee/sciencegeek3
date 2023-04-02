<script setup lang="ts">
import { Post } from "../types";

interface Post {
  title: string;
  subtitle?: string;
  date: Date;
  onderwerp: string;
  auteur: string;
  tags: string[];
  html: string;
  headerPhoto: string;
  slug: string;
  body: any;
  path: string;
}

const props = defineProps<Post>();

console.log(props.headerPhoto, "headerPhoto");
</script>

<template>
  <NuxtLink :to="props.path">
    <div class="card glass cursor-pointer">
      <figure>
        <img src="//v2.grommet.io/assets/Wilderpeople_Ricky.jpg" alt="car!" />
      </figure>
      <div class="p-2">
        <h2 class="card-title">{{ props.title }}</h2>
        <p>Human</p>

        <div class="card-actions justify-end mt-1">
          <div class="badge badge-outline">Fashion</div>
          <div class="badge badge-outline">Products</div>
        </div>
      </div>
    </div>
  </NuxtLink>
</template>
