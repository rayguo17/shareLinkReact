import axios from "axios";

export const ADD_LINK_SUCCESS = "ADD_LINK_SUCCESS";
export const ADD_LINK_FAILURE = "ADD_LINK_FAILURE";
export const LOAD_LINK_SUCCESS= "LOAD_LINK_SUCCESS";
export const LOAD_LINK_FAILURE = "LOAD_LINK_FAILURE"

function addLinkSuccessAction(links){
    return {
        type:ADD_LINK_SUCCESS,
        links:links
    }
}

function addLinkFailureAction(){
    return {
        type:ADD_LINK_FAILURE,
    }
}

function loadLinkSuccessAction(links){
    return {
        type:LOAD_LINK_SUCCESS,
        links:links
    }
}
function loadLinkFailureAction(){
    return {
        type:LOAD_LINK_FAILURE
    }
}

export function addLinkThunk(link){
    let token = localStorage.getItem('token');
    return async (dispatch)=>{
        try {
            let addLinkAxios = await axios.post(
                `${process.env.REACT_APP_API_SERVER}/api/link`,
                {
                    data:link
                },
                {
                    headers:{Authorization:`Bearer ${token}`},
                    
                }
            )
            if(addLinkAxios.data){
                let linkListAxios = await axios.get(
                    `${process.env.REACT_APP_API_SERVER}/api/link`,
                {
                    headers:{Authorization:`Bearer ${token}`},
                    
                }
                )
                let links = linkListAxios.data;
                dispatch(addLinkSuccessAction(links));
            }else{
                dispatch(addLinkFailureAction());
            }
        } catch (error) {
            console.log(error);
            dispatch(addLinkFailureAction());
        }
        
    }
}
export function loadLinkThunk(){
    let token = localStorage.getItem('token');
    return async (dispatch)=>{
        try {
            let loadLinkAxios = await axios.get(
                `${process.env.REACT_APP_API_SERVER}/api/link`,
                {
                    headers:{Authorization:`Bearer ${token}`},
                }
            )
            if(loadLinkAxios.data){
                let links = loadLinkAxios.data;
                dispatch(loadLinkSuccessAction(links))
            }else{
                dispatch(loadLinkFailureAction());
            }
        } catch (error) {
            console.log(error);
            dispatch(loadLinkFailureAction());
        }
    }
}