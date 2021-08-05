import { AnyAction } from "redux";

export interface ActionParam extends AnyAction {
    type: string;
    payload: any;
}

export enum RequestStatus {
    none = "none",
    done = "done",
    error = "error",
    requesting = "requesting"
}

export default {
    RequestStatus
};
