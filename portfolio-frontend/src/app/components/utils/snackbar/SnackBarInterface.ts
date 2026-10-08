// ------------- ENUM ---------------- //

export enum SNACKBAR_TYPE {
    DEFAULT = "DEFAULT",
}

export enum SNACKBAR_STATUS {
    SUCCESS = "success",
    ERROR = "error",
    WARNING = "warning",
    INFO = "info",
}


// ------------- INTERFACE ---------------- //

export interface SnackbarStateProps {
    snackBar: snackBarPropType
}

export interface snackBarPropType {
    show: boolean
    message: string
    status: SNACKBAR_STATUS,
    showClose: boolean
    snackbarType?: SNACKBAR_TYPE
}