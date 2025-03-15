import { toast } from 'vue3-toastify'

export const ToastPosition = {
    TOP_LEFT: 'top-left',
    TOP_RIGHT: 'top-right',
    TOP_CENTER: 'top-center',
    BOTTOM_LEFT: 'bottom-left',
    BOTTOM_RIGHT: 'bottom-right',
    BOTTOM_CENTER: 'bottom-center'
}

export const ToastType = {
    SUCCESS: 'success',
    ERROR: 'error',
    WARNING: 'warning',
    INFO: 'info'
}

export function useToaster() {
    const notify = (
        message,
        type = ToastType.SUCCESS,
        autoClose = 3000,
        position = ToastPosition.TOP_RIGHT,
        theme = 'colored',
        transition = 'slide',
        pauseOnHover = true,
        pauseOnFocusLoss = true,
        closeOnClick = true,
    ) => {
        toast(message, {
            autoClose: autoClose,
            position: position,
            type: type,
            theme: theme,
            transition: transition,
            pauseOnHover: pauseOnHover,
            pauseOnFocusLoss: pauseOnFocusLoss,
            closeOnClick: closeOnClick,
        })
    }

    return {
        notify,
        positions: ToastPosition,
        types: ToastType,
    }
}