export default function user(state={
    item: {
        title: "",
        info: "",
        icon: "",
        link: "",
        price: 0.00
    }
  }, action) {
  
    switch (action.type) {
        case "PART_LOAD": {
            return {
                ...state,
                item: action.payload
            }
        }
        case "PART_EMPTY": {
            return {
                ...state,
                item: {
                    title: "",
                    info: "",
                    icon: "",
                    link: "",
                    price: 0.00
                }
            }
        }
        case "PART_CHANGE_VALUE": {
            return {
                ...state,
                item: {
                    ...state.item,
                    [action.payload.name]: action.payload.value
                }
            }
        }
        default: {
            return state;
        }
    }
}
