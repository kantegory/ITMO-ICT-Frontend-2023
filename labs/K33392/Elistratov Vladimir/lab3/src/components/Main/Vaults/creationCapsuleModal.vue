<template>
  <div class="modal fade modal-my-config" id="CreateCapsuleFormModalId" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="#CreateCapsuleFormModalId" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="staticBackdropLabel">Создание капсулы</h5>
          <button type="button" class="btn btn-my-main" data-bs-dismiss="modal" aria-label="Закрыть">
            <svg id="close" class="close-btn"  viewBox="0 0 16 16">
              <path fill-rule="evenodd" d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2"/>
            </svg>
          </button>
        </div>
        <div class="modal-body">
          <form id="CreateCapsuleForm" @submit.prevent="createVault">
            <div class="form-outline mb-4">
              <label class="form-label" for="CreateCapsuleNameID">Название:</label>
              <input type="text" id="CreateCapsuleNameID" class="form-control" name="name" v-model="form.name" required/>
            </div>

            <div class="form-outline mb-4">
              <label class="form-label" for="CreateCapsuleEndDateBoxID">Дата и время открытия:</label>
              <input type="datetime-local" id="CreateCapsuleEndDateBoxID" class="form-control" name="openDate" v-model="form.openDate" required/>
            </div>

            <div class="form-outline mb-4">
              <label class="form-label" for="CreateCapsuleDescriptionID">Краткое описание капсулы:</label>
              <textarea type="text" id="CreateCapsuleDescriptionID" class="form-control" name="description" v-model="form.description" required></textarea>
            </div>

            <div class="form-outline mb-4">
              <label class="form-check-label" for="RadioBtnMy"> Сделать капсулу общедоступной: </label>
              <input class="form-check-input" type="checkbox" id="capsuleAccessPoint" name="access" v-model="form.access" />
            </div>

            <hr class="content-dividing-line rounded mt-3 mb-3"/>
            <div class="form-outline mb-10">
              <p class="fw-bold">Содержимое капсулы</p>
            </div>

            <div class="form-outline mb-4">
              <label class="form-label" for="CreateCapsuleTextID">Запечатанный текст</label>
              <textarea type="text" id="CreateCapsuleTextID" class="form-control" name="text" v-model="form.text"></textarea>
            </div>

            <div className="form-outline mb-4">
              <label className="form-label" htmlFor="CreateCapsuleFiles">Прикрепленные файлы</label>
              <input type="file" id="CreateCapsuleFiles" className="form-control" multiple name="files" v-on="form.files"/>
            </div>


            <button type="submit" class="btn btn-my-main btn-block mb-3" data-bs-dismiss="modal">
              Запечатать
              <svg id="vaultIcon" class="icons" viewBox="0 0 16 16">
                <path d="M1 1.5A1.5 1.5 0 0 1 2.5 0h12A1.5 1.5 0 0 1 16 1.5v13a1.5 1.5 0 0 1-1.5 1.5h-12A1.5 1.5 0 0 1 1 14.5V13H.5a.5.5 0 0 1 0-1H1V8.5H.5a.5.5 0 0 1 0-1H1V4H.5a.5.5 0 0 1 0-1H1V1.5zM2.5 1a.5.5 0 0 0-.5.5v13a.5.5 0 0 0 .5.5h12a.5.5 0 0 0 .5-.5v-13a.5.5 0 0 0-.5-.5h-12z"/>
                <path d="M13.5 6a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0v-3a.5.5 0 0 1 .5-.5zM4.828 4.464a.5.5 0 0 1 .708 0l1.09 1.09a3.003 3.003 0 0 1 3.476 0l1.09-1.09a.5.5 0 1 1 .707.708l-1.09 1.09c.74 1.037.74 2.44 0 3.476l1.09 1.09a.5.5 0 1 1-.707.708l-1.09-1.09a3.002 3.002 0 0 1-3.476 0l-1.09 1.09a.5.5 0 1 1-.708-.708l1.09-1.09a3.003 3.003 0 0 1 0-3.476l-1.09-1.09a.5.5 0 0 1 0-.708zM6.95 6.586a2 2 0 1 0 2.828 2.828A2 2 0 0 0 6.95 6.586z"/>
              </svg>
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>
//
<style scoped>
.modal-my-config{
  --bs-modal-bg: var(--color3);
  --bs-modal-color: var(--color4);
  --bs-modal-border-color: var(--color1);
  --bs-modal-header-border-color: var(--color1);
  --bs-modal-footer-border-color: var(--color1);
}
</style>

<script>



import {mapActions, mapState} from "pinia";
import usersStore from "@/stores/user.js";
import capsulesStore from "@/stores/capsules.js";
import timeVault from "@/views/TimeVault.vue";
import Icon from "@/components/icons/baseIcon.vue";

export default {
  name: 'VaultCreationModal',
  components: {Icon},
  data() {
    return {
      form: {
        name: '',
        openDate: '',
        description: '',
        access: 'false',
        text: '',
        files: '',
        userId: '',
        userName: '',
      },
      usState: usersStore(),
      capsuleState: capsulesStore(),
    };
  },
  computed: {
  },
  methods: {
    async createVault() {
      await this.getUser();
      const nData = JSON.parse(this.usState.user)
      nData['capCount'] += 1;
      this.usState.user = JSON.stringify(nData)
      //await this.usState.updateUser(oData);
      this.form.openDate = new Date(this.form.openDate).getTime();
      const resp = (await this.capsuleState.createCapsule(this.form, JSON.parse(JSON.parse(localStorage.pinia_users)['token'])));
      await this.capsuleState.loadCapsules();
      await this.formReset();
    },
    async getUser() {
      const user = JSON.parse(this.usState.user)
      if (user) {
        this.form.userName = user['username'];
        this.form.userId = user['id'];
      }
    },
    async formReset() {
      this.form.name = '';
      this.form.openDate = '';
      this.form.description = '';
      this.form.access = false;
      this.form.text = '';
      this.form.files = '';
      this.form.userId = '';
      this.form.userName = '';
    },
    mounted() {
      this.loadCapsules();
    },
  },
}
</script>