<script setup></script>
<template>
  <div>
    <div class="container">
      <div class="row">
        <div class="col-12 col-sm-6">
          <li
            class="nav js-nav-active flex-1 items-center border-b-4 border-transparent lg:mr-6 lg:flex-grow-0"
            id="n1"
          >
            <a
              href="javascript:;"
              class="flex justify-center px-10 py-4 lg:px-20"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-[30px] w-[30px] text-fb"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"
                />
              </svg>
            </a>
          </li>
        </div>
        <div class="col-12 col-sm-6">
          <li
            class="nav js-nav-active flex-1 items-center border-b-4 border-transparent lg:mr-6 lg:flex-grow-0"
            id="n1"
          >
            <a
              href="javascript:;"
              class="flex justify-center px-10 py-4 lg:px-20"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-[30px] w-[30px] text-fb"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"
                />
              </svg>
            </a>
          </li>
        </div>
      </div>
    </div>
    <br />
    <h1 class="bg-slate-500 text-3xl font-bold text-blue-700 underline">
      Hello world!
    </h1>
    <br />
    <a href="#" class="">白爛貓</a>
    <div class="card">麻樹box</div>
  </div>
</template>
<style lang="scss" scoped>
h1 {
  font-size: 24px;
}

.card {
  @include bgColor(green);

  color: var.$primary;
  font-size: pxToVw(16);
  width: 16rem;
}
</style>
