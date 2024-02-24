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
import { useLocation, useNavigate } from "react-router-dom";

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

export default function AcademyCourses() {
  const [open, setOpen] = React.useState(true);
  const navigate = useNavigate();
  const toggleDrawer = () => {
    setOpen(!open);
  };
  const [courses, setCourses] = React.useState([
    {
      id: 1,
      name: "Course 1",
      instructor: "Instructor 1",
      time: "10:00 AM",
      date: "Monday",
      academy: {
        name: "Academy 1",
      },
      courseFee: 1000,
      description: "Description of Course 1",
      address: "Course Address 1",
      city: "City 1",
      state: "State 1",
      country: "Country 1",
      rating: 4.2,
      imgURL: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAJQA2QMBIgACEQEDEQH/xAAcAAABBAMBAAAAAAAAAAAAAAAGAwQFBwABAgj/xABKEAABAwMCAgcFBAYFCwUBAAABAgMEAAUREiEGMRMiQVFhcYEHFDKRoUJSsdEVIzNyksFiY7Lh8BZDU1SDhJOiwtLxJDVERYIX/8QAGQEAAgMBAAAAAAAAAAAAAAAAAgMAAQQF/8QAJREAAwACAgIDAQACAwAAAAAAAAECAxESMQQhEyJBMhSBI1Fh/9oADAMBAAIRAxEAPwC4+01znO1dc1HzrlxSWka3VJQkc1KOAPWiFmwnfauwMUzYuUF6UqMzMYW+kboSsE0986otejWKzTk4roUPcZCUuG01FmPRQtXXU18StuWeyhda7DU8nofS79aILqmZVwjtup2KSsZHpTmFPh3BvXDktPDGeorJFUPf+FXGSX4L63FnKnA6clZ780jwldJrcxpDT/RzW1YQCca/6Oe2qm1XQd43HZ6HxsaQA6w86Ssk/wDSduakKbLbm6XEEfCoc/zpxjretWwDGf8AOfvmtq32rGebo/rDXS9hntoin0JEd9J43KeyliMpFJKzmrEv0dJGNuyu60kdXNZneq0EnoxQyK1yAroqIwAM0i4sBIKlJTnkFHGaiL2LDlWYpJJPLnWw6Ce3ao0XyEZCNToP3TmsSnc/47KUV1jmtIG5oGGjhof2aaS2sR5Ch9ppX4GnzQ/Co+9zE260yJRR0hQghDY+2o7JT6kioXrYpdbxbrNGMi5S22W0jPWO5zywO2hyB7RuGJ8jo0T1tnVgdKjSDVfcScM3S9RuklXLpZynVOuKUk9GSR8I7QANh699VxdrPOsr6W5zRRr+FYOUKolcvoK8NSts9aAoeQlbagpBGUqG4Nb0VTXsa4vfblCx3FxTjDpHQKUc9Eru8jy86uj0qbFjn7Z86B+ObTHuFzbcvEh0Qmmf1EdtakjVnK1qxsSOqB60bZ66h4moDjFxplERxyMHek1M6inVhJGSPLqihzbU7GeMk8iRWV7sEa1PRpVv6Rth06SoE9RXMHPMZxVrcGyZEywsKmKKnm+oVq+0ByNDs21wpPDTra0BmOjCyE5GnSc58fKhXhnjx2dxHEtMF73eAlXVS71Ss5xg7eRxScNtmnycaLpAHZzoO4wlvNXaEwAtbSmlEjo8hBHaVdndii/kofXFCnHpUw0l4LKdYABCCrcH++mZl9RHja+RICosx1+UWn0vlRWcgM6UAefI0H8Zw02fiJiRGQotSAlTiQdknNH0eV7xHQGVZxzJGCT671xfY0RNuXPnoDgjtqccGd9KRnHry9ay47c16OhlxKo0yYsnGlvtcO2tXMrQLg6oJdx8CsD4u3HZmjvGcKTuDXlS9X1d6lN9C2WEJCWmkBWrQM5O/wA69D+z68/pXh2IHkuJfbQEkEHCgBsoHuIIrYzmNa6CFn4n/B3/AKRSigSmuGP2snwd/wChNKnlRi30IHkPPFcEE4wPrShydgK2hHhVitHKsAAHn4VwcgjxOKUWoIV1q0AlRBwahf7ojeI7g/bbS49Ea6WQToZb71nv8Ns1VF2hcUPsLu13ccdWMDQys5bTnngbfKrdvrHS2x4JVoWnBQvGdJyN6FWY6pFzWpqVlpSdBbKTv5b1ny5GmbvHxTUtsV9n12eudtLchalup+FR5bcwKK8aAMjnQ9w1bY9quMphkIA+NKBzTkZPpvRAs6lAg5GKdjrkjLmnhR1itpG5+dY1unNdgbnyoa7CnoTbH4VFcRoUYCXAEqbacDi0K5KwDj5HB9Kl0Cmd2Tqtknbkgmp+Bz/SKubvRfhy3wG1rYVpBbzhW1JRPceIGFw5ymnEvIGyUk6Fdh50vLlNJ6NlCWg2QdirBVntx38vSndqCNbZRjIOTgcqxb0zqOfWis+D7fcGuKUxI6FKlQ5QSrGAMBwA5z6mvTfqn51XkC0NDioSGEpSovJLxJxqJyc+OMY9aPOgV9//AJjW2fv7ZyssqGkSGlOokjtpC4RGJUVQeQFpSCpOew451k2e3BYQtaSpSyEpSPtGmd5uLjDfRAtIKk9Yr/kKmS509l48dcloE4CUzY70WQ8dDram8k8iQRmg3gD2fT2eKnP0y2UtwlkhxlWoKORpPcBjJ7xttvVi2i1lTvTKyhgbhWN1HwzSkmeIc0QoRLbLJ3AOSpXMkntPjWTHfxy3XRtyz8tpT2FgSMbUxvED9JW5yPhBWfg1jbOe2nMN7po6XFEZ7ajb7xAxa+iaT+skvHS22OWwJJPgMfUVr2nOzFM0r9fhW8xEiFJ6MtNjxQskVxcWpE6w3ZhpJceVFJQj72CDgeeKkLg57y+penZairHdTRCnW1hSDpxkZzXO3qto6rW40yjjJKFK0ZSdW57cfnXo32LSDI4TYy1p3UrV64I9MfIihu98DWW+xjIdSYdwJyZDHJYx9pPI+YwfGir2a2iXYbUIsh1h3Q+W0rYVlLjZ3BIO6VA5H59nRdJ+v05lY6jsNmcdLJH9YP7Ca7VyxXDA/wDUyv3k/wBkUsRRoTr0IoTp3ralhJGxya6TvkCuVjl4VewEvQk4hSlZNdNIxXY3FJynhHZK8ZPIVTaS2yRHJnUhbSWVKeUhLeMFSjgUKKaZttxcQlIPWKhgnt33obuFwd4g9qVvtnS64dqZVIfbz1S72AjtIKkUWy2emfLiviPbWXNaaOh481O1+HDzCxeI94YeaQyGiiWhZ05T2KHl6VME9YHVlONjVee1OaqFwmLeyvEi4vojIHPKdQ1fPGPWjDhyM3Bt0W3JC1dC3oDjiipRPiT/AIFMxZFKXL9M+bE6b4/hNs/sxXWNz5VjBKm8q59td43o67Fy/QmK5UgLbUhY2UCCKVArQAJ8Ki6L3oqq+WVph1rXGK21NhQVjZWd9/LNZbkJinIA0cwB+FFF4dSIkMoVv0OlXyTn+dDDyc5AOBWXLCVejo4sjqFsf2Zk3C/QnZCFuNklwdGvSNSSCNXeBnl5d1WJr/rE1X/DfRLmRwrUFx1lxspVjs3T5H+VFv6aj/6s/wD8v51pxtOTDmnVsaXMrm3W2sIPUaQlxw9wxkn6CpKR0D6gp1ptZT8OoZxQzFmFV70N5KHkFob50AYx+AqUUl3HxGl49VtjcicaRIuOApV199vShdxvN8lurJCFaV7Hw631Bp8WnwrT0iut9rO1M3GFRjIzkrU0Vb9mx2qs6TlBeM2rEnLi9JUAFFCBshtJIAptIWVzV60JUWAEJWRkglOpX4imdme6e5Kaxs1uryx+ZqQkDQt7PMrJP0x9MUlJ/C2/02cUr0IrbTnWqk2GUa8pQB44zSiV6yEinKMJOnv50vHPK0kMqtSNpJIcCc7Bsbef/ik4k52BIDrLhCs7786Y8QT0w3Q4oZDmhIA55yRj6iklrOAVdtH5G1lAlbjRbFqfEqP71t+tCSR3EDFPaGeD30rhLS4rZJGN6IULb+wrPf21sito5WSeNNHaUacnPOsKc11kHtPyrRI7z8qLYvRrTgVF35YQ0gbbAnepTUO/6UKcYTQ2zIXnAbRjNBlf10OwT9ykY3EUnh3jSXeG0JkLdddDzSlY1IUrkD37Jx5UbI9rloLRcXbZwc7EZRv65qqeLLdNtN50TtIdeaRIAH2UrGQD3KHbUSXFY50XxTSTZPlqW9Bfc+K5nEnGtqmzEJSyzJbSxGScpbTqHM43J5k1f0Iq94Qc8zXlmzuKVfLeM/8AyW/7Qr1VATqeQB2b0nLOqlDcT3NEylGkee9bxvWyoA7nFISZCGkOKKh1UZ9aazNrYzud2ZgoO2t3lpzsPM0Mpvsy5TOh19Gg4SEtjTjV48ycfLIpre3D0SdSjqUSc+lRtpcKJjZKuUhKc9/efmcUKrZeRcK0Sd6eKprjZGlprCG0jkABUa7gtnSKe3EqNwmBW+Hf5Cmug4ISnOeVZ7/pnTiVwQrax7nElzl7FIDbWe1RP/io73t7/WE/OnV4fyhqE0oaWj1yORX9o+nKovUz4fKnz6Ry898rbQecLW3Z6a4nIwUoz9aevH9YoA9lC3Br15uF2S8+zOZhobUpRdCkN8sABJwD8qI5CtJCicb71eOdLQ7LfKti6W+kSCOw4NNro0UsSHlcm2NI/wAetNje4ce5i0qloRNfQVJb56RjIKu4U4ucxS+HpnShAd6VKSgJwUjI59/bv21WX+dB4d73/oB4Lyo/FURKOUgLbcHhpKh9UiiSY2hxShyJFA10mKg3RicnCvd3Asjw5H6ZohTcffAh2OSttaQpKsHBB5Gj8WZrHxZqyeqHjEUMr1dItX7xG30rtxenUeZPbTBch1AJI+QP5VHyLngEEKP/AOTWqcMR0gOTZq5KS7Lihe/63qjxwaWdAVI6PHKoT3vprnDGcfreR58jU7t+kE+J7K53mL/kQ/F0HHBLGmO+VA8wPxoj2TyyKqHifiF+1S2YcWU8xhkLcDSiMqJPP0A+dQK+LbmQdN0mjPb0hqKHo5+XTtsu5FzZVJDQ16VnDbhPVUocwKeJJWds7c96qSH7RI7cbXMiOOKZbU46OSNsbg/3UO3P2suXF+O8YJioZUCA06cnBBGcY5YO2/MiinFT7Kvgui+pEhtlJGSojx5UIvxheLm1CB1oUvpHj3IByfnsPWq9X7SmbhsZTiFFO4WQgfz/ABp/aLtdWnk+5yFstSCFKdThSVDvKjn8aL4qfotZIifTIn29Bv8AymZKE6SGEhZONz2Y9O/wqsCRRJxvPTcru/LcdDrji+sSeY+dDJSMfZ7q164+jNv9HFp/95gKHMSW/wC0K9Y2tpYcKlJxgV5q9nFleuvFcBYbKoUZ9LkhzHVQBkgHzKcetehuJr41Z+Gn5bboakLPRNbjIWTg+eN6y5VypaHw3MMIAd+Z9KYXxZRC2J6ysVUx9oF4SpWJ6D/sk0RcMcQz77bpy50hLgacQhGEAYJCieXgBStUgolckNr/ACVJcbQMA4UElXLVtim7SWGghtDyOqNIJWM+fnW+I1IUqOlQBPTt8/FQpR7o0bBCfKrjoX5Mrlseqe6eQ6pzAcUQT47AZpGW8mONKd3P6NRxfKOolIHaMpJA8qTWs4JURnvIIqfGt7ZH5VcFKMWR1So9bJz8qZ6k+NdPO026bwphmT2P/Z5w5xTw9eHJ1zu8WMytAS/EfdU6XUjlnsHbg5OM+NG1y4lgwHFJhN9Isn9qrcJ8BTC4RpNwi6AkzGwMpdbwlbR8c/yyKH2+D7ip3VJvbEeP2ox0jh+RCR8z5UDyXXps6c4cc/8AoJ8a3eZaLmbrY5RjpnHTISEJIUob9o5HPKpXg2Rf3rZPn3v3pUZ8Nhlx/I1nOeqD9kAdm24omREsttS2W47Up5o5Q/KAcKVd4BGAfSou+X73jJfe1nxNU8v1c9sJYVz5dIhOIl6ojpSNWxwAN1bUbWyK5b4LEN0DpWWktq5nJAx279lC3B0UcT8TRmEjXDYX08lXZhJyB5lWPrVhcVNBM95Tad16cjv6o/urR4qclZMieTRFOFeD1f8AlqLl5+7+IpVRKcktAHv04phIWTkafkK2kGT6AZ7CiNIaBJIUTuf/ADTy3rU9dGcat1gDIrmFGD0gnAyACcDwovsltLYRKwME91cvyVyzaHpqMbYXCy21xtAkQIrygkDU4ylRPqRSauGLEs5VZ4J/2CfyqUT8IPeK3mn6RytsCOPOBot04WmwrHChxpq9CkKS2E6tKgSkkd+KB+FPZ5boMgidHTcJLZ/WLk7MtnwT2/45VZPHF2k2mKxIYkKYTlQJ6ILSo7YCiTlPbyBqu71d2eJkNMv3h2K42rUroOolzwVjmPCpyU+tDYxOlsLFsWGex7rLs0GTGSSEERUp27xgbfOgDi32ayY6VzeClulhe7sBTnWT4p7/ACNS9sjymXMfp+N0SRt+qVqx86JWr9AhN4fkqfUB8RwAazrJaraNNePDnR55Zst7m3U29u2y3J/MslohQHee4eNTV34LufDDceZxGyG2XfhbbOvJ+6ojZJ8KuObx2whJDCwj93GfnUNP4pst2i+5z32ULdGHGZAw08Ow6twFfXatMW6fszXgcTvZX1q9osy1toiwbdBbaSdIUlvSpScYGojnjPM71aPCkBvi+YqZeehlQDGBbjBJT0bmrrHIO+cCqkvvDDUW5kWp9L7YZVIMcrBW2hIycEbK7cdu3rVq+xNxyQw84jKYrSNIKvtrJzt34H40ahabE1d6SCxXs84UP/1Df8avzppMs1r4fa90tEZLCXVF5aQScqwE9vgKMlKSkDJA8zigq+Sg/cHiD1U9UelIyaSH4FugM4mWvDZaSVrDqClA5qIUNh51ue+uO6tp4FDiCUqSdsEdlSdvi/pHiaAzjUhDvSq8Anf8QKlvaDZenle+towC2Nau9WSPwoYXoHyOwH94zzUAD2c81yqSlIIGn0GKUVbUgkBfKkJMOOwjW84rwTnBPlRmUbvShg9am3vQ/wAGuH21HrNtqCe7ma60Q/8ATuf8I1C0SvEHtIXCkO2y3xtCmVaHFpcBGRzGU86hG+OXn1Ymlxtv+oGo/WglvSDjTSw6MjrJApiwwaH5Fv8ASyLTJ4OuriETeKLpCcVsEyWEIR/GNQHqRVl2j2c8MshD6mTctQyFSnOlQR36fhP1rzb0CCMpBHkc/SpqwcU37hk5t014xBsWyrKUjyPL8Knwr8BeWn2eqIsZiM2G47LbSAMBLaAkD0FBHG7jLb6itbZGsahkEp2HZQLb/bfPj4E6E1JAHxAaFflSKeNrHdpbrzgYhuunUpD6cjPfnYfWmxPF7ZMb+22SvSsYJCgkd4JH86YyJkXOnpRn98munJ1pMdcgzYC2UfF0SlK+iVGgS832U/KcMR4x4w2Q20SMjvJO+TTnSQ+sqRbPDDLJtrtxeISwo6EZPPBIJ8BmpywXZmXdERUgpaXjCCdtSTuAPIg+NUJa+Lp9tZVFGXo5USUqUQSDuR896NeCuKm5Mjpfd3lzGEuLab6QDpCQOqD2Haue8d1l5IZ8+J4tPsv87CuCvHZQ5wfeIXFdrVOaYeYcSvQ4gvKGDjOQUnkamzb4/wB+UP8Aenf+6ndGHsb3mE1dYLsKQnUy6nC0450EOeyqxLUShlxJ8XVfnR6YDQ5Oyk/7y4fxNce6KHwTJX8QP4iiV6CTa/QEHswtjaCUrkpGN9Dyh/OmA4Ms0GKxeYq33yF/qW3XVFKl5xuCd8EH5VZXurhGDOlb7cm/+yq9usWXbOkt0or6AO9My4kcj94fzFBeX10asG7f2ZBs8CWu/wA2UJLz8O5IWemjpXpTntKRy8frSn/8diHIROmFJ5jVgfWnrrjT85ct66I1OkE9GnSR4dlTkPipiOwI6JHSaRstxQUR4eVKx+Rpa0MzYdvaIqxeyS32uWiUmTILiOsAFnFGsSNCtLAQpRShCcJbScH5ChW48bx2xpcuLY7wFD+VQX+WDM6T7vALkp8/5tpJUT6UTzW16EvHP6w7m35KEKTFSloHtxufWhWXPbGtROfGkmbPxTdFYZtSoiD/AJ2W4lsfw7q+lSrHs16cA3e8PLJ+JEVAQPmcmlOarsPnEL6j32eQS6mTeHB+1PRM/ug9Y+p29Kl+MmiuyOaV6SlQI8fCpaFEYt8NqJEbCGGUBCE88AVDcUOkQf1idIGfHNNhaMmSttsq1bbgyptKT/S14I+dMlpcVl3p1hI21uKAFPJqlvOFSVaTnsApm40r4nCXVdhWAcVBAi0+C6UoPSH7xGAfnS+HfuJ+dNxjOUit61feHzqEBzjnhx7hjiOTb3WyhhSiuKs5IW2TsNXaRyPzqBzjnttXqXjiBw9OtITxPHS5HS4A0rJSpKzy0qG4NUveOB7e6pJ4bmvlG+W5hSpST3Apx9RTFaXpjlFNbSAIKIOU7Gl2ZzrR3CVjxFObjY7lbtapMVYbR8Tid01HBJVy5+NHtPoFpr0zqQlh0620llXanOU+ndXUS3KdWHJJLcdP2k81/u1iAhvrLwSK1IlLeGCrqD61eiheTK6TDTWEMt7IQkbD8z4mmqlHvpPUDsNh3CtLVyqiG9ianeGFKjzEup+zzoezggHYE86lrW70e4VzUTg0Uf0VS9F1ezKSmDxXcIKNo9yjpmNJHILBOoeeSatJR3qlfZY85O4rYKU5DDCyojkBg/zV9Kug1WWUqLh+jCdq5yB2mtEEmudBzufSl6C2dawDW1FCx1wFeBFN3XWWMF55DeeWpQBPp20mmStz9jFeWOxTiejH13+lRyiezciFA6z7kaPhIJUpTYOB215f4z4pdv8Afn5EVpmNDbWpMdthsJ6v3lEbknnvXpi6MT5FrmNJW0hbjK0pQ2MkqIOOsdvpXkh6O9FkOMSm1NPNqKXG1DBSQdxiopQTpnCnXnDkqVnzrSS8hQWHFJUDsUqwRWyrAqU4Zsqr3PCXCpuKg5ecHd3Dxq29IrTbJzhG88euFQ4cmz5LTW60KUFI8sr2z4A57qL2fa3f7SpMe+2zQ+PiRIZLaj5EYGPMepqet8iFbYTUSClDTLYwlKf595rqXKhXKOqJcGWZUdYwW3RkenaD4jBpKy6ftDngehO1e2uyPK0XOK9E2+Jr9Yn+RpnxX7TLBdmhGtz7hUk7KcQUhXgKEr97Nml63+HJW3P3SSoAjwSs4B9cedV/cLfMtrxYnxno7gO6XUEZ8u/zFGqX4JqGuw/N2HaFDyGfrSL922HVc/gNAbE2THGlp1SU/d5j60T8KWq/cVyS1CbZTHb/AG0t1kBtoeeNz3AbmppAcByLopShhJSP6Yx9Odd/pI/eT/Cr8qm+MuCY9t4aU9apkqXNZWFvuLVgKbwdWlA2GNj37VV/Tq/0rn/ENRaZbxuez19xDaUXu3KiLeUyoKC0LAzpV3kHYjnVM31+Xw3N90kKYcVuQphQXt46QMeRq0ri64+nSvJTjcA0DXWwtOOqWBjNaJ8ea7G4stL0B96v6btZH4b50LOFJOkpyUkEA5HLagdTigNk4znzq0l2JAOCkEUye4XhvKKnGEqUe3FM/wAZL+WHkjn72Vmo89651KVjuFWOvhCGfhipFNH+EIw5tL+Zqf49i/iYCjqjJpWKlt53S4spHYR30WK4OZJ2SsD940vE4Jbdcw0264ruSSr8Kp+NfbIsVIiLrGit8OR0pT+vQ8S0pI3VqxqB8gnao+2W26S3Eojxl8+ahjFWjbOAHEITraS2B2LVuKK7fwyiIhIQ4FHuA0/mT9KDWLH3RdQ2+jPZXaU8P2t0yWQJb2C6+pX2RySO4DOfGjVNxYcGI5U/4sJKx6q+H61H2m3NJILzTa9PYoFWPLP5VOZ7OwchS7uae0Ap0NQuc58DTTA73Vaj8h+db90Ws5kSHXP6Keogeg3+ZNOCazNBtkOGY7LOS00lJPMgbn1rs1hNazVENFShyqqfar7OXbzIVerE2FTV495iZA6bb40nsV3g88fO1TSalaTtzqEPI90tFwtT6G7pAmQUOHAMlhSDtzxkb+lH3DU2zx7c3HZUNKe3O5Peauq8Wa23+MIl3hMymUq1JCx8JxjIPYap3i3g+0WG9yRHipaZIStlJkKGUkY7T3g1K9h4+yU0W94dVfPuVXSY7SP2KlHzOaEm40ZYJalKZI+Ehec0/jW55QGi5OZ79qS0kaVthIl51vsrTvR3JHusiMmQlW2hadQ+tNLdFbjazLuK3j2AKCQKfifDjtlKHU57Tnc0t7/BqS/SPV7NuGUSESZrjqcHJiRXcpV5qO4HlUy5KTGiNw7fHbjxGtm2GU4SPE958TULJvsdJyp5IA7zTB7imEgaWXUqcJxgHJNG+TF8Ilk+pyStJCk4SRgg91Qf+T1s/wBSj/w1B3Li19CVHQ4ANiSCMVFf5Wye4/OimX+Mqqn9PQihk4NN1NIWMqSDWVldU56Gy47WfgFJ+7NZ+AVlZRoPb2aWw19wVFNH3i7GGUpQj7yB1vrtWVlSm1LG4ntk23ZoLR3a6RR+04c/3U9aSE9VACQOQAxWVlcPNdOvbNCFR8NKtDcVlZQYwLJGFsSKdmsrK1rozms1ma3WVZRzmtisrKhDhXOklfHWVlWQVAABOKqn215X7qkK6M4yVoACleBPPG/KsrKbhW6K2U04gqIV0i9R7Qd/nThq4TIiNLUhZH9LBrVZTMkr/oKW9mKvc3rKK0qUO0imD9ymO9ZUhYz2A4FZWVn0g6bGilrXutaleZzTm2PrjzmVt4zrA3HjWVlU+gJfsMJATLfldMkEA40jkd8fhQx7kz3H51lZQSaMv9H/2Q==",
    },
    {
      id: 2,
      name: "Course 2",
      instructor: "Instructor 2",
      time: "2:00 PM",
      date: "Wednesday",
      academy: {
        name: "Academy 2",
      },
      courseFee: 1200,
      description: "Description of Course 2",
      address: "Course Address 2",
      city: "City 2",
      state: "State 2",
      country: "Country 2",
      rating: 4.8,
      imgURL: "data:image/jpeg;base64,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",
    },
    // Add more course data as needed
  ]);

  const location = useLocation();

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
          <h1 style={{ padding: "0 20px" }}>
            Courses in {location.state.name}
          </h1>
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
            {courses &&
              courses.map((course) => (
                <Card key={course.id} style={{ width: 300, margin: 10 }}>
                  <CardMedia
                    component="img"
                    height="140"
                    image={course.imgURL}
                    alt={course.name}
                  />
                  <CardContent>
                    <Typography variant="h6" component="div" gutterBottom>
                      {course.name}
                    </Typography>
                    <Typography
                      variant="subtitle2"
                      color="textSecondary"
                      paragraph
                    >
                      Instructor : {course.instructor} <br /> {course.time} |{" "}
                      {course.date}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" paragraph>
                      Academy: {course.academy.name}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" paragraph>
                      Course Fee: ₹ {course.courseFee}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" paragraph>
                      {course.description}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" paragraph>
                      {course.address}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" paragraph>
                      {course.city}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" paragraph>
                      {course.state}, {course.country}
                    </Typography>
                    <Rating name="read-only" value={course.rating} readOnly />
                    <br />
                    <Button
                      onClick={() => {
                        navigate("/user", {
                          state: {
                            id: course.id,
                          },
                        });
                      }}
                      variant="contained"
                      color="primary"
                      size="small"
                      style={{ marginTop: 10 }}
                    >
                      Apply for course
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
