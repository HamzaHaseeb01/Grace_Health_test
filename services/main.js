import model from '../models';

export const GetLeagueSeasonPairs = async (req, res) => {
    try {
        const result = await model.data.findAndCountAll({
            group: ['Div','Season'],
            order:['Div']
        })
        return res.status(200).json(result);
    } catch (err) {
        return res.status(500).json(err.message);
    }
}

export const GetSpecificLeaguePair=async (req,res)=>{
    try{
        // console.log(req.body);
        const {params:{league,season}}=req;

        const result=await model.data.findAndCountAll({where:{
            Div:league,
            season
        }});
        return res.status(200).json(result);
    }catch(err){
return res.status(500).json(err.message)
    }
}