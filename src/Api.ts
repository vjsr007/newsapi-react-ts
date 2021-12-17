// Create an API service with fetch using singleton pattern & TypeScript
class Api {
    private static instance: Api;

    private constructor() { }

    public static getInstance(): Api {
        if (!Api.instance) {
            Api.instance = new Api();
        }
        return Api.instance;
    }

    public get(url: string): Promise<any> {
        return fetch(url, {
            method: 'GET',
        }).then(response => {
            if (response.ok) {
                return response.json()
            }
            throw new Error(`Error getting data, status: ${response?.status}`)
        }).catch(error => {
            throw error
        });
    }

    public post(url: string, data: any): Promise<any> {
        return fetch(url, {
            method: 'POST',
            body: JSON.stringify(data)
        }).then(response => {
            if (response.ok) {
                return response.json()
            }
            throw new Error(`Error getting data, status: ${response?.status}`)
        }).catch(error => {
            throw error
        });
    }

    public put(url: string, data: any): Promise<any> {
        return fetch(url, {
            method: 'PUT',
            body: JSON.stringify(data)
        }).then(response => {
            if (response.ok) {
                return response.json()
            }
            throw new Error(`Error getting data, status: ${response?.status}`)
        }).catch(error => {
            throw error
        });
    }

    public delete(url: string): Promise<any> {
        return fetch(url, {
            method: 'DELETE',
        }).then(response => {
            if (response.ok) {
                return response.json()
            }
            throw new Error(`Error getting data, status: ${response?.status}`)
        }).catch(error => {
            throw error
        });
    }
}

export default Api;