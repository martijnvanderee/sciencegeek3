<script setup lang="ts">
import ErrorPage from "~/template/errorPage.vue";
import SubjectPage from "~/template/subjectPage.vue";
import { navRoutes } from "../util/constants";

const route = useRoute();

const path = route.path;
const currentRoute = navRoutes.find((route) => route.path === path);
</script>

<template>
  <SubjectPage v-if="currentRoute" />
  <ErrorPage v-else />
</template>
