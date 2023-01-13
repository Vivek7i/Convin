import {combineReducers} from 'redux'


 const initialState = {
    cardData: [],
    history:[]
}
export function cardApp(state = initialState, action) {
    switch (action.type) {
        case "CARD_DATA":
            console.log(action.payload)
            state.cardData.push(action.payload)
            return {
                ...state
            }
            case "HISTORY":{
                state.history.push(action.payload)
                console.log(state,"lppppppppppppppppppp")
                return {
                    ...state
                }
            }
            case "DELETE":
                for(var i=0;i<state.cardData.length;i++){
                    if(state.cardData[i]===action.payload){
                        state.cardData.splice(i,1);
                        break;
                    }
                }
                state.cardData.length=0
                console.log(state)
                return {
                    ...state
                }
        default:
            return state
    }
}

const rootReducer = combineReducers({cardApp})

export default rootReducer;