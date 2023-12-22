<script>
function getCurrentDate(){
  let today = new Date();
  const dd = String(today.getDate()).padStart(2, '0');
  const mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
  const yyyy = today.getFullYear();

  today = yyyy + '-' + mm + '-' + dd;
  return today
}

export default {
  name: 'closedCapsuleCard',

  props:{
    id: {
      type: Number,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    mainText: {
      type: String,
      required: false
    },
    creatorName: {
      type: String,
      required: true
    },
    creationDate: {
      type: String,
      required: true
    },
    openingDate: {
      type: String,
      required: true
    },
  },

  methods: {
    convertDate(date) {
      return date.substring(8) + '.' + date.substring(5, 7) + '.' + date.substring(2, 4)
    }
  }
}
</script>

<template>
  <div data-capsule-id="{{id}}">
    <div class="card border-2 change-border-lightgreen">
      <div class="card-header change-border-lightgreen change-bg-verylightgreen"><h5 class="card-title">{{title}}</h5></div>
      <div class="card-body">
        <p class="card-text text-truncate">{{mainText}}</p>
        <form > <!--onsubmit="getModalCapsule(event, ${id}, ${userId})"-->
          <div class="row justify-content-between gx-1">
            <button class="btn btn-my-lightgreen w-25" id="btnOpenCapsule" type="submit" disabled>Open</button>
            <a href="#" class="link-primary link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover text-truncate w-25 g-2">@{{creatorName}}</a>
          </div>
        </form>
      </div>
      <div class="card-footer">
        <div class="row justify-content-between gx-5">
          <p class="card-text w-50">Packing: <cite>{{convertDate(creationDate)}}</cite></p>
          <p class="card-text w-50 text-warning">Opening: <cite>{{convertDate(openingDate)}}</cite></p>
        </div>
      </div>
    </div>
  </div>
</template>