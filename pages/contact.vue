<template>
  <div class="bg-section-product py-5">
    <div class="container text-center">
      <h1>Kontakieren Sie uns!</h1>
      <div class="card mx-auto">
        <div class="card-body">
          <b-input class="mb-3" type="email" placeholder="Ihre E-Mail Adresse" v-model="mailData.email" lazy-formatter :formatter="formatLowerCase" debounce="500"></b-input>
          <b-form-select class="mb-3" v-model="mailData.subjectSelect" @change="mailDataCheck()">
            <b-form-select-option value="0" selected disabled>---- BITTE AUSWÄHLEN -----</b-form-select-option>
            <b-form-select-option v-for="subject in subjects" :key="subject.id" :value="subject.id">{{subject.value}}</b-form-select-option>
          </b-form-select>
          <b-input class="mb-3" type="text" v-if="mailData.subjectSelect === 4" placeholder="Betreff" v-model="mailData.subjectCustom" debounce="500"></b-input>
          <b-form-textarea
            id="textarea"
            v-model="mailData.message"
            placeholder="Ihre Nachricht"
            rows="3"
            max-rows="6"
            debounce="500"n
          ></b-form-textarea>
          <button class="mt-3 btn btn-primary" @click="sendMail">Abschicken</button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.card {
  max-width: 48rem;
}
</style>

<script>
export default {
  name: 'ContactPage',
  data() {
    return {
      subjects: [
        {
          id: 1,
          p: "starter",
          value: "Ich interessiere mich für das Starter-Paket"
        },
        {
          id: 2,
          p: "pro",
          value: "Ich interessiere mich für das Pro-Paket"
        },
        {
          id: 3,
          p: "test",
          value: "Ich möchte Smart Relax testen"
        },
        {
          id: 4,
          p: null,
          value: "Sonstiges (bitte angeben)"
        },
      ],
      mailData: {
        email: null,
        subjectSelect: 0,
        subjectCustom: null,
        message: null,
      }
    }
  },
  methods:{
    mailDataCheck() {
      console.log(this.mailData)
    },
    formatLowerCase(value) {
      return value.toLowerCase()
    },
    sendMail() {
      let subject;
      if (this.mailData.subjectSelect === 4) {
        subject = this.mailData.subjectCustom
      } else {
        subject = "test"
      }
      this.$mail.send({
        from: this.mailData.email,
        subject: subject,
        text: this.mailData.message
      })
    }
  }
}
</script>
