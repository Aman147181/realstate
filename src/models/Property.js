import mongoose from "mongoose";
const PropertySchema =new  mongoose.Schema({
   
    name: {
        type: String,
        required: true,
     
    },
    type: {
        type: String,
        required: true,
     
    },
    description: {
        type: String,
        required: true,
     
    },
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
     
    },
    images: [{
        type:String,
    }],
    isFeatured: {
        type: Boolean,
        default: false,
    },
   
}, { timestamps: true });


export const Property =  mongoose.model("Property", PropertySchema);