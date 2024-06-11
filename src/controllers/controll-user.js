const User = require('../models/user-model')


module.exports = {
    getUsers : async(req,res)=>{
      try{
        const result = await User.find()

        return res.status(200).json({data:result})
      }catch(err){
        return res.status(500).json({err:err})
      }
    },
    

    //cambio
    createUser: async (req, res) => {
      try {
          const { name, lastName, mail, password, role } = req.body;
  
          // Verificar si el correo electrónico ya está registrado
          const existingUser = await User.findOne({ mail });
          if (existingUser) {
              return res.status(400).json({ error: 'El correo electrónico ya está registrado' });
          }
  
          // Establecer el valor predeterminado del rol si no se proporciona
          const defaultRole = 'Usuario';
          const userRole = role || defaultRole;
  
          const user = new User({
              name,
              lastName,
              mail,
              password,
              role: userRole
          });
  
          const result = await user.save();
  
          return res.status(201).json({ data: result });
      } catch (err) {
          return res.status(500).json({ err: err });
      }
  },
    
    getUser : async( req,res )=>{
      try{
        const {id} = req.params
        const result = await User.findById(id)

        return res.status(200).json({data:result})
      }catch(err){
        return res.status(500).json({error:err})
      }
    },

    updateUser: async (req, res) => {
      try {
        const { id } = req.params;
        const { mail } = req.body;
    
        // Verificar si el correo electrónico ya está registrado para otro usuario
        const existingUser = await User.findOne({ mail, _id: { $ne: id } });
        if (existingUser) {
          return res.status(400).json({ error: 'El correo electrónico ya está registrado' });
        }
    
        const userUpdate = await User.findByIdAndUpdate(id, req.body, { new: true });
    
        if (!userUpdate) {
          return res.status(404).json({ error: 'Usuario no encontrado' });
        }
    
        return res.status(200).json({ data: userUpdate });
      } catch (err) {
        return res.status(500).json({ error: err });
      }
    }
  }