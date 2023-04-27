import moongose from 'mongoose';

const schema = new moongose.Schema({
    name:String,
    products: []
});

const businessModel = moongose.model('business', schema);
export default businessModel;