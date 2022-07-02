import mongoose from 'mongoose'
import "dotenv/config.js"
import keys  from '../configure.js'

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(keys.MONGOURL, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
      useCreateIndex: true,
    })

    console.log(`MongoDB Connected: ${conn.connection.host}`.cyan.underline)
  } catch (error) {
    console.error(`Error: ${error.message}`.red.underline.bold)
    process.exit(1)
  }
}

export default connectDB
