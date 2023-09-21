<template>
  <main class="min-h-full">
    <header class="bg-white border-b border-gray-0 py-10">
      <div class="container">
        <div class="flex items-center justify-between gap-x-40">
          <NuxtLink to="/" class="flex items-center">
            <img src="~/assets/icons/logo.svg" alt="DM" loading="lazy"/>
          </NuxtLink>
          <div class="flex-1 flex items-center gap-x-8">
            <search />
            <div class="flex items-center justify-center border border-gray-0 rounded-full w-11 h-11">
              <img src="~/assets/icons/gray-heart.svg" alt="DM" loading="lazy"/>
            </div>
          </div>
        </div>
      </div>
    </header>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
    <footer class="bg-white pt-20">
      <div class="container">
        <div class="flex items-start justify-between pb-10">
          <div>
            <NuxtLink to="/" class="flex items-center mb-4">
              <img src="~/assets/icons/logo.svg" alt="DM" loading="lazy"/>
            </NuxtLink>
            <p class="text-footer text-base font-medium">Our vision is to provide convenience <br /> and help increase your sales business.</p>
          </div>
          <div class="flex items-start gap-x-16">
            <div>
              <h3 class="text-xl font-semibold mb-8">About</h3>
              <ul class="grid gap-y-5">
                <li>
                  <a href="#" class="text-footer text-base font-medium leading-none">How it works</a>
                </li>
                <li>
                  <a href="#" class="text-footer text-base font-medium leading-none">Featured</a>
                </li>
                <li>
                  <a href="#" class="text-footer text-base font-medium leading-none">Partnership</a>
                </li>
                <li>
                  <a href="#" class="text-footer text-base font-medium leading-none">Bussiness Relation</a>
                </li>
              </ul>
            </div>
            <div>
              <h3 class="text-xl font-semibold mb-8">Community</h3>
              <ul class="grid gap-y-5">
                <li>
                  <a href="#" class="text-footer text-base font-medium leading-none">Events</a>
                </li>
                <li>
                  <a href="#" class="text-footer text-base font-medium leading-none">Blog</a>
                </li>
                <li>
                  <a href="#" class="text-footer text-base font-medium leading-none">Podcast</a>
                </li>
                <li>
                  <a href="#" class="text-footer text-base font-medium leading-none">Invite a friend</a>
                </li>
              </ul>
            </div>
            <div>
              <h3 class="text-xl font-semibold mb-8">Socials</h3>
              <ul class="grid gap-y-5">
                <li>
                  <a href="#" class="text-footer text-base font-medium leading-none">Discord</a>
                </li>
                <li>
                  <a href="#" class="text-footer text-base font-medium leading-none">Instagram</a>
                </li>
                <li>
                  <a href="#" class="text-footer text-base font-medium leading-none">Twitter</a>
                </li>
                <li>
                  <a href="#" class="text-footer text-base font-medium leading-none">Facebook</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div class="container">
        <div class="border-t border-gray-0 py-9">
          <div class="flex items-center justify-between">
            <p class="text-base font-semibold">&copy; {{ getFullYear }} DM. All rights reserved</p>
            <div class="flex items-center gap-x-16">
              <a href="#" class="text-base font-semibold capitalize">Privacy & Policy</a>
              <a href="#" class="text-base font-semibold capitalize">Terms & Condition</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  </main>
</template>

<script>
  import Search from '~/components/search.vue'
  export default {
    components: {
      Search
    },
    setup () {
      const getFullYear = computed(() => new Date().getFullYear())
      return {
        getFullYear
      }
    }
  }
</script>