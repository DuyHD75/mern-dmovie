import jsonwebtoken from 'jsonwebtoken';
import responseHandler from '../handlers/response.handler';
import userModel from '../models/user.model.js';

const tokenDecode = (req) => {
     try {
          const bearerHeader = req.headers['authorization'];
          if (bearerHeader) {
               const token = bearerHeader.split(" ")[1];
               return jsonwebtoken.verify(
                    token, process.env.TOKEN_SECRET
               )
          }
          return false;
     } catch {
          return false;
     }
}


const auth = async (req, res, next) => {
     const tokenDecoded = tokenDecode(req);

     if (!token) {
          return responseHandler.unAuthorize(res);
     }
     const user = await userModel.findById(tokenDecode.data)
     if (!user) return responseHandler.unAuthorize(res);
     res.user = user;
     next();
};


export default { auth, tokenDecode };
