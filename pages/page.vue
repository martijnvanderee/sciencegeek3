<script setup ts="lang">
import { storeToRefs } from "pinia";
import { useToggleStore } from "../state/useToggle";
const list = [0, 1, 2, 3, 4, 5];

const store = useToggleStore();
const { state } = storeToRefs(store);
const { toggle } = store;
</script>

<template>
  <Navbar />
  state{{ state }}test

  <button class="btn btn-primary" @click="toggle">toggle</button>

  <div>
    <div class="content">
      <div class="max-w-5xl mx-auto px-2">
        <div class="row">
          <div class="col-sm-12">
            <article class="prose prose-zinc">
              <h2>Huishouden maakt mannen hot, in de ogen van vrouwen</h2>
              <h3>Lapzwansen krijgen weinig sex</h3>
              <p>
                Mannen die de stofzuigen en de ramen lappen, worden sexier
                gevonden door hun vrouw. Deze stellen hebben meer sex en zijn
                gelukkiger. Vrouwen die thuis met een lui “man-kind” zitten,
                vinden hun man afstotelijker en hebben minder zin in sex.
              </p>
            </article>
          </div>
        </div>
      </div>
    </div>
  </div>

  <Footer />
</template>
