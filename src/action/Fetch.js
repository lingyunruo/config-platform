
import axios from 'axios';

export default class FetchData {

    fetchData = (args) => {

        return axios({
            method: 'post',
            ...args,
        })
            .then((res) => {
                if(res.status === 200) {
                    return res.data;
                }
                return res;
            });

    }

}