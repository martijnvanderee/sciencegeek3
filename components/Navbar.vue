<template>
  <div class="sticky top-0 z-50">
    <div class="navbar bg-primary">
      <div class="navbar-start">
        <a class="btn btn-ghost normal-case text-xl text-white">daisyUI</a>
      </div>
      <div class="navbar-center hidden md:block">
        <button class="btn btn-sm btn-secondary m-1">Quirky</button>
        <button class="btn btn-sm btn-secondary m-1">Tech</button>
        <button class="btn btn-sm btn-secondary m-1">Nature</button>
        <button class="btn btn-sm btn-secondary m-1">Quirky</button>
        <button class="btn btn-sm btn-secondary m-1">Quirky</button>
        <button class="btn btn-sm btn-secondary m-1">Quirky</button>
        <button class="btn btn-sm btn-secondary m-1">Quirky</button>
        <div class="dropdown dropdown-hover dropdown-end">
          <label tabindex="0" class="btn btn-sm btn-secondary m-1"
            >Dropdown</label
          >
          <ul
            tabindex="0"
            class="menu dropdown-content p-2 shadow bg-base-100 rounded-box w-full mt-4"
          >
            <li><a>Item 1</a></li>
            <li><a>Item 2</a></li>
          </ul>
        </div>
      </div>
      <div class="navbar-end">
        <div class="dropdown flex mr-2">
          <label
            tabindex="0"
            for="my-drawer"
            class="btn btn-ghost btn-circle drawer-button text-white"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-8 w-8"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h7"
              />
            </svg>

            <p class="text-white text-xs">Menu</p>
          </label>
        </div>
        <button class="btn btn-ghost btn-circle text-white">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-8 w-8"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
          <p class="text-white text-xs">Zoeken</p>
        </button>
      </div>
    </div>

    <div class="bg-white md:invisible">
      <div class="carousel rounded-box">
        <div class="carousel-item m-1">
          <button class="btn btn-sm btn-secondary">Quirky</button>
        </div>
        <div class="carousel-item m-1">
          <button class="btn btn-sm btn-secondary">Quirky</button>
        </div>
        <div class="carousel-item m-1">
          <button class="btn btn-sm btn-secondary">Quirky</button>
        </div>
        <div class="carousel-item m-1">
          <button class="btn btn-sm btn-secondary">Quirky</button>
        </div>
        <div class="carousel-item m-1">
          <button class="btn btn-sm btn-secondary">Quirky</button>
        </div>
        <div class="carousel-item m-1">
          <button class="btn btn-sm btn-secondary">Quirky</button>
        </div>
        <div class="carousel-item m-1">
          <button class="btn btn-sm btn-secondary">Quirky</button>
        </div>
      </div>
    </div>
  </div>
</template>
