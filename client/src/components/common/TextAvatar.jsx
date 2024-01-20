import { Avatar } from "@mui/material";

const TextAvatar = ({ text }) => {

     const getUsernameHash = (username) => {
          let hash = 0;
          for (let i = 0; i < username.length; i++) {
               hash = username.charCodeAt(i) + ((hash << 5) - hash);
          }
          return hash;
     }

     const intToRGB = (value) => {
          const c = (value & 0x00FFFFFF)
               .toString(16)
               .toUpperCase();
          return "00000".substring(0, 6 - c.length) + c;
     }

     const setRandomColor = (username) => {
          const hash = getUsernameHash(username);
          const color = intToRGB(hash);
          return "#" + color;
     }

     return (
          <Avatar
               sx={{
                    backgroundColor: setRandomColor(text),
                    width: 40,
                    height: 40
               }}
               children={`${text.split(" ")[0][0]}`}
          />
     );
};

export default TextAvatar;