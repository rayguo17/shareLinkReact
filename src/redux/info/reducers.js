import { ADD_LINK_FAILURE, ADD_LINK_SUCCESS, LOAD_LINK_FAILURE, LOAD_LINK_SUCCESS } from "./actions"


const initialState = {
    links:[]
}

const linksReducer = (state=initialState,action)=>{
    switch (action.type){
        case LOAD_LINK_SUCCESS:
        case ADD_LINK_SUCCESS:
            return {
                links:action.links
            }
        case LOAD_LINK_FAILURE:
        case ADD_LINK_FAILURE:
        default:
            return state

    }
}

export default linksReducer;