export const root = 'https://jsonplaceholder.typicode.com'

const init = (path, params) => {
  return root + path + (params ? params : '')
}

export const api = {
  users: {
    list: async (params) => {
      try {
        const res = await fetch(init('/users', params)).then(res => res.json());
        return {
          result: res
        }
      } catch (e) {
        return {
          error: e
        }
      }
    },
  },
  posts: {
    list: async (id) => {
      try {
        const res = await fetch(init('/posts', `?userId=${id}`)).then(res => res.json());
        return {
          result: res
        }
      } catch (e) {
        return {
          error: e
        }
      }
    },
    get: async (id) => {
      try {
        const res = await fetch(init('/posts/' + id)).then(res => res.json());
        return {
          result: res
        }
      } catch (e) {
        return {
          error: e
        }
      }
    },
  },
  albums: {
    list: async (id) => {
      try {
        const res = await fetch(init('/albums', `?userId=${id}`)).then(res => res.json());
        return {
          result: res
        }
      } catch (e) {
        return {
          error: e
        }
      }
    },
    get: async (id) => {
      try {
        const res = await fetch(init('/albums/' + id)).then(res => res.json());
        return {
          result: res
        }
      } catch (e) {
        return {
          error: e
        }
      }
    },
    
  },
  
}