import axios from 'axios';

const API_URL = 'http://localhost:8000/api/';

class TaskService {
    addTask(task) {
        return axios
            .post(API_URL + 'tasks/create/', {
                title: task.title,
                description: task.description,
                deadline: task.deadline,
                completed: task.completed,
                category: task.category,
                aim: task.aim
            })
            .then(async response => {
                if (response.status === 200) {
                    return response.data;
                } else if (response.status === 400) {
                    const errors = await response.data;
                    if (typeof errors === 'object') {
                        errorMessages.value = Object.values(errors).flat();
                    } else {
                        errorMessages.value = [errors];
                    }
                }
                else {
                }
            });
    }

    addComment(comment) {
        return axios
            .post(API_URL + 'create-comment/', {
                text: comment.text,
                task: comment.task
            }, {
                headers: {
                    Authorization: `Token ${JSON.parse(localStorage.getItem('user'))}`
                } // Ваш токен замените здесь
            })
            .then(async response => {
                if (response.status === 201) {
                    return response.data;
                } else if (response.status === 400) {
                    const errors = await response.data;
                    if (typeof errors === 'object') {
                        errorMessages.value = Object.values(errors).flat();
                    } else {
                        errorMessages.value = [errors];
                    }
                }
                else {
                }
            });
    }

    assignUserToTask(task) {
        return axios
            .post(API_URL + 'assign-task-to-user/', {
                task: task.task,
                user: task.user
            })
            .then(async response => {
                if (response.status === 201) {
                    return response.data;
                } else if (response.status === 400) {
                    const errors = await response.data;
                    if (typeof errors === 'object') {
                        errorMessages.value = Object.values(errors).flat();
                    } else {
                        errorMessages.value = [errors];
                    }
                }
                else {
                }
            });
    }

    deleteTask(taskID) {
        return axios
            .delete(`${API_URL}tasks/delete/${taskID}/`, {
            })
            .then(async response => {
                if (response.status === 204) {
                    return true;
                } else if (response.status === 400) {
                    const errors = await response.data;
                    if (typeof errors === 'object') {
                        errorMessages.value = Object.values(errors).flat();
                    } else {
                        errorMessages.value = [errors];
                    }
                }
                else {
                }
            });
    }

    changeTaskStatus(status) {
        return axios
            .put(`${API_URL}tasks/${status.taskID}/update-status/`, {
                completed: status.taskStatus
            })
            .then(async response => {
                if (response.status === 200) {
                    return true;
                } else if (response.status === 400) {
                    const errors = await response.data;
                    if (typeof errors === 'object') {
                        errorMessages.value = Object.values(errors).flat();
                    } else {
                        errorMessages.value = [errors];
                    }
                }
                else {
                }
            });
    }

    fetchTasks(user) {
        return axios
            .get(`${API_URL}users/${user}/tasks/status/`, )
            .then(async response => {
                if (response.status === 200) {
                    return response.data;
                } else if (response.status === 400) {
                    const errors = await response.data;
                    if (typeof errors === 'object') {
                        errorMessages.value = Object.values(errors).flat();
                    } else {
                        errorMessages.value = [errors];
                    }
                }
                else {
                }
            });
    }

    fetchTasksAll() {
        return axios
            .get(`${API_URL}tasks/`, )
            .then(async response => {
                if (response.status === 200) {
                    return response.data;
                } else if (response.status === 400) {
                    const errors = await response.data;
                    if (typeof errors === 'object') {
                        errorMessages.value = Object.values(errors).flat();
                    } else {
                        errorMessages.value = [errors];
                    }
                }
                else {
                }
            });
    }

    fetchTaskUser(taskID) {
        return axios
            .get(`${API_URL}tasks/users/${taskID}`, )
            .then(async response => {
                if (response.status === 200) {
                    return response.data;
                } else if (response.status === 400) {
                    const errors = await response.data;
                    if (typeof errors === 'object') {
                        errorMessages.value = Object.values(errors).flat();
                    } else {
                        errorMessages.value = [errors];
                    }
                }
                else {
                }
            });
    }

    fetchUsers() {
        return axios
            .get(`${API_URL}users/`, )
            .then(async response => {
                if (response.status === 200) {
                    return response.data;
                } else if (response.status === 400) {
                    const errors = await response.data;
                    if (typeof errors === 'object') {
                        errorMessages.value = Object.values(errors).flat();
                    } else {
                        errorMessages.value = [errors];
                    }
                }
                else {
                }
            });
    }

    fetchComments(taskID) {
        return axios
            .get(`${API_URL}comments/${taskID}/`, )
            .then(async response => {
                if (response.status === 200) {
                    return response.data;
                } else if (response.status === 400) {
                    const errors = await response.data;
                    if (typeof errors === 'object') {
                        errorMessages.value = Object.values(errors).flat();
                    } else {
                        errorMessages.value = [errors];
                    }
                }
                else {
                }
            });
    }

    fetchTaskDetail(taskID) {
        return axios
            .get(`${API_URL}tasks/${taskID}/`, )
            .then(async response => {
                if (response.status === 200) {
                    return response.data;
                } else if (response.status === 400) {
                    const errors = await response.data;
                    if (typeof errors === 'object') {
                        errorMessages.value = Object.values(errors).flat();
                    } else {
                        errorMessages.value = [errors];
                    }
                }
                else {
                }
            });
    }

    fetchCategories() {
        return axios
            .get(`${API_URL}categories/`, )
            .then(async response => {
                if (response.status === 200) {
                    return response.data;
                } else if (response.status === 400) {
                    const errors = await response.data;
                    if (typeof errors === 'object') {
                        errorMessages.value = Object.values(errors).flat();
                    } else {
                        errorMessages.value = [errors];
                    }
                }
                else {
                }
            });
    }

    fetchAims() {
        return axios
            .get(`${API_URL}aims/`, )
            .then(async response => {
                if (response.status === 200) {
                    return response.data;
                } else if (response.status === 400) {
                    const errors = await response.data;
                    if (typeof errors === 'object') {
                        errorMessages.value = Object.values(errors).flat();
                    } else {
                        errorMessages.value = [errors];
                    }
                }
                else {
                }
            });
    }
}

export default new TaskService();
