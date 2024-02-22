<template>
  <div>
    <section class="pb-5 bg-hero">
      <b-container class="pt-5 mt-md-0 mt-5">
        <b-row>
          <b-col cols="12" lg="6" md="12" sm="12">
            <h1>
              Terminvergaben waren noch nie so <b>einfach!</b>
            </h1>
            <svg
              class="my-5 d-none d-md-block"
              width="487"
              height="34"
              viewBox="0 0 487 34"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4 30C73.6307 10.3798 266.914 -17.0885 483 30"
                stroke="#00A0F9"
                stroke-width="8"
                stroke-linecap="round"
              />
            </svg>

            <p class="hero-description">
              Erweitern Sie mit uns Ihre Erreichbarkeit und schaffen Sie ein einfaches und unkompliziertes Prozedere
            </p>
            <b-button variant="primary" class="btn-lg rounded-lg">App öffnen</b-button>
          </b-col>
          <br class="d-none d-sm-block" />
          <b-col cols="12" lg="6" md="8" sm="12">
            <div class="model" style="min-height: 23rem">
              <ModelHeader></ModelHeader>
            </div>
          </b-col>
        </b-row>
      </b-container>
    </section>
    <div class="bg-section">
      <section>
        <b-container class="pt-5 mt-5">
          <b-row>
            <b-col lg="6" md="6" sm="12">
              <h2>
                Was können Sie mit uns erreichen?
              </h2>
              <div class="d-flex flex-column mt-5">
                <div class="my-1 d-flex flex-row">
                  <svg
                    width="32"
                    height="32"
                    viewBox="0 0 32 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M16 32C24.8366 32 32 24.8366 32 16C32 7.16344 24.8366 0 16 0C7.16344 0 0 7.16344 0 16C0 24.8366 7.16344 32 16 32ZM15.6318 19.8961L21.8379 13.4961L20.4021 12.1039L14.8858 17.7926L11.5695 14.6357L10.1905 16.0843L14.2245 19.9243L14.9421 20.6074L15.6318 19.8961Z"
                      fill="#00A0F9"
                    />
                  </svg>
                  <p class="ml-2">Erhalten Sie Ihre eigene Studio-Webseite</p>
                </div>
                <div class="my-1 d-flex flex-row">
                  <svg
                    width="32"
                    height="32"
                    viewBox="0 0 32 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M16 32C24.8366 32 32 24.8366 32 16C32 7.16344 24.8366 0 16 0C7.16344 0 0 7.16344 0 16C0 24.8366 7.16344 32 16 32ZM15.6318 19.8961L21.8379 13.4961L20.4021 12.1039L14.8858 17.7926L11.5695 14.6357L10.1905 16.0843L14.2245 19.9243L14.9421 20.6074L15.6318 19.8961Z"
                      fill="#00A0F9"
                    />
                  </svg>
                  <p class="ml-2">Planen Sie Termine für Ihre Mitarbeiter</p>
                </div>
                <div class="my-1 d-flex flex-row">
                  <svg
                    width="32"
                    height="32"
                    viewBox="0 0 32 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M16 32C24.8366 32 32 24.8366 32 16C32 7.16344 24.8366 0 16 0C7.16344 0 0 7.16344 0 16C0 24.8366 7.16344 32 16 32ZM15.6318 19.8961L21.8379 13.4961L20.4021 12.1039L14.8858 17.7926L11.5695 14.6357L10.1905 16.0843L14.2245 19.9243L14.9421 20.6074L15.6318 19.8961Z"
                      fill="#00A0F9"
                    />
                  </svg>
                  <p class="ml-2">Werden Sie im Browser weit oben gelistet</p>
                </div>
                <div class="my-1 d-flex flex-row">
                  <svg
                    width="32"
                    height="32"
                    viewBox="0 0 32 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M16 32C24.8366 32 32 24.8366 32 16C32 7.16344 24.8366 0 16 0C7.16344 0 0 7.16344 0 16C0 24.8366 7.16344 32 16 32ZM15.6318 19.8961L21.8379 13.4961L20.4021 12.1039L14.8858 17.7926L11.5695 14.6357L10.1905 16.0843L14.2245 19.9243L14.9421 20.6074L15.6318 19.8961Z"
                      fill="#00A0F9"
                    />
                  </svg>
                  <p class="ml-2">Verkaufen Sie Gutscheine <b-badge variant="primary">BETA</b-badge></p>
                </div>
              </div>
            </b-col>
            <b-col lg="6" md="6" sm="12">
              <b-img
                alt="hero"
                :src="require(`~/assets/img/undraw_Booking_re_gw4j.png`)"
                class="img-fluid"
              ></b-img>
            </b-col>
          </b-row>
        </b-container>
      </section>
      <section class="pb-5">
        <ChoosePlan></ChoosePlan>
      </section>
    </div>
  </div>
</template>

<script>
import {
  BIconPlayFill,
  BIconArrowRight,
  BIconGithub,
  BIconGlobe,
} from 'bootstrap-vue'
export default {
  name: 'IndexPage',
  components: {
    BIconPlayFill,
    BIconArrowRight,
    BIconGithub,
    BIconGlobe,
  },
}
</script>
