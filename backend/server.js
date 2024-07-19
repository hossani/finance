const express =require( 'express' );
const dotenv =require( 'dotenv');
const connectDb =require( './config/db');
const authRoute=require('./routes/authRoute');
const transactionRoute=require('./routes/transactionRoute');
const profileRoute=require('./routes/profileRoute');
const newsletterRoute=require('./routes/newsletterRoute');
const cron=require('node-cron');
const {sendWeeklyNewsletter}=require('./helpers/newsletter')

const cors =require('cors');
dotenv.config();
connectDb();
const option={
    origin:"http://localhost:3000"
}
cron.schedule('1 * * * * *',sendWeeklyNewsletter);

const app=express();
app.use(cors(option));
app.use(express.json());

app.use(express.urlencoded({extended:true}))
app.use(authRoute);
app.use(transactionRoute);
app.use(profileRoute);
app.use(newsletterRoute);

const port =process.env.PORT||4000;
app.listen(port,()=>{
 console.log(`Server is running on PORT ${port}....`)
});
