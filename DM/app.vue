<template>
  <main class="min-h-full">
    <header class="bg-white border-b border-gray-0 py-6 lg:py-10">
      <div class="container">
        <div class="flex items-center justify-between flex-col gap-y-4 lg:gap-y-0 lg:flex-row lg:gap-x-40">
          <div class="flex items-center justify-between w-full lg:w-auto">
            <NuxtLink to="/" class="flex items-center">
              <img src="~/assets/icons/logo.svg" alt="DM" loading="lazy"/>
            </NuxtLink>
            <div class="flex items-center justify-center border border-gray-0 rounded-full w-11 h-11 lg:hidden">
              <img src="~/assets/icons/gray-heart.svg" alt="DM" loading="lazy"/>
            </div>
          </div>
          <div class="flex-1 flex items-center gap-x-8 w-full lg:w-auto">
            <search />
            <div class="hidden items-center justify-center border border-gray-0 rounded-full w-11 h-11 lg:flex">
              <img src="~/assets/icons/gray-heart.svg" alt="DM" loading="lazy"/>
            </div>
          </div>
        </div>
      </div>
    </header>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
    <footer class="bg-white pt-6 lg:pt-10">
      <div class="container">
        <div class="flex flex-col items-start justify-between pb-10 lg:flex-row">
          <div class="mb-8 lg:mb-0">
            <NuxtLink to="/" class="flex items-center mb-4">
              <img src="~/assets/icons/logo.svg" alt="DM" loading="lazy"/>
            </NuxtLink>
            <p class="text-gray-50 text-sm font-medium leading-normal lg:text-footer lg:text-base">Our vision is to provide convenience <br class="hidden lg:block" /> and help increase your sales business.</p>
          </div>
          <div class="grid grid-cols-2 items-start w-full gap-10 lg:gap-y-0 lg:flex lg:gap-x-16 lg:w-auto">
            <div>
              <h3 class="text-xl font-semibold mb-5 lg:mb-8">About</h3>
              <ul class="grid gap-y-5">
                <li>
                  <a href="#" class="text-gray-50 text-base font-medium leading-none lg:text-footer">How it works</a>
                </li>
                <li>
                  <a href="#" class="text-gray-50 text-base font-medium leading-none lg:text-footer">Featured</a>
                </li>
                <li>
                  <a href="#" class="text-gray-50 text-base font-medium leading-none lg:text-footer">Partnership</a>
                </li>
                <li>
                  <a href="#" class="text-gray-50 text-base font-medium leading-none lg:text-footer">Bussiness Relation</a>
                </li>
              </ul>
            </div>
            <div>
              <h3 class="text-xl font-semibold mb-5 lg:mb-8">Community</h3>
              <ul class="grid gap-y-5">
                <li>
                  <a href="#" class="text-gray-50 text-base font-medium leading-none lg:text-footer">Events</a>
                </li>
                <li>
                  <a href="#" class="text-gray-50 text-base font-medium leading-none lg:text-footer">Blog</a>
                </li>
                <li>
                  <a href="#" class="text-gray-50 text-base font-medium leading-none lg:text-footer">Podcast</a>
                </li>
                <li>
                  <a href="#" class="text-gray-50 text-base font-medium leading-none lg:text-footer">Invite a friend</a>
                </li>
              </ul>
            </div>
            <div>
              <h3 class="text-xl font-semibold mb-5 lg:mb-8">Socials</h3>
              <ul class="grid gap-y-5">
                <li>
                  <a href="#" class="text-gray-50 text-base font-medium leading-none lg:text-footer">Discord</a>
                </li>
                <li>
                  <a href="#" class="text-gray-50 text-base font-medium leading-none lg:text-footer">Instagram</a>
                </li>
                <li>
                  <a href="#" class="text-gray-50 text-base font-medium leading-none lg:text-footer">Twitter</a>
                </li>
                <li>
                  <a href="#" class="text-gray-50 text-base font-medium leading-none lg:text-footer">Facebook</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div class="container">
        <div class="border-t border-gray-0 py-6 lg:py-9">
          <div class="flex items-center justify-between flex-col-reverse gap-y-6 lg:gap-y-0 lg:flex-row">
            <p class="text-base font-semibold">&copy; {{ getFullYear }} DM. All rights reserved</p>
            <div class="flex items-center justify-between w-full lg:justify-start lg:gap-x-16 lg:w-auto">
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