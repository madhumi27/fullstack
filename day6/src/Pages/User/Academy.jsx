import * as React from "react";
import { styled, createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import Badge from "@mui/material/Badge";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import NotificationsIcon from "@mui/icons-material/Notifications";
import { mainListItems } from "../../Components/User/ListItems";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Rating from "@mui/material/Rating";
import { useNavigate } from "react-router-dom";

const drawerWidth = 240;

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  "& .MuiDrawer-paper": {
    position: "relative",
    whiteSpace: "nowrap",
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    boxSizing: "border-box",
    ...(!open && {
      overflowX: "hidden",
      transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      width: theme.spacing(7),
      [theme.breakpoints.up("sm")]: {
        width: theme.spacing(9),
      },
    }),
  },
}));

// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();

export default function Academy() {
  const [academies, setAcademies] = React.useState([
    {
      id: 1,
      name: "Academy 1",
      description: "Description of Academy 1",
      city: "City 1",
      state: "State 1",
      country: "Country 1",
      ratings: 4.5,
      imgURL: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcOQUUpjd-9bszTqP3_fAYAKfAB6ejGGFaQEFNiH_hgg&s",
    },
    {
      id: 2,
      name: "Academy 2",
      description: "Description of Academy 2",
      city: "City 2",
      state: "State 2",
      country: "Country 2",
      ratings: 3.8,
      imgURL: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAJQAygMBIgACEQEDEQH/xAAcAAACAgMBAQAAAAAAAAAAAAADBAUGAAECBwj/xABCEAACAQMCAwYCBwUGBQUAAAABAgMABBEFIRIxQQYTIlFhcYGRFCMyUqGxwRUzQmLRFjRTcuHwByRDgpNUY5LS8f/EABkBAAMBAQEAAAAAAAAAAAAAAAECAwAEBf/EACERAAICAgICAwEAAAAAAAAAAAABAhEhMQMSE0EiMlEj/9oADAMBAAIRAxEAPwD2OlNTGbcejU3S98M259xQejBx9kHzGaDd/uR/nX86JF+6T/KKHeAm3bHMY/Ot6MHpeX++wH+VvypgUCUH6VCcbDNZmQYcq4t/3K+1d8h8M0ol3HHGiHiLZxhR61m0nkKTawB1XkPcfrUW3KpPUXWRBw+Y5/Go1xUpbHWgTcqZh+yPak52CIWY4A5mm7aRXjVlYEY51O1Y9D8I8ArV0P8AlpP8tdQHKDFavdrZ6utEmQ7Dak7geIU8dxSdx+9UeVJJAWzVuPrR7Vpxz96La7yZ8lNcOOdZaA9i3Dua7VaxRvRVFEB3EKch5UvGKagGaKAc3H7z4UBqZmGZGNBYUQk7Ypwaeg81H41vFbPHHYZiXikVfCvmQKEk9sUUtJhiNxg7GnSAx0Oc4YYNauBxQsKLWiMjFAY5iGI1HkKyUZjYeddCsO4weVExgpUS95elAciLAPvjP6it3dwbWGSaTHAik+9J9nIWGnLcSvxS3J75xjlxch8qW80NWCVz5VX9dkkgmRon4SSN/TPL/fnVgAwMVF6w1vFPZySrlxKAFxniB2+Yzml5IOSG45qLycyxmSzXLhmH2mXYZOTypKUEAAjl1qekhXhIVQPP4VC32FYillH2ZSsh7+6WJWLqXjA8SBeLI9qUt9QhlgjMJ4rdscAA4QT0Xb8q41GZo5S0Zwwzg1BS6jNZ3Ie14PGy5414goB34QeROedcT4pOTaZ1LkSR6ZpzZtVyQTRL7+6ufb86jezzM+nQuTu2ST8ac1S4ihtGEsiqWI4R1Pwrvi6jk5HliC8h5ZpK4/f/AApC81GaS1mW2juUlVWPEYRhcZ2O/p60voeoSXsaibvZGVATO0fCjZPIbdPapymroX2TtoPE/ohob8jRrHdZW5/VmgPyNP6AwS0RRQloyVkYMnw+NFW5iiKqzbnmPSozULpYYGU8I2J3bFVhLqVb5+6lDhl4k39zv8KSU2nSCkXpJ458uhyCdqT1e6ezgjlTP70cQHUbn9KR7OSF7cFyS+3ETUjrVob3TJI4wxkUh1C9SP8AZqsRXokO0utpo/Zp9RQcbGMCBfvO2y/19ga84j7dakkaqUTIAHMD9KD241h30rSNKfi+oLu3MZA2T8z8qqG/mfnVorBJs+kv2jaDYT5/7T/StHUrUf8AWc+yEfpVXAk/xG+db4WPNifjXP2OmiyDUbVeUkh+FbOqW3lKfXH+tVru/U/M1vu16/nW7M3VDvanU420SZIQVZ2VNxzyadtNUggtLeEqSUiVT4gOQqoa7Jx3tlpkYBcSCWX36D5ZqYMY6gZpezux3Go0TZ1u3XkuP++o/U9Rt7swNxBDFIG3Oc+lINGPIUNlHLYUXNi9UTMnaOH7IUb7df6VHXesWjZL8Q9sn9KRk4RzIpC5K74+eNqVyYyiglzfaW75YSsR0AIoBs+zkoDMt6WHIcR5/Go6UZlbIxy6VI6dZyXMixxKSScbDl6mlUqHcbLBYXqWukxm1jkJLd1brId2bP5Uxc2rW+nyTzuJbpyOJsbKPIUlbyQyawgVs21qnBCADgt1NMajqtncwNbpN4+MDBGM8/Oni01bYkotYSK7rVxAllJ382GXdBE2GXzJ3/Cou8vy01tFpi3D2TAKMA8WCMHl160TtTohl1CwuYrciOQiKWTGVyxAUsPjWafpOojUZVue4ayDFWEmS8mMjIxy6VOUJOWSJbtIQRWUqhOALGFC+VCkYYJ6UxZqFs7kKMKAAB5VH3tz3XBChX6TKPAPur1Y/pVpOkGMbZ0rpx92JR3mM8A3OKMvrSsKJF9kc/tHq3uaZQjbbHtQRnV4EtStI50cAsj4O5GQRVSmEsCSyRKHlxwKOYU4yT77fCr68CTqFfPPmCRUVp/Z43djJJNIe8kDBT13bn+VK4OzWA7LS3TW0STIiqABkbE/CrjZj69NvOo6x0pLVQBuR1Y5qXs1+uHoKrFUA8t/4vyJ/aaCNQA0dovGB6saonfVM9v55bjtVqc5ZmBnKDb7IXw4/D8arywOygjO4zV41RC0z3wH+VvlWxxdEPxNbBreRXKdZrLfdHzrtNgZJCqRx+J2PICucjlzPQedQ/bDVU06w+i8CSMxy+XI3x5Dy96aMJS+oHOMfsRGi3L6j2oluQp7njfhYnfrirNd3UUEIdpBIWOAFbOOfPA25da80ttQvonNzaSiKQAhFQbb7Vza6VrUJuPpmnvOsiME8Y4hk589uXyrS4nDYymuR4PQtI1SDVYpSkbxSwSGOaKTmjeVNvwjoKrugmLSLGRr+6he9uH72YI2cHGAB7ACml1dbqZIbSGWV3OFGMD41NhSJVF70szELEg4nfyH+9qhtVcXKxhWMcSnIQHGR6nzrvVb8NGbK1YNDEeKWQcpH8vYcqr866rdHPGFB+6uPxNBjLA5Hwx5VWdlzkcRzj41Oy6imh6O57riubhMsScCNMcvPeq/pfZmSaeOe6vUwhDtF3hLEDcjalO2Ooy3HDwjEbuyYPkV8NU4+NPLFnNmjr2pz97JHKY1ZSBFEoIAHT51PaJp88ghuryRGBjBRU5HPUnr/qaq+hR3VpZR3iRcbSRyiFBzYqpxt71auyM5/YUKXym2kgJi4ZjglRuCPnScizgpCT6/Ik9Q7R2FmPoUnGZwqEhQOHGQefwoTNatcifiYPw5HjIznzAOM1X+2Wnvd6nbXGnbsUKTcSkZwdsfM/hUjC0UIhbUZGhg2Dnc4FFu0S6W8E3cajFp2jyTzDjLviFP8Q49OlQMFy8byTzjvLmX7TZ+yPIeVZqOu6bJeRyNexyRoRHHDH4uFfPao6/1+0+kuum/XxIMmRjzA3O21JbZbx9Y0iaj1FCcFW+G9NxXsWdyw91NR9pJb3MCXCKvC+eH2zim0KLuIw3s1MsEHEYutVgtYc5JLA44Ry2qV0O/t720D2zeFfDgjHLFVHWo7i6MaRRKqqCftb1K9nJzpemRQPD3jZZmeP1PrVItCOLLXRbTAkLHkKio9XgI8Ucy+6UK81rgiZLGC5mkkUgNEgJQ+ZBIzVE0wHlXbCJ4O1d8AfDJOWDDkQ2D+tRMuoSJK6rw4ViBtVxdVvb2VL+G+SPgJ75rfIY7k5xkL0x+NVT+zOqXH10apwSeNdm5HfypGyPja0erSajbxfblT50s+t242Qlj6CuLfsu4Y95Lbx+78f5U+OzEXDtcys3ksQUH5mpLs9HX8UL6fqr3EkrrH3aQoWLsdgemfTmfhXn2v6r9MupDxHuwIzk8/Ecn44Iq5doredbVtJ0qDhkcn6Qxc7Ljcj1IONttz5VRLzQdXDzSSW68LYJIzhcfkAK9DhqEM7OPluc8HKK0c8tnKeFWU8DZxsRkfIgfjV407SJ9Q0y0u5VjjM0SsySS7j4c6p9jrUdjeQS3UCTvCMJGG3Y4wN9/Op2ftjfJFxNBBaFh4Y1Uu4987Cpc/wDTCK8PwyWW30KwUE3E0mw5RRD8z/Sg6w2n6VC0dsJUnlThYswZuHyGw4c0HsjqGp3UMmq6tcYsVBEalADIc8x6CtTfQ7+dpnPC7EniJzmuVxSOhOxzs9CI7MSxLgybDjAJB/L5Ua/u7a3B/aN+ASfsSOTk+1K/tiLStOmh7ubjwe4ZQFBJ3O+cj/Yqt9ndeNlciW4yziTh4sbsD0/GgqsPV1ZLarqqW+nzXOnWsryAYWR7dgi52yCdifKqQ0kBtn+nTtK0vicKQADz2POvXNTmXUrKW0vIC8EycLFHwcdCPXNecaj2ChyTbarKnkJ4QfxFdUHBIhK2Vu57Tai0Qhs5zHHCcxjmyjGOZFKIt7rN7DbK8lxcyHYyNkL678hVvtuymn6dZxyzRyX17uOBWxGxycZHlyoGidmbq0vkuS2OEkhFUgb0vdZpDdXWWXy0tltbW3iuXE7RxhWkEniJAqv9uXlFoj2tvcG3AOZAhIz71IJplww/ekew60xr+u2OlaRDYtO8kiL42RTz61BxZfimoys8UlmcxFgeTbn8q9D0XQbS9sLfUJHmd5V4mgDAKW+AzjNVPtDLYXNmbiAnvxz8JXiHr516H2a7u20WzgPE31QYtzyTv+tNL6rBpOnskrG2W2tIoMZKKASBgZo/CobJ296E11ZIPrLlI/8AM2KYSGOVA6MrqRlWzzqdMQ5ZIpNuM01FCQoUFcClSrQtkoSKPHJxDIAooDGBAOoBqS0y3UcblRkCojJ8se1Stl3iwnAbB+6arHBNivaB1ttB1KYc1t3wPMkYFQVh2zW0sbe2McCmGJY8M7gjAxv4a7/4hyrHoE7k4JwgGMgEsN/9+deQSX07SO30mRsknOedM3+CN0fSMPcsPA65+VMCMAg43qO4fQfKt8TR/YZl9AdqoYU128s9GE17dFQHVQT1IHSvPNX1j9rwubDEMUjDvGfLcajO2MjHOrl2qjGoaa9tdRrKjbhgcMh8wa80ttC1SOdh3jJCWwCFycUsmv0McEddO+mXY+gwxQJIOEsXyWOOYJ3HKnOytjJrmtqt5G72sQMlxIMqqgcgT1yat+j9kYWxJL3Uh5nxcRNOa/Lb6TZmws+FJH3lKfgKWUqWSiVsite1fvmFvb4S3SPhWMclHTFVt7mUOMMRt59K6eQK2STS87BUyMk55CpbKPGiwX1xNe6MWtCou0Xh8W44unwND7JaJetOL/WMAq+VtyuCWH8R9N+VKaGJpEdQh5YXOfEeg9+VXu270WkQlRFdUAOH4ulZYBJhJZA2ehPlShyH3B3or8Q5EZoLux6nb1ok6O+DCMXPhH4V3ArN+5734Hagpcd2/EUDH+YZpxdUThHeKQP5P6VlT2EIEnUcTOCFGcc81StT0G4127kZpxDCp+0wyT8KuovLdxgSj2O351W9ZuLmwyyQSPFv4kGc/KrKgplVu+wt2IjHFf2rqGyocMPnsai76TVIJDbz3Y7lMD6h/CB5bfrUtN2nEyyRQiYTEYxwEYNV3TmWaaZZ2kMcq+IJuWOduf50WZtA0d7iUQwQmR2OwOSTXofZ5Liw0uGG5ciUZJUHIXPSofSYWtY2VLeKEsfDjxOR/Mal1S6CZK8Xsd6jOVmJmPUZVOOPI9aYj1MZBZAx9OdV8SSqMOjLWxcHOB88Uhi1x30Lgcfgzy4qk7a6AThjeJ8/wh96qVtOxADRBx6mm47i35i34WB2cNuDTaFZXf8AizK7tbLHxfuzxAb43FeZ+L1+Vep6gJLmdtw2Tjcb0yukpwjMRzinUxXEv3FJzxgeY5V3xZHiBz8KUbUI4XMMKyTuWJ+qGwHqTtXJW8mbPElvGei+Jvny/CqijVzHB3JMrKF8yQKhysL7WNu8pzzUYX5n9KkksbZW4nBmcfxSZNHeQRoWVdgDtWoJ5p287QSaPi0sm7q92aR0O8eeQB8+v/7Xn39odTd+Ke5NxxcxJufnVs/ZEd/LNfaqxlurp2k3bZQTkD5VVte0OawuFMCF4ZWwmCDg+VbqqpgUmtDlnqcV6Sr5RgNx5jzHtUzZNpgjDX2o28Dk4y8g2x6VTv2Rqkc4jNlMJMbAf1G341JWfZqYEPqLrAnMxq3E59Nth+NSah+lk5y9E3a9ptOtr23+t/5aOUPIyxsSQPTG/SrH/brs/M2FuJ89AYCv4mvM9bs4bWdWtFYQMMYZs4ND0rTbvUrmOO1hZgWwX5KvqTTKKrAsm06Z6pB2m0+8aNdPhvJH4sNmP8qlZVIIOM0nCba3hVI1CAAZblvXMt0HYAMuB1B51Kh7wMuyPt5UN4wVyDSjTAtlTihvM2ebUrRg5znA6VyZXQYU8PxpZ3Ix4jvWcZrWajiRA8gkaCNmHJgOE/MVHw6PpsT8UccsJOT94VK8eVyMVocLDxrR7M3VHNvaJnMMyOfQ04kcq/aG/pS4WN/DgHyBrQMsbYgnZAOnMfI5rJmokkDHmvzon0aN/tRqfhSKXlygHeRpIP5fCf1phNVg+zKskRH3lyPmufxxTYFphfoSDdGZD6HatSRycGGcsByo0dxFMMxSo/8AlbNcSShckkcI3IPpWaVGWwMWmyRSCSSEsBvsakvpSf4Uv/kP/wBar8Ha25AzLbROP5CQaN/bKL/0cv8A8xUPLJei/gT9l4a0SLazlePqUYcaZ9juPgfhQfpEkQ+vQ8IOO8jyw+XP8Kk+E/dI9TilrpGaNWLMCrZXA5mu84wEc6yrmNgw81Oa64hzJzQbq1if/wBiU/8AVi8Jz5b8/iDS1wLu1j4iFuUHVMK/y5E/Ee1Yx5n2yll0K/eNd0Y8UGfun+lU59Wu55gzykkHI6AGvRu1ltZa4pjeTEybgMOGRPgd8fhXmt1p81pOyMD4TscbEVjUWzTNRludLlluZeCRX4UkwMEVC3t7OX4IZ+9Od2UbUC2iluEiimJMacl6e9T1rZxhQAm1Q6pOzo7NqiCUSzY+lJ3gByARtVt0a9ZYUjwAo5AAACgCxH3aPFblCMDFFyE6ktLC8w4o5Bj7hpSZJ4jlo9vMUa3kYDGacRsjnzpQ0RaSj71dfSGzgb+lSMkEM2O8QE+fWl201RnupCM9DQoKYASKRk5BrFkBOOL51zLaSL9tduhFK8Kqwxz8jSsYcJPF4SMedbEnmaB0yRjpgUZE4gDyoGCxbtkkUxH3bHA4vXAoCK2MK4BPInpW++kjID8BPmu1CzDoUp026ZrGwcEjf0FLxTl2wSMUYNk8sg9aCwEWlitZnPeMY38zz+dAk7+NCIb1mA5K/i/OjGNZJ2GPEuxocltg5Gfzp0ybRWtQ0q9vLoTvecJHJUUIAPhXQ0K6x/epP/Ias0MYJwQcdabFvDj+L5CmuwXR6VnJJGBjz5UNCHwOp6itfvI9mUMcZJNJs0qSEcIfcfw10kgkoZ1yzBSDsudhSctoJhxHA4hv1+NGl4idzgnpjFDleRE4grnHlWMUbtbY5fvCCpxkE8xVOu0kf7Y74AfxbMPjXo/aJDcMcq2cDJxVNuIeBz5E1GUqZSKsh7QRZAPEjeT7A+xqZgUjahrbKftDKnmCKzgMJ+ocqOisMr/pSOVlKolYlyN6IIvSkre+VCBcIYyBuy7rUlGyuivGwZW5MpyDRFBiPB5UZBWdcV2uBzrGOhXYrkCubiZbeB5nBKopYhTg7UdGSGoITM2BsOprufSopR4cH3FLWHaLS7hFRZe5PVZPD/pUjcXUMFs1xIwEajZgefpXLPllZ1R4o1khNUsYLGykmd2VlZcLxA536VHxypIQUZhmo3WtVfUbpS54VzhIz0FFs5URxltqqrayRaSdIkvTjPtkUQAk79aVeeMnY10khB86V2YZWFQxO+aMGZV8HT0pcSmug7D19KFmDFwcNz9+lCJUnZwD5Gs73I3AFa4g58zToVncbPnA+FMYf7p/Gl1iVscJKn8KPwSfeHyFOibPQHJZymeFfIUKLZCOe4OTWVldJIybZOLnviuEBmOXJ2GBg4xW6ysEjby1hMbEruFznNVe4gRm3HnWVlc/LsrxirQRrxcK42pMgY5VlZUyhy27KDv0rgQLEWlgZon5kocZ9xyNZWVgD+j3L3lqZJQoZWK+Ec8U8N6ysqyEN5IpPVSTp9zn/Cb8qysrMxTIWMgAYA53oluzicRh24ME8OdunSsrKhJHSmIW7tNIXkOWYflUnEeXpWVlWZzsbhJKtk0ZJWQ4XArKyg9Cj9tIzDeiOxCnBrKyo+yq0IGV/F4jtTFvKxKkn0rdZVHomSMNHya3WVo6Az//2Q==",
    },
    // Add more academy data as needed
  ]);

  const navigate = useNavigate();

  const [open, setOpen] = React.useState(true);
  const toggleDrawer = () => {
    setOpen(!open);
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <AppBar position="absolute" open={open}>
          <Toolbar
            sx={{
              pr: "24px", // keep right padding when drawer closed
            }}
          >
            <IconButton
              edge="start"
              color="inherit"
              aria-label="open drawer"
              onClick={toggleDrawer}
              sx={{
                marginRight: "36px",
                ...(open && { display: "none" }),
              }}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              component="h1"
              variant="h6"
              color="inherit"
              noWrap
              sx={{ flexGrow: 1 }}
            >
              User Dashboard
            </Typography>
            <IconButton color="inherit">
              <Badge badgeContent={4} color="secondary">
                <NotificationsIcon />
              </Badge>
            </IconButton>
          </Toolbar>
        </AppBar>
        <Drawer variant="permanent" open={open}>
          <Toolbar
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-end",
              px: [1],
            }}
          >
            <IconButton onClick={toggleDrawer}>
              <ChevronLeftIcon />
            </IconButton>
          </Toolbar>
          <Divider />
          <List component="nav">
            {mainListItems}
            <Divider sx={{ my: 1 }} />
          </List>
        </Drawer>
        <Box
          component="main"
          sx={{
            backgroundColor: (theme) =>
              theme.palette.mode === "light"
                ? theme.palette.grey[100]
                : theme.palette.grey[900],
            flexGrow: 1,
            height: "100vh",
            overflow: "auto",
          }}
        >
          <br />
          <br />
          <br />
          <br />
          <h1 style={{ padding: "0 20px" }}>Academies</h1>
          <Container
            style={{
              display: "flex",
              flexWrap: "wrap",
              alignItems: "center",
              justifyContent: "center",
            }}
            maxWidth="lg"
            sx={{ mt: 4, mb: 4 }}
          >
            {academies &&
              academies.map((academy) => (
                <Card style={{ width: 300, margin: 10 }} key={academy.id}>
                  <CardMedia
                    component="img"
                    height="140"
                    image={academy.imgURL}
                    alt={academy.name}
                  />
                  <CardContent>
                    <Typography variant="h6" component="div" gutterBottom>
                      {academy.name}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" paragraph>
                      {academy.description}
                    </Typography>
                    <Typography
                      variant="subtitle2"
                      color="textSecondary"
                      paragraph
                    >
                      {academy.city}
                    </Typography>
                    <Typography
                      variant="subtitle2"
                      color="textSecondary"
                      paragraph
                    >
                      {academy.state}
                    </Typography>
                    <Typography
                      variant="subtitle2"
                      color="textSecondary"
                      paragraph
                    >
                      {academy.country}
                    </Typography>
                    <Typography
                      variant="body2"
                      color="textSecondary"
                      paragraph
                    ></Typography>
                    <Rating name="read-only" value={academy.ratings} readOnly />
                    <br />
                    <Button
                      variant="contained"
                      color="primary"
                      size="small"
                      style={{ marginTop: 10 }}
                      onClick={() => {
                        navigate("/user/academy/courses", {
                          state: {
                            id: academy.id,
                            name: academy.name,
                          },
                        });
                      }}
                    >
                      View Courses
                    </Button>
                    <br />
                  </CardContent>
                </Card>
              ))}
          </Container>
        </Box>
      </Box>
    </ThemeProvider>
  );
}
