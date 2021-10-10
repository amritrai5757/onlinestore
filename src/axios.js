import axios from "axios";

const instance=axios.create({
    baseURL:"https://us-central2-online-4b2b2.cloudfunctions.net/api"
});

export default instance;