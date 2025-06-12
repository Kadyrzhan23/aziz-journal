import Swal from 'sweetalert2'

export const successMessage = (text,title = 'Круто!!!') => {
    Swal.fire({
        icon: "success",
        title,
        text: text,
        // footer: '<a href="#">Хочешь посмотреть пост</a>'
    })
}

export const errorMessage = (text) => {
    Swal.fire({
        icon: "error",
        title:'Ошибка 😠',
        text: text,
    })
}

export const warningMessage = (text) => {
    Swal.fire({
        icon: "warning",
        title:'Предупреждения',
        text: text,
    })
}