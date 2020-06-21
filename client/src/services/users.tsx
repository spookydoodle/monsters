import axios from 'axios';

export default {
    getAll: async () => {
        let res = await axios.get(`/api/users`);
        return res.data || [];
    },

    // getOne: async data => {
    //     let res = await axios.get(`/api/users/${data.objectId}`);
    //     return res.data || [];
    // },

    // TODO: declare user type
    update: (data: any) => {
        return axios.put(`/api/users/${data.objectId}`, data);
    },
};
