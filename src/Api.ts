// Create an API service with fetch using singleton pattern & TypeScript
class Api {
    private static instance: Api;

    private constructor() { }

    private buildFetch = (url: string, method: string, data?: any): Promise<any> => {
        const fetchOptions: RequestInit = {
            method,
        };

        if (data) {
            fetchOptions.body = JSON.stringify(data);
        }

        return fetch(url, fetchOptions)
            .then(response => {
                if (response.ok) {
                    return response.json()
                }
                throw new Error(`Error getting data, status: ${response?.status}`)
            }).catch(error => {
                throw error
            });
    }

    public static getInstance(): Api {
        if (!Api.instance) {
            Api.instance = new Api();
        }
        return Api.instance;
    }

    public get(url: string): Promise<any> {
        return this.buildFetch(url, 'GET');
    }

    public post(url: string, data: any): Promise<any> {
        return this.buildFetch(url, 'POST', data);
    }

    public put(url: string, data: any): Promise<any> {
        return this.buildFetch(url, 'PUT', data);
    }

    public delete(url: string): Promise<any> {
        return this.buildFetch(url, 'DELETE');
    }
}

export default Api;