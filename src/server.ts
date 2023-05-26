import app from './app'
import mongoose from 'mongoose';


const port = 5000




// database Connection

async function bootstrap() {
    try {
        await mongoose.connect('mongodb://127.0.0.1:27017/practise-mongoose');
        console.log(`🛢Database Connection successful`)

        app.listen(port, () => {
            console.log(`Server is listening on port ${port}`)
        })
    } catch (err) {
        console.log(`Failed to connect database`, err)
    }
}

bootstrap();


