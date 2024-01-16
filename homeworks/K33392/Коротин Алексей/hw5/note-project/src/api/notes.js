class NotesApi {
    constructor(instance) {
        this.api = instance;
    }

    getAll = async () => {
        return this.api({
            url: "/notes"
        })
    }

    createNote = async (data) => {
        return this.api({
            method: 'POST',
            url: '/notes',
            data,
            headers: {
                'Content-Type': 'application/json'
            } 
        })
    }
}

export default NotesApi;