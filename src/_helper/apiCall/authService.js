import RestMethod from "./rest_Methods";

export const signIn = async (data) => {
    let url = "/login";
    try {
        const response = await RestMethod.POST(url, data);
        return response.data;
    } catch (error) {
        console.log("error detected while fetching data from api", error);
        return null;
    }
};
export const usersignUp = async (data) => {
    let url = "/signup";
    try {
        const response = await RestMethod.POST(url, data);
        return response.data;
    } catch (error) {
        console.log("error detected while fetching data from api", error);
        return null;
    }
};
// export const getUsers = async () => {
//     let url = "/alluser";
//     try {
//         const response = await RestMethod.GET(url);
//         return response.data;
//     } catch (error) {
//         console.log("error detected while fetching data from api", error);
//         return null;
//     }
// };
