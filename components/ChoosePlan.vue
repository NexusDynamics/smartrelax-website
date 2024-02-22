<template>
  <b-container class="pt-5" id="plans">
    <div class="d-flex flex-column pt-5">
      <h2 class="mx-auto text-center">
        Wählen Sie Ihr Abomodell<br>nach Ihren Bedürfnissen aus
      </h2>

      <div class="d-flex mx-auto">
        <div
          class="bg-white p-2 rounded-lg d-flex justify-content-between align-items-center font-weight-bold shadow-lg"
        >
          <b-button
            variant="outline-primary"
            class="rounded-lg btn-lg mr-1"
            :class="(planMode === 'month') ? 'btn-primary text-white' : 'btn-light text-primary'"
            @click="changePlan('month')"
          >Monatlich</b-button>
          <b-button
            variant="outline-primary"
            class="rounded-lg btn-lg ml-1"
            :class="(planMode === 'year') ? 'btn-primary text-white' : 'btn-light text-primary'"
            @click="changePlan('year')"
          >Jährlich</b-button
          >
        </div>
      </div>

      <b-row class="mx-lg-5 mt-5">
        <b-col v-for="plan in plans" :key="plan.name" cols="12" lg="4" md="4" sm="12" class="mt-2">
          <b-card class="rounded-lg shadow" :class="plan.recommend ? 'primary-card bg-primary' : ''">
            <div class="text-center d-flex flex-column"  :class="plan.recommend ? 'text-white' : ''">
              <h4>{{plan.name}}</h4>
              <p :class="plan.recommend ? '' : 'text-muted'">{{plan.description}}</p>
              <span class="d-inline">
                <div class="money" v-if="planMode === 'month'">{{plan.monthlyBill}}€</div>
                <div class="money" v-else>{{plan.yearBill}}€</div>
              </span>
              <div class="my-4" v-if="planMode === 'year' && (plan.monthlyBill * 12) > 0">
                <div class="p-2 card-saving rounded-lg d-inline" :class="plan.recommend ? 'bg-white text-primary' : 'bg-primary text-white'">
                  Sparen Sie {{ (plan.monthlyBill * 12) - plan.yearBill }}€ pro Jahr
                </div>
              </div>
            </div>
            <div class="light-green p-2 mt-5 rounded-lg">
              <div v-for="feature in plan.features" :key="feature" class="d-flex flex-row my-3">
                <svg
                  width="26"
                  height="26"
                  viewBox="0 0 26 26"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M13 26C20.1797 26 26 20.1797 26 13C26 5.8203 20.1797 0 13 0C5.8203 0 0 5.8203 0 13C0 20.1797 5.8203 26 13 26ZM12.8355 16.2959L17.8779 11.0959L16.4421 9.70358L12.0894 14.1923L9.5295 11.7554L8.15054 13.204L11.4281 16.324L12.1458 17.0072L12.8355 16.2959Z"
                    fill="#00A0F9"
                  />
                </svg>

                <span class="ml-2">{{feature}}</span>
              </div>
              <b-button block class="rounded-lg btn-white shadow-sm text-primary py-3 mt-2"
              >{{ plan.btn.text }}</b-button
              >
            </div>
          </b-card>
        </b-col>
      </b-row>
    </div>
  </b-container>
</template>
<script>

export default {
  name: 'ChoosePlan',
  data() {
    return {
      planMode: "month",
      plans: [
        {
          name: "Probemonat",
          monthlyBill: 0,
          yearBill: 0,
          description: "Testen Sie unsere Anwendung für einen Monat",
          features: [
            "1 Studio",
            "2 Mitarbeiter"
          ],
          recommend: false,
          btn: {
            text: "Kostenlos testen",
            link: "/register"
          }
        },
        {
          name: "Starter",
          monthlyBill: 350,
          yearBill: 4000,
          description: "Erhalten Sie alle wichtigtsten Funktionen",
          features: [
            "1 Studio",
            "6 Mitarbeiter",
            "Bildergalerie",
            "Terminvergabe",
          ],
          recommend: true,
          btn: {
            text: "Kontaktieren",
            link: "/contact?p=starter"
          }
        },
        {
          name: "Pro",
          monthlyBill: 500,
          yearBill: 5500,
          description: "Erweitern Sie Ihr Portfolio und erhalten Sie diverse weitere Sonderfunktionen",
          features: [
            "2 Studios",
            "∞ Mitarbeiter",
            "Bildergalerie",
            "Terminvergabe",
            "Bewertungen",
            "kostenlose Fotoshootings",
            "uvm."
          ],
          recommend: false,
          btn: {
            text: "Kontaktieren",
            link: "/contact?p=pro"
          }
        }
      ]
    }
  },
  methods: {
    changePlan(plan) {
      console.log("test")
      this.planMode = plan
    }
  }
}
</script>
