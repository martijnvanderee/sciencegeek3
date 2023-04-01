<script setup ts="lang">
import { storeToRefs } from "pinia";
import { useToggleStore } from "../state/useToggle";
const list = [0, 1, 2, 3, 4, 5];

const store = useToggleStore();
const { state } = storeToRefs(store);
const { toggle } = store;
</script>

<template>
  <div class="drawer">
    <input id="my-drawer" type="checkbox" class="drawer-toggle" />
    <div class="drawer-content">
      <!-- Page content here -->

      <Navbar />

      <section>
        <div class="content">
          <div class="max-w-5xl mx-auto px-2">
            <div class="row">
              <div class="col-sm-12">
                <article class="prose prose-zinc">
                  <h2 class="ml-1 my-2">Niet te missen</h2>
                </article>

                <div class="grid md:grid-cols-3 md:gap-4">
                  <div v-for="product in list" :key="product._path">
                    <div>
                      <CardMobile />
                    </div>
                  </div>
                </div>
                <div class="divider"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
    <div class="drawer-side">
      <label for="my-drawer" class="drawer-overlay"></label>
      <ul class="menu p-4 w-80 bg-base-100 text-base-content">
        <!-- Sidebar content here -->
        <li><a>Sidebar Item 1</a></li>
        <li><a>Sidebar Item 2</a></li>
      </ul>
    </div>
  </div>
</template>
