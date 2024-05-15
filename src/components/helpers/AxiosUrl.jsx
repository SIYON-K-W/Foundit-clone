import axios from "axios";

export const Logedata = axios.create({
	baseURL: "https://traveller.talrop.works/api/v1/auth/",
});
