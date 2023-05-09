export const generateUserErrorInfo = (user) => {
    return `Una o más propiedades fueron enviadas incompletas o no son válidas.
        Lista de propiedades requeridas:
            * fist_name: type String, received: ${user.first_name}
            * email: type String, received: ${user.email}
    `;
}