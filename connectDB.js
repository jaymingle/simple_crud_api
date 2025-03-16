import mongoose from 'mongoose'

const connectDB = async connectionURL => {
    await mongoose.connect(connectionURL)
        .then(() => {
            console.log('MongoDB Connection Succesful')
        })
        .catch(() => console.error('MongoDB Connection Failed'))
}

export default connectDB;