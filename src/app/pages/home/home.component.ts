import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  template: `
    <div class="relative bg-white overflow-hidden">
      <!-- Hero section -->
      <div class="pt-16 pb-80 sm:pt-24 sm:pb-40 lg:pt-40 lg:pb-48">
        <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 sm:static">
          <div class="sm:max-w-lg">
            <h1
              class="text-4xl font font-extrabold tracking-tight text-gray-900 sm:text-6xl"
            >
              Summer styles are finally here
            </h1>
            <p class="mt-4 text-xl text-gray-500">
              This year, our new summer collection will shelter you from the
              harsh elements of a world that doesn't care if you live or die.
            </p>
          </div>
          <div class="mt-10">
            <div class="mt-10">
              <a
                routerLink="/products"
                class="inline-block text-center bg-primary border border-transparent rounded-md py-3 px-8 font-medium text-white hover:bg-primary-dark"
              >
                Shop Collection
              </a>
            </div>
          </div>
        </div>
      </div>

      <!-- Featured section -->
      <div class="mt-8">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="max-w-2xl mx-auto py-16 sm:py-24 lg:py-32 lg:max-w-none">
            <h2 class="text-2xl font-extrabold text-gray-900">Collections</h2>

            <div
              class="mt-6 space-y-12 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-x-6"
            >
              <div class="group relative">
                <div
                  class="relative w-full h-80 bg-white rounded-lg overflow-hidden group-hover:opacity-75 sm:aspect-w-2 sm:aspect-h-1 sm:h-64 lg:aspect-w-1 lg:aspect-h-1"
                >
                  <img
                    src="https://images.pexels.com/photos/32278975/pexels-photo-32278975/free-photo-of-majestic-gelada-baboon-posing-in-nature.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
                    alt="Collection"
                    class="w-full h-full object-center object-cover"
                  />
                </div>
                <h3 class="mt-6 text-sm text-gray-500">
                  <a href="#">
                    <span class="absolute inset-0"></span>
                    Desk and Office
                  </a>
                </h3>
                <p class="text-base font-semibold text-gray-900">
                  Work from home accessories
                </p>
              </div>

              <div class="group relative">
                <div
                  class="relative w-full h-80 bg-white rounded-lg overflow-hidden group-hover:opacity-75 sm:aspect-w-2 sm:aspect-h-1 sm:h-64 lg:aspect-w-1 lg:aspect-h-1"
                >
                  <img
                    src="https://images.pexels.com/photos/32278975/pexels-photo-32278975/free-photo-of-majestic-gelada-baboon-posing-in-nature.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
                    alt="Collection"
                    class="w-full h-full object-center object-cover"
                  />
                </div>
                <h3 class="mt-6 text-sm text-gray-500">
                  <a href="#">
                    <span class="absolute inset-0"></span>
                    Self-Improvement
                  </a>
                </h3>
                <p class="text-base font-semibold text-gray-900">
                  Journals and note-taking
                </p>
              </div>

              <div class="group relative">
                <div
                  class="relative w-full h-80 bg-white rounded-lg overflow-hidden group-hover:opacity-75 sm:aspect-w-2 sm:aspect-h-1 sm:h-64 lg:aspect-w-1 lg:aspect-h-1"
                >
                  <img
                    src="https://images.pexels.com/photos/32278975/pexels-photo-32278975/free-photo-of-majestic-gelada-baboon-posing-in-nature.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
                    alt="Collection"
                    class="w-full h-full object-center object-cover"
                  />
                </div>
                <h3 class="mt-6 text-sm text-gray-500">
                  <a href="#">
                    <span class="absolute inset-0"></span>
                    Travel
                  </a>
                </h3>
                <p class="text-base font-semibold text-gray-900">
                  Daily commute essentials
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
})
export class HomeComponent {}
