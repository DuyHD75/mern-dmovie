const modelOptions ={
     toJSON: {
          virtuals: true, 
          transform : (_, obj) => {
               delete obj
          }
     }
}