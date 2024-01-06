import jsonwebtoken from 'jsonwebtoken';
import responseHandler from '../handlers/response.handler';
import userModel from '../models/user.model.js';

const tokenDecode = (req) => {
     try {
          const bearerHeader = req.headers['authorization'];
          if(bearerHeader) {
               const token = bearerHeader.split
          }
     }
}
