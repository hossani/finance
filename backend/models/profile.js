const mongoose =require( "mongoose");

const profile= new mongoose.Schema({
    nom:{type:String,required:true},
    prenom:{type:String,required:true},
    username:{type:String,required:false},
    sexe:{type:String,required:false},
    about:{type:String,required:false},
    salaire:{type:Number,require:false,default:0},
    bdg_utilitaire:{type:Number,required:false,default:0},
    bdg_education:{type:Number,required:false,default:0},
    bdg_alimentation:{type:Number,required:false,default:0},
    bdg_sport:{type:Number,required:false,default:0},
    bdg_santé:{type:Number,required:false,default:0},
    bdg_loisirs:{type:Number,required:false,default:0},
    bdg_transport:{type:Number,required:false,default:0},
    bdg_logement:{type:Number,required:false,default:0},
    bdg_epargne:{type:Number,required:false,default:0},
    bdg_autre:{type:Number,required:false,default:0},
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User',required:true ,unique:true}

});

module.exports= mongoose.model('Profile',profile);