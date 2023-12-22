<script>
import usersStore from "@/stores/users.js";
import capsulesStore from "@/stores/capsules.js";

export default {
  name: 'modalCreateCapsule',
  data() {
    return {
      form: {
        title: '',
        openingDate: '',
        file: '',
        text: '',
        capsuleAvailability: 'public',
        creationDate: this.getCurrentDate(),
        userId: this.getUserId(),
        creatorName: this.getUserName(),
      },
      login: !localStorage.accessToken,
      userState: usersStore(),
      capsulesState: capsulesStore()
    }
  },
  computed: {
    updateCapsules(){
      this.capsulesState.loadCapsules();
    }
  },
  methods: {
    async createCapsule(){
      console.log("something")
      const response = (await this.capsulesState.createCapsule(this.form))
      this.from.title = ''
      this.from.openingDate = ''
      this.from.file = ''
      this.from.text = ''
      this.from.capsuleAvailability = 'public'
      this.from.creationDate = this.getCurrentDate()
      this.from.userI = this.getUserId()
      this.from.creatorName = this.getUserName()
    },

    getCurrentDate(){
      let today = new Date();
      const dd = String(today.getDate()).padStart(2, '0');
      const mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
      const yyyy = today.getFullYear();

      today = yyyy + '-' + mm + '-' + dd;
      return today
    },

    getUserId(){
      if (localStorage.user){
        return JSON.parse(localStorage.user).id
      }

      return ''
    },

    getUserName(){
      if (localStorage.user){
        return JSON.parse(localStorage.user).username
      }

      return ''
    }
  }
}
</script>

<template>
  <div class="modal fade" id="createCapsuleModal" tabindex="-1" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <form id="newCapsuleFrom" @submit="createCapsule">
          <div class="modal-header change-bg-verylightgreen">
            <h1 class="modal-title fs-5" id="createCapsuleModalLabel">Create capsule</h1>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <div class="input-group mb-3">
              <div class="form-floating">
                <input type="text" class="form-control change-box-shadow-lightgreen" id="floatingInputCapsuleTitle"
                       placeholder="Title of the capsule" name="title" v-model="form.title">
                <label for="floatingInputCapsuleTitle">Title</label>
              </div>
            </div>
            <div class="form-floating mb-3">
              <textarea class="form-control change-box-shadow-lightgreen" placeholder="Main text of the capsule"
                        id="floatingInputCapsuleText" name="text" v-model="form.text"></textarea>
              <label for="floatingInputCapsuleText">Text</label>
            </div>
            <div class="form-floating mb-3">
              <input type="date" class="form-control change-box-shadow-lightgreen" id="floatingInputCapsuleOpeningDate"
                     placeholder="Opening date" name="openingDate" v-model="form.openingDate">
              <label for="floatingInputCapsuleOpeningDate">Opening date</label>
            </div>
            <div class="input-group mb-3">
              <label class="input-group-text" for="inputGroupFile">Attachment</label>
              <input type="file" class="form-control change-box-shadow-lightgreen" id="inputGroupFile" name="file" v-on:change="form.file">
            </div>
            <div class="btn-group" role="group" aria-label="Basic radio toggle button group">
              <input type="radio" class="btn-check" name="radioPublic" id="btnRadioPublic" autocomplete="off" value="public" v-model="form.capsuleAvailability">
              <label class="btn btn-my-lightgreen-outline-v2" for="btnRadioPublic">Public</label>

              <input type="radio" class="btn-check" name="radioPublic" id="btnRadioPrivate" autocomplete="off" value="private" v-model="form.capsuleAvailability">
              <label class="btn btn-my-lightgreen-outline-v2" for="btnRadioPrivate">Private</label>

              <input type="radio" class="btn-check" name="radioPublic" id="btnRadioFriendsOnly" autocomplete="off" value="friendsOnly" v-model="form.capsuleAvailability">
              <label class="btn btn-my-lightgreen-outline-v2" for="btnRadioFriendsOnly">Friends only</label>
            </div>
          </div>

          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            <button type="submit" class="btn btn-my-lightgreen" data-bs-dismiss="modal">Create</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>