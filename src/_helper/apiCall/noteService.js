import RestMethod from "./rest_Methods";

export const getAllNotes = async () => {
    let url = "/notes";
    try {
        const response = await RestMethod.GET(url);
        return response.data;
    } catch (error) {
        console.log("error detected while fetching data from api", error);
        return null;
    }
};

export const getNoteByid = async (id) => {
    let url = "/note/"+id;
    try {
        const response = await RestMethod.GET(url);
        return response.data;
    } catch (error) {
        console.log("error detected while fetching data from api", error);
        return null;
    }
};

export const createNote = async (data) => {
    let url = "/create/note";
    try {
        const response = await RestMethod.POST(url, data);
        return response.data;
    } catch (error) {
        console.log("error detected while fetching data from api", error);
        return null;
    }
};
export const updateNote = async (id,data) => {
    let url = "/note/"+id;
    try {
        const response = await RestMethod.PUT(url, data);
        return response.data;
    } catch (error) {
        console.log("error detected while fetching data from api", error);
        return null;
    }
};

export const deleteNote = async (id) => {
    let url = "/delete/note/"+id;
    try {
        const response = await RestMethod.DELETE(url);
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
