<script>
export default {
  name: "Modal",
  props: {
    active: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<template>
  <div class="modal fade" tabindex="-1" aria-hidden="true" ref="modalCapsule">
    <div class="modal-dialog modal-dialog-scrollable">
      <div class="modal-content">
        <div class="modal-header change-bg-verylightgreen">
          <h1 class="modal-title fs-5" id="openCapsuleLabel">{{1}}</h1>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close" @click="$emit('close')"></button>
        </div>
        <div class="modal-body">
          <div class="input-group mb-3">
            <div class="form-floating">{{2}}</div>
          </div>
          <hr>
          <div class="mb-4">
            <p>Files:</p>
            <div></div>
          </div>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal" @click="handleClose">Close</button>
        </div>
      </div>
    </div>
  </div>
</template>