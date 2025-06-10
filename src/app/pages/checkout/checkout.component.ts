import { Component } from '@angular/core';

@Component({
  selector: 'app-checkout',
  standalone: true,
  template: `
    <div class="bg-gray-50 py-12">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="max-w-2xl mx-auto">
          <h1
            class="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl"
          >
            Checkout
          </h1>

          <form class="mt-12 space-y-8">
            <div class="bg-white p-8 rounded-lg shadow">
              <h2 class="text-lg font-medium text-gray-900">
                Contact Information
              </h2>

              <div class="mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-2">
                <div>
                  <label
                    for="first-name"
                    class="block text-sm font-medium text-gray-700"
                    >First name</label
                  >
                  <div class="mt-1">
                    <input
                      type="text"
                      id="first-name"
                      class="block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary sm:text-sm"
                    />
                  </div>
                </div>

                <div>
                  <label
                    for="last-name"
                    class="block text-sm font-medium text-gray-700"
                    >Last name</label
                  >
                  <div class="mt-1">
                    <input
                      type="text"
                      id="last-name"
                      class="block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary sm:text-sm"
                    />
                  </div>
                </div>

                <div class="sm:col-span-2">
                  <label
                    for="email"
                    class="block text-sm font-medium text-gray-700"
                    >Email address</label
                  >
                  <div class="mt-1">
                    <input
                      type="email"
                      id="email"
                      class="block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary sm:text-sm"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div class="bg-white p-8 rounded-lg shadow">
              <h2 class="text-lg font-medium text-gray-900">
                Payment Information
              </h2>

              <div class="mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-2">
                <div class="sm:col-span-2">
                  <label
                    for="card-number"
                    class="block text-sm font-medium text-gray-700"
                    >Card number</label
                  >
                  <div class="mt-1">
                    <input
                      type="text"
                      id="card-number"
                      class="block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary sm:text-sm"
                    />
                  </div>
                </div>

                <div>
                  <label
                    for="expiration-date"
                    class="block text-sm font-medium text-gray-700"
                    >Expiration date</label
                  >
                  <div class="mt-1">
                    <input
                      type="text"
                      id="expiration-date"
                      class="block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary sm:text-sm"
                      placeholder="MM / YY"
                    />
                  </div>
                </div>

                <div>
                  <label
                    for="cvc"
                    class="block text-sm font-medium text-gray-700"
                    >CVC</label
                  >
                  <div class="mt-1">
                    <input
                      type="text"
                      id="cvc"
                      class="block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary sm:text-sm"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div class="flex justify-end">
              <button
                type="submit"
                class="bg-primary text-white py-2 px-4 rounded-md hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
              >
                Complete Order
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  `,
})
export class CheckoutComponent {}
