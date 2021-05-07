
export const getProduct=async (req,res)=>{
    try{
        const postProduct=await postMessage.find();
        console.log(postProduct);
        res.status(200).json(postProduct);
    }
    catch(error){
        res.status(404).json({message:error.message});
        
    }
}

export const createProduct=(req,res)=>{
    res.send('Product Posted');
}