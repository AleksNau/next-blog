const titleValidation = {
    minLength:
        {
            value:5,
            message: "Минимум 5 символов"
        },
    maxLength:
        {
            value: 40,
            message: "Максимум 40 символов"
        },
    required: "Поле обязательно к заполнению"
}

module.exports = {
    titleValidation,
}