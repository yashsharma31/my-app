import { setHeaders, setOnlyAuth } from "../Headers";
const axios = require('axios');
export const createFolder = async (props) => {
    const data = JSON.stringify({
        "parentId": props.parentId,
        "name": props.name
    });
    const temp_config = {
        method: 'post',
        url: `${process.env.REACT_APP_API_URL}/folder`,
        data: data
    };
    const config = setHeaders(temp_config);
    return await axios(config);
};
export const DeleteFolder = async (props) => {
    const data = JSON.stringify({
        "folderId": props.folderId
    });
    const temp_config = {
        method: 'DELETE',
        url: `${process.env.REACT_APP_API_URL}/folder`,
        data: data
    };
    const config = setHeaders(temp_config);
    return await axios(config);
};
export const getFolder = async (props) => {
    const data = '';
    const temp_config = {
        method: 'GET',
        url: `${process.env.REACT_APP_API_URL}folders?"folderId"="${props.folderId}"`,
        data: data
    };
    const config = setOnlyAuth(temp_config);
    return await axios(config);
};
export const renameFolder = async (props) => {
    const data = JSON.stringify({
        "folderId": props.folderId,
        "name": props.name
    });
    const temp_config = {
        method: 'GET',
        url: `${process.env.REACT_APP_API_URL}/rename-folder`,
        data: data
    };
    const config = setHeaders(temp_config);
    return await axios(config);
};