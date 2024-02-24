// // import React from "react";
// // import { AppBar, Toolbar, Typography, Button } from "@mui/material";
// // import { Link } from "react-router-dom";

// // const NavBar = () => {
// //   const menuItems = [
// //     { text: "Home", link: "/" },
// //     { text: "About", link: "/about" },
// //     { text: "Contact", link: "/contact" },
// //     { text: "Sign In", link: "/signin" },
// //     { text: "Sign Up", link: "/signup" },
// //   ];

// //   return (
// //     <AppBar position="static" sx={{ backgroundColor: "#333", boxShadow: "none" }}>
// //       <Toolbar>
// //         <Typography variant="h6" component="div" sx={{ fontFamily: "'Pacifico', cursive", fontWeight: 500, fontSize: "2rem", marginLeft: 0, color: "#fff" }}>
// //           YogaZen
// //         </Typography>
// //         <div style={{ marginLeft: 'auto' }}>
// //           {menuItems.map((item) => (
// //             <Button key={item.text} color="inherit" component={Link} to={item.link} sx={{ fontFamily: "'Roboto', sans-serif", fontWeight: 500, fontSize: "1rem", marginLeft: 2 }}>
// //               {item.text}
// //             </Button>
// //           ))}
         
// //         </div>
// //       </Toolbar>
// //     </AppBar>
// //   );
// // };

// // export default NavBar;
// import React from "react";
// import { AppBar, Toolbar, Typography, Button } from "@mui/material";
// import { Link } from "react-router-dom";

// const NavBar = () => {
//   const menuItems = [
//     { text: "Home", link: "/" },
//     { text: "About", link: "/about" },
//     { text: "Contact", link: "/contact" },
//     { text: "Sign In", link: "/signin" },
//     { text: "Sign Up", link: "/signup" },
//   ];

//   return (
//     <AppBar position="static" sx={{ backgroundColor: "transparent", boxShadow: "none" }}>
//       <Toolbar>
//         <Typography variant="h6" component="div" sx={{ fontFamily: "'Pacifico', cursive", fontWeight: 500, fontSize: "2rem", marginLeft: 0, color: "#fff" }}>
//           YogaZen
//         </Typography>
//         <div style={{ marginLeft: 'auto' }}>
//           {menuItems.map((item) => (
//             <Button key={item.text} color="inherit" component={Link} to={item.link} sx={{ fontFamily: "'Roboto', sans-serif", fontWeight: 500, fontSize: "1rem", marginLeft: 2 }}>
//               {item.text}
//             </Button>
//           ))}
//         </div>
//       </Toolbar>
//     </AppBar>
//   );
// };

// export default NavBar;
import React from "react";
import { AppBar, Toolbar, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";

const NavBar = () => {
  const menuItems = [
    { text: "Home", link: "/" },
    { text: "About", link: "/about" },
    { text: "Feedback", link: "/contact" },
  ];

  return (
    <AppBar position="static" sx={{ backgroundColor: "transparent", boxShadow: "none" }}>
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ fontFamily: "'Pacifico', cursive", fontWeight: 500, fontSize: "2rem", marginLeft: 0, color: "#333" }}>
          YogaZen
        </Typography>
        <div style={{ marginLeft: 'auto' }}>
          {menuItems.map((item) => (
            <Button key={item.text} color="inherit" component={Link} to={item.link} sx={{ fontFamily: "'Roboto', sans-serif", fontWeight: 500, fontSize: "1rem", marginLeft: 2, color: "#333" }}>
              {item.text}
            </Button>
          ))}
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
