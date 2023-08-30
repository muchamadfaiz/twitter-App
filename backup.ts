// // Edit User
// router.put('/users/:id',async (req:Request, res:Response)=>{
//     const {id} = req.params
//     const {name} = req.body

//     const user = await prisma.user.findFirst({
//         where:{id:parseInt(id)}
//     })
//     if (!user){
//         return res.status(404).json({
//             status:'error',
//             message:"user not found"
//         })
//     }
//     await prisma.user.update({
//         where:{
//             id:parseInt(id)
//         },data:{
//             name
//         }
//     })

//     res.status(200).json({
//         status:'succes',
//         message: "Data updated succesfully"
//     })
// })
