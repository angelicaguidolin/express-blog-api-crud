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
//CREATE
const store=(req, res) => {
    console.log(req.body)
    const newId= postData[postData.length -1].id +1
    const newPost= {
        id: newId,
        title: req.body.title,
        content: req.body.content,
        image: req.body.image,
        tags: req.body.tags 
    }
    postData.push(newPost)
    

    res.sendStatus(201)
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
    destroy, 
    store,
};