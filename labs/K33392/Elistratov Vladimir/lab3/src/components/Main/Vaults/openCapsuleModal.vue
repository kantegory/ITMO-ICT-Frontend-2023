<template>
  <div class="modal fade modal-my-config-light" id="openCapsuleFormModalId" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="openCapsuleFormModal" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="modalCapsuleOpenedTitle">{{this.capState.capsule.name}}</h5>
          <button type="button" class="btn btn-my-main" data-bs-dismiss="modal" aria-label="Закрыть">
            <svg class="close-btn">
              <svg id="close" class="close-btn"  viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2"/>
              </svg>
            </svg>
          </button>
        </div>
        <div class="modal-body" id="modalCapsuleOpenedBody">
          <div class="mb-4">
            <p class="fw-bold">Описание:</p>
            <div>{{ this.capState.capsule.description }}</div>
          </div>

          <hr class="content-dividing-line rounded mt-3"/>
          <div class="form-outline mb-10">
            <p class="fw-bold mb-5">Содержимое капсулы</p>
          </div>

          <div class="mb-4">
            <p class="fw-bold">Послание:</p>
            <div v-for="str in this.capState.capsule.text.split('\n')">
              <div> {{ str }} </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.modal-my-config-light{
  --bs-modal-bg: var(--color1);
  --bs-modal-color: var(--color4);
  --bs-modal-border-color: var(--color3);
  --bs-modal-header-border-color: var(--color3);
  --bs-modal-footer-border-color: var(--color3);
}
</style>

<script>
import capsulesStore from "@/stores/capsules.js";
import BaseIcon from "@/components/icons/baseIcon.vue";
import Icon from "@/components/icons/baseIcon.vue";


export default {
  name: 'openVaultModal',
  components: {Icon, BaseIcon},
  data(){
    return{
      capState: capsulesStore(),
    }
  },
}
</script>