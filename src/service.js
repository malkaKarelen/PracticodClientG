import axios from 'axios';



 
  axios.defaults.baseURL = "https://localhost:7222";

  
axios.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    console.error('An error occurred:', error);
    return Promise.reject(error);
  }
);

export default {


  getTasks: async () => {
console.log("getTask")
    const result = await axios.get(`/items`)
    console.log(result.data)
    return result.data;
  },

addTask: async (name) => {
    console.log('addTask', name)
    //TODO
    await axios.post(`/items`, { Name: name, IsComplete: false })

    return {};
  },

setCompleted: async (id) => {
    console.log('setCompleted')
    //TODO

     await axios.put(`/items/${id}`)
return{}
  },

deleteTask: async (id) => {
    console.log('deleteTask')

     await axios.delete(`/items/${id}`)
    return{}
  }
};
