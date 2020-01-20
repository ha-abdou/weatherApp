
export interface ISettingsState {
    language: string;
    tempUnit: string;
    speedUnit: string;
    theme: string;
    drawer: boolean;
}

export type ValueTypes = string | number | boolean;

export interface ISetSettingAction {
    type: SET_SETTINGS;
    payload: {
        key: string,
        value: ValueTypes,
    };
}

type Actions = ISetSettingAction;

export const SET_SETTINGS = "[SETTING] set";
export type SET_SETTINGS = typeof SET_SETTINGS;

function settingsReducer(state: ISettingsState, action: Actions): ISettingsState {

    if (action.type === SET_SETTINGS) {
        return ({
            ...state,
            [action.payload.key]: action.payload.value
        });
    }
    throw new Error();
}

export default settingsReducer;
