<template>
  <div class="modal fade modal-my-config" id="CreateCapsuleFormModalId" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="#CreateCapsuleFormModalId" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="staticBackdropLabel">Создание капсулы</h5>
          <button type="button" class="btn btn-my-main" data-bs-dismiss="modal" aria-label="Закрыть">
            <svg class="close-btn">
              <use xlink:href="#close"></use>
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
              <svg class="icons">
                <use xlink:href="#vaultIcon"></use>
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

.modal-my-config-light{
  --bs-modal-bg: var(--color1);
  --bs-modal-color: var(--color4);
  --bs-modal-border-color: var(--color3);
  --bs-modal-header-border-color: var(--color3);
  --bs-modal-footer-border-color: var(--color3);
}
</style>

<script>



import {mapActions, mapState} from "pinia";
import usersStore from "@/stores/user.js";
import capsulesStore from "@/stores/capsules.js";
import timeVault from "@/views/TimeVault.vue";

export default {
  name: 'VaultCreationModal',
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