import mongoose from "mongoose";

const userModel = new mongoose.Schema({
    username: {
        type: String,
        unique: true,
        required: true,
        lowercase: true,
        index: true,
        trim: true,
    },
    email: {
        type: String,
        unique: true,
        required: true,
        lowercase: true
    },
    fullname: {
        type: String,
        required: true,
        trim: true,
        index: true,
    },
    avatar: {
        type: String,
        required: true,
    },
    coverImage: {
        type: String,
    },
    pasword: {
        type: String,
        required: [true, 'Password is required'],
    },
    watchHistory: {
        type: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: "video"
            }
        ]
    },
    refreshToken: {
        type: String,
    }
}, { timestamps: true })


export const User = mongoose.model("User", userModel);