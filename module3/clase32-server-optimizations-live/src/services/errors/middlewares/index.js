import EErrors from '../errors-enum.js';
export default (error, req, res, next) => {
    console.error(error.cause);
    switch (error.code) {
        case EErrors.INVALID_TYPES_ERROR: 
            res.status(400).send({status: "error", error: error.name});
            break;
        default: 
            res.status(500).send({status: "error", error: "Unhandled error!"});
    }
};