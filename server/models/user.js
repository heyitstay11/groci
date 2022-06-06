import { compare } from 'bcrypt';
import mongoose from 'mongoose';


const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        default: "",
    },
    email: {
        type: String,
        unique: true,
    },
    password: {
        type: String,
        default: "",
    },
    isAdmin: {
        type: Boolean,
        default: false
    }
});

UserSchema.statics.login = async function(email, password){
    const user = await this.findOne({ email });
    if(!user) throw new Error('No Such User Exists');

    const isMatch = await compare(password, user.password);
   
    if(isMatch){
        return user;
    }
    throw new Error("Incorrect Password");
}

export default mongoose.model('User', UserSchema);
