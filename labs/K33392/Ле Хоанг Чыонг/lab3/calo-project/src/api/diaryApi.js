export class DiaryApi {
    constructor(api) {
        this.api = api;
    }

    async getDiaries(username, options = {}) {
        let url = `/diaries/${username}`;

        if (options.type) {
            url += `/type/${options.type}`;
        }

        if (options.date) {
            url += `/date/${options.date}`;
        }

        const requestConfig = {
            url,
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        };

        return this.api(requestConfig);
    }

    async postDiary(username, data) {
        return this.api({
            url: `/diaries/${username}`,
            method: 'POST',
            data,
            headers: {
                'Content-Type': 'application/json',
            },
        });
    }
}
