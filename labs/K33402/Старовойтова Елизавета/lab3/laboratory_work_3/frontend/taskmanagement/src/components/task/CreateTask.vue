<template>
  <v-container class="fill-height">
    <v-responsive class="align-center text-center">
      <v-alert
          v-if="errorMessages.length > 0"
          v-for="(error, index) in errorMessages"
          :key="index"
          type="error"
          dismissible
        >
          {{ error }}
      </v-alert>
      <v-form @submit.prevent="handleCreateTask">
        <v-card>
          <v-card-title>Новая задача</v-card-title>
          <v-card-text>
            <v-text-field
              v-model="title"
              label="Наименование"
              outlined
              required
            ></v-text-field>
            <v-text-field
              v-model="description"
              label="Описание"
              outlined
              required
              type="text"
            ></v-text-field>
            <v-select
              v-model="completed"
              :items="taskStatuses"
              label="Статус"
              outlined
              required
            ></v-select>
            <VueDatePicker class="mb-4" outlined required placeholder="Срок выполнения" v-model="deadline"></VueDatePicker>
            <v-select
              v-model="category"
              :items="categoryOptions"
              label="Категория"
              outlined
              required
              item-value="id"
            ></v-select>
            <v-select
              v-model="aim"
              :items="aimOptions"
              label="Цель"
              outlined
              required
              item-value="id"
            ></v-select>
          </v-card-text>
          <v-flex class="text-xs-center" mt-5>
            <v-btn color="primary" type="submit">Подтвердить</v-btn>
          </v-flex>
        </v-card>
      </v-form>
    </v-responsive>
  </v-container>
</template>

<script>
  import VueDatePicker from '@vuepic/vue-datepicker';
  import '@vuepic/vue-datepicker/dist/main.css'

  export default {
    name: "CreateTask",
    components: {
      VueDatePicker,
    },
    data() {
      return {
        title: "",
        description: "",
        deadline: "",
        completed: "",
        loading: false,
        errorMessages: [],
        taskStatuses: [
          'в работе',
          'запланирована',
          'завершена'
        ],
        categoryOptions: [],
        aimOptions: [],
        category: '',
        aim: '',
        selectedDate: null,
        type: 'datetime'
      };
    },
    computed: {
      loggedIn() {
        return this.$store.state.auth.status.loggedIn;
      },
    },
    created() {
      if (!this.loggedIn) {
        this.$router.push("/login");
      }
      else {
        this.fetchCategories()
        this.fetchAims()
      }
    },
    methods: {
      handleCreateTask() {
        this.loading = true;
        let formattedDate = ""

        if (this.deadline !== "" && this.deadline !== null)
          formattedDate = this.deadline.toISOString().split('T')[0] + ' ' + this.deadline.toTimeString().split(' ')[0];

        let newTask = {
          title: this.title,
          description: this.description,
          deadline: formattedDate,
          completed: this.completed,
          category: this.category,
          aim: this.aim
        }

        this.$store.dispatch("task/addTask", newTask).then(
          () => {
            this.$router.push("/tasks");
        }).catch(error => {
          this.loading = false;
          if (error.response && error.response.data && error.response.data.message) {
            this.errorMessages.push(error.response.data);
          } else {
            const errors = Object.values(error.response.data).flat();

            errors.forEach(errorMessage => {
              this.errorMessages.push(errorMessage);
            });
          }
        });
      },
      fetchCategories() {
        this.$store.dispatch("task/fetchCategories").then(
          () => {
            let categories = this.$store.state.task.categories;
            categories.forEach(element => {
              this.categoryOptions.push({
                id: element.id,
                title: element.name
              })
            });

        }).catch(error => {
          this.loading = false;
          if (error.response && error.response.data && error.response.data.message) {
            this.errorMessages.push(error.response.data);
          } else {
            const errors = Object.values(error.response.data).flat();

            errors.forEach(errorMessage => {
              this.errorMessages.push(errorMessage);
            });
          }
        });
      },
      fetchAims() {
        this.$store.dispatch("task/fetchAims").then(
          () => {
            this.aimOptions = this.$store.state.task.aims;
          })
          .catch(error => {
          this.loading = false;
          if (error.response && error.response.data && error.response.data.message) {
            this.errorMessages.push(error.response.data);
          } else {
            const errors = Object.values(error.response.data).flat();

            errors.forEach(errorMessage => {
              this.errorMessages.push(errorMessage);
            });
          }
        });
      }
    },
  };
</script>
