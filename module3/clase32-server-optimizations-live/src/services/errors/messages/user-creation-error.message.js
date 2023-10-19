export const generateUserErrorInfo = (user) => {
    return `Una o más propiedades fueron enviadas incompletas o no son válidas.
        Lista de propiedades requeridas:
            * fist_name: type String, recibido: ${user.first_name}
            * email: type String, recibido: ${user.email}
    `;
};

export const getUserByIdErrorInfo = (userId) => {
    return `Una o mas propiedades fueron enviadas de manera incompleta o non validas.
            Lista de propiedades requeridas:
                * userId: type String, recibido: ${userId}
    `;
}