const postData= require("../data/bacheca")
//INDEX
const index=(req, res) => {
    let postFilter= postData
    const {tag}=req.query
    if(tag){
        postFilter= postFilter.filter((post) =>post.tags.includes(tag));
    }
    res.json(postData)
}
//SHOW
const show = (req, res) => {
    const id= Number(req.params.id)
    const post= postData.find((post) => post.id === id)
    res.json(post)
}


//DELETE
const destroy=(req,res)=>{
    const id= Number(req.params.id)
    const indexPost= postData.findIndex((post)=> post.id === id)
    postData.splice(indexPost, 1)
    res.sendStatus(204)
}





//MODULE EXPORTS
module.exports= { 
    index,
    show,
    destroy
};