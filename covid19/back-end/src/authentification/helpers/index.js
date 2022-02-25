const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken')

module.exports={
  
    CreateJwt : async(id,Expiration) =>{
        const token = await jwt.sign(
            { id: id},
            "CHANTAFBADR",
            {
              expiresIn: Expiration,
            }
          );
          return token;
    },
    HashPassword : async(Password) =>{
          const salt = await bcrypt.genSalt(10);
          return await bcrypt.hash(Password, salt);
    },
}