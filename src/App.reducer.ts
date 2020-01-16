
interface IState {
    language: string;
    tempUnit: string;
    speedUnit: string;
    theme: string;
    drawer: boolean;
    setSetting: (key: string, value: string | number | boolean) => void;
}

export const SET_SETTINGS = "[SETTING] set";
export type SET_SETTINGS = typeof SET_SETTINGS;

export const TOGGLE_DRAWER = "[DRAWER] toggle";
export type TOGGLE_DRAWER = typeof TOGGLE_DRAWER;

interface ISetSettingAction {
    type: SET_SETTINGS;
    payload: {
        key: string,
        value: string | number | boolean,
    };
}

interface IToggleDrawer {
    type: TOGGLE_DRAWER;
}

type Actions = ISetSettingAction | IToggleDrawer;

function appReducer(state: IState, action: Actions): IState {
    switch (action.type) {
        case SET_SETTINGS:
            return ({
                ...state,
                [action.payload.key]: action.payload.value
            });
        case TOGGLE_DRAWER:
            return ({
                ...state,
                drawer: !state.drawer,
            });
        default:
            throw new Error();
    }
}

export default appReducer;
