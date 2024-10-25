const titleValidation = {
    minLength:
        {
            value: 5,
            message: "Минимум 5 символов"
        },
    maxLength:
        {
            value: 40,
            message: "Максимум 40 символов"
        },
    required: "Поле обязательно к заполнению"
}


const linkValidation = {
    pattern: {
        value: /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/i,
        message: "Неправильный формат ссылки"
    }
}

module.exports = {
    titleValidation,
    linkValidation
}