import TaskService from '../services/task.service';

const initialState = {
  tasksList: [],
  taskUser: '',
  tasksListAll: [],
  taskDetail: '',
  categories: [],
  aims: [],
  users: [],
  taskAssigned: null,
  taskDeleted: false,
  comments: [],
  commentAdded: null,
  taskStatusChanged: false,
};

export const task = {
  namespaced: true,
  state: initialState,
  actions: {
    fetchTasks({ commit }, user) {
      return TaskService.fetchTasks(user).then(
        tasksList => {
          commit('fetchTasksSuccess', tasksList);
          return Promise.resolve(tasksList);
        },
        error => {
          commit('fetchTasksFailure');
          return Promise.reject(error);
        }
      );
    },
    fetchTasksAll({ commit }, ) {
      return TaskService.fetchTasksAll().then(
        tasksListAll => {
          commit('fetchTasksAllSuccess', tasksListAll);
          return Promise.resolve(tasksListAll);
        },
        error => {
          commit('fetchTasksAllFailure');
          return Promise.reject(error);
        }
      );
    },
    fetchTaskUser({ commit }, taskID) {
      return TaskService.fetchTaskUser(taskID).then(
        tasksUser => {
          commit('fetchTaskUserSuccess', tasksUser);
          return Promise.resolve(tasksUser);
        },
        error => {
          commit('fetchTaskUserFailure');
          return Promise.reject(error);
        }
      );
    },
    fetchTaskDetail({ commit }, taskID) {
      return TaskService.fetchTaskDetail(taskID).then(
        taskDetail => {
          commit('fetchTaskDetailSuccess', taskDetail);
          return Promise.resolve(taskDetail);
        },
        error => {
          commit('fetchTaskDetailFailure');
          return Promise.reject(error);
        }
      );
    },
    fetchUsers({ commit }) {
      return TaskService.fetchUsers().then(
        users => {
          commit('fetchUsersSuccess', users);
          return Promise.resolve(users);
        },
        error => {
          commit('fetchUsersFailure');
          return Promise.reject(error);
        }
      );
    },
    fetchComments({ commit }, taskID) {
      return TaskService.fetchComments(taskID).then(
        comments => {
          commit('fetchCommentsSuccess', comments);
          return Promise.resolve(comments);
        },
        error => {
          commit('fetchCommentsFailure');
          return Promise.reject(error);
        }
      );
    },
    addTask({ commit }, task) {
      return TaskService.addTask(task).then(
        task => {
          commit('addTask');
          return Promise.resolve(task);
        },
        error => {
          commit('addTaskFailure');
          return Promise.reject(error);
        }
      );
    },
    addComment({ commit }, comment) {
      return TaskService.addComment(comment).then(
        commentAdded => {
          commit('addCommentSuccess', commentAdded);
          return Promise.resolve(commentAdded);
        },
        error => {
          commit('addCommentFailure');
          return Promise.reject(error);
        }
      );
    },
    assignUserToTask({ commit }, task) {
      return TaskService.assignUserToTask(task).then(
        task => {
          commit('assignUserToTaskSuccess', task);
          return Promise.resolve(task);
        },
        error => {
          commit('assignUserToTaskFailure');
          return Promise.reject(error);
        }
      );
    },
    deleteTask({ commit }, taskID) {
      return TaskService.deleteTask(taskID).then(
        taskDeleted => {
          commit('deleteTaskSuccess', taskDeleted);
          return Promise.resolve(taskDeleted);
        },
        error => {
          commit('deleteTaskFailure');
          return Promise.reject(error);
        }
      );
    },
    changeTaskStatus({ commit }, status) {
      return TaskService.changeTaskStatus(status).then(
        taskStatusChanged => {
          commit('changeTaskStatusSuccess', taskStatusChanged);
          return Promise.resolve(taskStatusChanged);
        },
        error => {
          commit('changeTaskStatusFailure');
          return Promise.reject(error);
        }
      );
    },
    fetchCategories({ commit },) {
      return TaskService.fetchCategories().then(
        categories => {
          commit('fetchCategoriesSuccess', categories);
          return Promise.resolve(categories);
        },
        error => {
          commit('fetchCategoriesFailure');
          return Promise.reject(error);
        }
      );
    },
    fetchAims({ commit },) {
      return TaskService.fetchAims().then(
        aims => {
          commit('fetchAimsSuccess', aims);
          return Promise.resolve(aims);
        },
        error => {
          commit('fetchAimsFailure');
          return Promise.reject(error);
        }
      );
    },
  },
  mutations: {
    fetchTasksSuccess(state, task) {
      state.tasksList = task;
    },
    fetchTasksFailure(state) {
      state.tasksList = [];
    },
    fetchTasksAllSuccess(state, task) {
      state.tasksListAll = task;
    },
    fetchTasksAllFailure(state) {
      state.tasksListAll = [];
    },
    fetchTaskDetailSuccess(state, task) {
      state.taskDetail = task;
    },
    fetchTaskDetailFailure(state) {
      state.taskDetail = [];
    },
    fetchTaskUserSuccess(state, task) {
      state.taskUser = task;
    },
    fetchTaskUserFailure(state) {
      state.taskUser = [];
    },
    fetchUsersSuccess(state, users) {
      state.users = users;
    },
    fetchUsersFailure(state) {
      state.users = [];
    },
    fetchCategoriesSuccess(state, categories) {
      state.categories = categories;
    },
    fetchCategoriesFailure(state) {
      state.categories = [];
    },
    fetchAimsSuccess(state, aims) {
      state.aims = aims;
    },
    fetchAimsFailure(state) {
      state.aims = [];
    },
    fetchCommentsSuccess(state, comments) {
      state.comments = comments;
    },
    fetchCommentsFailure(state) {
      state.comments = [];
    },
    addTask(state) {
      state.task = null;
    },
    addTaskFailure(state) {
      state.task = null;
    },
    addCommentSuccess(state, comment) {
      state.commentAdded = comment;
    },
    addCommentFailure(state) {
      state.task = null;
    },
    assignUserToTaskSuccess(state, task) {
      state.taskAssigned = task;
    },
    assignUserToTaskFailure(state) {
      state.taskAssigned = null;
    },
    deleteTaskSuccess(state, taskDeleted) {
      state.taskDeleted = taskDeleted;
    },
    deleteTaskFailure(state) {
      state.taskDeleted = false;
    },
    changeTaskStatusSuccess(state, taskStatusChanged) {
      state.taskStatusChanged = taskStatusChanged;
    },
    changeTaskStatusFailure(state) {
      state.taskStatusChanged = false;
    },
  }
};
