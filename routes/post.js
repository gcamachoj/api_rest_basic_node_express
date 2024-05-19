router.post('/', async (req,res) =>{
    // console.log(req.body); se utiliza para la respuesta del post en consola

    const post = new Post({
        title: req.bdoy.title,
        description: req.body.description

    });
    try {
        const savedPost = await post.save();  // método para guardar en la bd.   
        res.json(savedPost);
    
    } catch (error) {
        res.json({messaje:error});
    }
});

    /**
     * Bloque para mostrar solo un Post por el Id
     * 
     */

    router.get('/postId', async (req, res) => {
        try {
            const post = await Post.findById(req.params.postId); // Encuentra por id
            res.json(post);
        }   catch (error) {
                res.json({messaje:error})            
        }    
    });

    router.delete('/postId', async (req, res) => {
        try {
            const removePost = await Post.remove({_id: req.params.postId}); // borrra
            res.json(removedPost);
        } catch (error) {
            res.json({message: error});            
        }
    });

    /**
    * Actualizar el post
    */

    router.patch('/postId', async (req,res) =>{
        // patch para actualizar
        
        try { 
            const updatePost = await Post.updateOne(
                // Actualizar de uno en uno
                    {_id: req.params.postId},
                    {$set: {title: req.body.title}});
                rest.json(updatePost);

                } catch(error) {
                    res.json({messaje: error});
                }
            
    });

    module.exports = router; // devuelve como módulo lo que se le asigna a route.


