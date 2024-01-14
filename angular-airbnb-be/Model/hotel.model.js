const mongoose= require('mongoose');
const hotelSchema= mongoose.Schema(
    {
        name:String,
        title:String,
        description:String,
        address:String,
        image1:String,
        image2:String,
        image3:String,
        image4:String,
        host:String,
        price:String,
        booking:[{
            date:Date,
            bookedBy:String
        }],
        offers:[{}],
        about:String,
        reviews:[{
            review:String,
            reviewedBy:String
        }]
    }
)
const HotelModel= mongoose.model('hotel',hotelSchema);

module.exports= HotelModel