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
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Rating from "@mui/material/Rating";
import { Link, useNavigate } from "react-router-dom";
import { mainListItems } from "../../Components/Admin/ListItems";

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

export default function CourseDetails() {
  const navigate = useNavigate();
  const [open, setOpen] = React.useState(true);
  const toggleDrawer = () => {
    setOpen(!open);
  };
  const [courses, setCourses] = React.useState([]);

  // Mocked data for courses. In a real application, you would fetch this data from an API.
  React.useEffect(() => {
    const mockCourses = [
      {
        id: 1,
        name: "Course 1",
        imgURL: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAJQAwwMBIgACEQEDEQH/xAAcAAABBQEBAQAAAAAAAAAAAAAGAAMEBQcCAQj/xABMEAABAwMCAgYGBQYLBwUAAAABAgMEAAUREiEGMRMiQVFxkQcUYYGhsSMyQlLBFSRikrLRFjNDU1Ryc3SCo+EmNmOTorPwNDVERWT/xAAYAQADAQEAAAAAAAAAAAAAAAAAAQIDBP/EAB8RAAMBAAMBAQEBAQAAAAAAAAABEQIDEiExIkETUf/aAAwDAQACEQMRAD8AmR28YqXpwNqTKBTqhhJNQyhBOw8K8UnavUn6o9lOY2pDGm04zmvSmnAOyvDQB69doNssd0anPhpcqOW2Qc9dWDtRrwjJYf4Yt3QvNuFMZAUELCik6eR9tZjxhZ3bjYXZjLiEiAQ6tKhuoKyNqkW30bzjaotxtF16Nx9lLhQcoIJGcZBrRfCWapcP/Z5P93V+yaqeBT/sPZ/7qigh9fpBssRaXwZkQtkLyEugJI7xhQrjhj0iN2mzxLfPtroZZbCEPtrzrAPPBx8KYg542AU3Zwe25sfOr7HfQLeuLLPfF2hiDJPTpuTKi042pJwDv7D50dkgJyTypAU/E4/MG9j/ABw+Rp+xdKmBGAQkt6Vbg4POgCbfZF24uZbS4tMJKHC032HGU6j7wa0ayDFtjf1D86jOr8L1nr9K7hdaRZiFEJUqZJwDt/LLryxDNwvyu+fj/KRT3DiUmzjKQQZL5wf7RdNcOoSmVe1DYG4L+CECrIJlwR+Zv/2avlWZXJHXHiK1SePzJ/8AqK+VZnck/SJ27RWXIXkn29PUA9lWrbZxyqFb29kD2VcNIp5BjOjqmuejqaG68De/KmIqLioRIr0lSchtBUQO2mUoS60hxB6jiQoY8Ke4qdRGszxcIAWpKT4FQz8KhcLqU5a+gcwFxVlrA+79n4fKpvsKefzTos70qsFNYPKlVEFG0N69c+oaScgiulfVOaGM4QesPCns8qaCcYp0DlSGIDeuSKcrymB5ch/sbfvYyj5mjnhj/dm2+2Kj9mgi6FI4PvwJAJZRgd+5o34XIPDFsx/RUfs1a+EseuaQbLKHYYyv2azmJMSbHw1FdS36qzEiqeC0AhQUMHOe7bzrR7mCqzyUpGVGOoAe3FBlptQRw7JcADjkJpEZlShz6IDJ95FZ7bnhfGl/T3izhq02+ZZptvhIYfVcW0qLZIBBz2ZxV9xZdvyTZ1qA1SHcNNJHNSicVG4nfbmRuHn2SND1xZWM92Cao2pY4o9IbbKTqg2oF1QzkFfJOffv7qen8Qsr2keXZvyDNtciWUkrZVHWsbBtalah7s5HvqwHHQsz3qU+0TOgb2RIaAIUOed8fOrvjaGmZZVsqHWUTg+3BpcDzxduHYxeSlTrILD4OD1ge3xGD76nPj6la9z2IfC3EtoctjbCprbT3SOKKHeqQCpRHs5GuRL02S+uxV61u3BxDRbOdRJSnbFCnB3BkC+2u5SXHXmHhdpLSC0RpCAs4GnlVzwjBXa3I1scdK22Zkp/JGnKUEoSoj2ner18M8r0LW5JlWUuKGl3oil1B+ysDBHnQHcE/SpHtFFF2lohTA+0sKiTklp3SrIS59lX4HxHdQ/PbKnGzjtFZt1FyFhATkjfcdlXDSMUMW+SRxGhjKujUyWz3axhWM9+M+VF7SaeHRaUEluuuip9Ka8fUlhhby/qoGTVtwlKgvMxP4riwlAKZjILziTuCRy+JFQy6m2cWLZWdDM8aR3JcScp88keVSeGy2l67XyY4Ep1dGCd8AbnzOPKqHjCdFnNsXK3qcUlh5Kuu2pBCkkHt8BXPZNHT1tyGS2+sdqVSkpDyQ62RoWNSfA0q3qOeAYN112sbV4Bg5rrY0AebbV1nChXCRvTu3OkhnvJJzXGMiuj9XxpJGRTA8uqEr4PvpWhKilpBBIzjc0ZcMMsq4ZtqghI/NUbp2+zQfdRng2/p72UDPvNGXCmr+CltK0hJ9VRsOXKrXwh/Ry6aYlpdeBc2RsnWSDQ5BujFq4XiGY47qm9YhLeQnpDkFR7BgiiHiNWmxL8E1l16lF2yMMLkLLPqyA22kjY4wfLAFc/JuM6eLj7ZLV+c6nhKEtSceoT3EkEHVshRT+0Ky+3ccXiwOTl2tTSFSV5ccca1EActzy/1rQVT1yZsAR8ORrjok4Ty19GoH/z2ChmxW5Y4euwfYjKKp5ZJIyQrCfhgmmteUNY9iByP6Qr6mcHpkkyElwktryRv3DsrZPRNIJmXxJGlDimnkJ7shQPyFYFfreYE5LScagrbzrdfRgSzfZLPMLhpJ8Qr/U06npMnq1nSZc+iwA8PzFD7V3ln/MNU/GESbKvLcaEtSUu7P6FaT0WdSgDVv6K0pVw2/t/9pL/AO6al22I1cGXJiVqS80++0T3aHFjyxiq3l6XhHHpZfpmVkSlF6mwmUuNxJkdRbRrKghaFagd+RIz5UXokB+ExLeGAlvpHMewHPx299PG0xramSplTiUSlHCCR1frAH51VXrMLhh3oyo5bxg4yckn8KzeXlVmtWnESh0sfhlE1IIkNKEn/ESVH54o0hOJfYaeRuhxCVpPsIzWLrvF5cu0Rtd0zClZQuGGQlKEkEDfG++O2tU4Je6bhqAnVlTLfQL8UHT8gKrD9hG8uehAgVB4mWG7JI1HAI7POrBsVQ8dOYtHRpyFL7cbe81e7HCcNLXoGRX3zwmppEnoUeu5UCgKLiNIJA323xvVLYHRckXOHIeK33W0uIQRjTjIPzFdiMtxhdnuTBLLryZCXmnShTe2CnOd8+yo/CsVFlm3GQlGplTaQFrJUcas9XO/ZWD4tM6Vy5ReW3jeXZoLNucgh5UYaOkKsFQHL4YpVVyktSpC321oKXDqB1AV7S/f/CbxhMeQxTWrf309jqYpgpAUB7a6GcyHB3ivSo9nlivDskgUgN/dQB6FEjGd/CnGznbIps86cZFMDi/608IXvQEkFtGrJI2z2UYcNPvfwXtx6AKHqiN0uDfqjvoNv/V4Nvvtab/ao14a/wB0rb/ckfs1X8Ezm+uqcsiwqK6eqnAync92xrO7pAEThkRpTjSFrdJSsAnowo5KU9+B2+yijjy5SYrMCOwpaELRqUpPaQMY+NZPxTcHnNDfSrXgaRqP1U9wrLXC9ummObooGVobjt3zh2DDRoRGUEpBOcoweZ7ar7s/FVxNPslqYCWN1TZQOAl0fVwBzOwT7z3VGsa5Nq4fhcUTd1pkqbjpx9YBtYCj/ix7hQC3dJsB+VIiTHWnZAw64DlS9yc57Dk9nfSXD+SnzfqouHGG3LxMhTUodcbCFApV9RSVjl57+6tM9HJ6bid5xH1W4igrzGKwe2zzDuLb+5SD1hndWee9fQfoc0yYFzuTZJZecS2gkYzoBzj2ZVj3Gj/NrSG+S4ZZeilSf4LLV2KuUs+P0qqncH5Xapp+9cZP/cNRPROnTwe3+lNkn/NXUvg86LK+RnrT5PL+1VWxzldej0r2E/VKyAe/GfxJqpvttlXW1tMxAMHdaidkjFXFzejRpOl6Qy2lhClqK1hIGRsN644duLMyyynYb7T2ghClIUFAY3x8RSeb4y1pr1ADJtE9+8NvutdGw2kLWVLBOwOMY9po39HQeTGuKHR9GJIKCORykZxUK8ycRQylISnOdu00ScLxfVbQzkddwdIr3/8Agpf55z6D5NaUL1vnUe7xG5sdEd1IU2pYKkntxvT7W9OPDDSj3Cqz9IZm3E0dCrkos6NCRpJOBpO/wI2qivBDSk9GSUKbSkkjGSnO49m9Ec0trmrWQpRCj796G+IHAXgcYOK2aIKtSGSr+LTSpIacUkFLalA9oFKoKgdAbCmVj6RPjTuoY500o5WKyZSPcUhzrkrrkuYoGPY3rprANMawd84p5o93OijGeJVpTwfeElQBW22Egnn1qN+HerwrbR/+NH7IoIuFutl2S2xdjNS2g9IgxsZJ5YOato/5OZjIjtrva2kJ0JSqXoGP8JFMlnnpH6Ru2W98DqglJ8s/hWL31/pZClYJwezsrT+M3LcxZtemUwoLGhcia49nnsEkkVlE2THdOkqWpvsA2z49taL4Q/po3Eb0e7+ii1N21xJXHCtae1K22lKUD5HzFYy+HEAhRzRDZpUhElyNG3TKacYW2RsQtJTt3Hfn7KHpLgKcjGKSGQV8jX1hwcqDZOFLbb09IFNREa0IZUo6yMq5Dnk18psOIbktOOt9I2laVLR94A7j319QW67Mz7dHlRZrpivN6m/pCMA9nu5VLGV3BV2uNksDcBzhu7vOofdXlLBSCFLUoc/Ya9etF0uXAUyKDJtU4yVyG8r0rH0hVglJzumrlDiFpz0pXg4zrJrlfQLSpknBcQsZHP6pzUtjSPnO+vuzJSIiVPPrZVo6R8lTi1555PaT2eFbVwFw+eH7E5bFLKn5KVPPnuVgbDwAoNtlvQ1xbDnyQkRm1ENqIzlQJH4jetDcurFukKkSNRbbbX9XHd7Typ97BvPUo7pqKtAOcUccOzRNtjR5ONgIcT3EVgHFvGTtxmLbthWzGB2VnrK/dRr6B1XN5d1lSXXnIKkobQXFlQLoJJxnuHzq9MlGws7bV3LViI6e5Bpto711JwuK6hRwCk8qlfQZnczqqJyfOhe7K1OFWdhV3eRP9a9WihT5USAGwDge3uqgusaVGaKJcqN6yrk0ykqCMcsknnWj1RPMND4OYiq4bhlxCVKIVkkfpmlWSNXG5sNhpEopCexKRilUUIaFnSjArjXvzrlxe5xUdxe/OoLJOquS5g1GK/0q5U5+lSoyWFA70+hW4qtS7tgGnG38HmPOkELlpYr1+YiK30ihyI2HtqpXcGmh11jzpldwS+ko6JTidjsKdCFN6Q5Qm25hY2ShzASTnJNCkuxvsQY01IUph9lDoWlBIAIzg45UScaBbsCI0GShTr2lKMbnsFFlosF5agRoiGQ2hplLfW7gMVpYkZysD+GLZFttoZ4geSZL63FJjtE6UgDYqPfvnFQHrNZlja2aR2D1hZ/Gj/iy2uW6wQ23tKVhZ2QMDckn51UPcPpFphzWpSVGQgrDR2IwcHeqEAc7heC51ohdjq7tWsfHeiXgOK7BjvQZMp6QyDrZbA2Qe3HPnt5e2uFskK0q0jxUK0L0f2YxIqrk4wZHTp0tBoggJ7Sd+e1S8jTI8Mykp6ONDewTnJFWAZnsMuy5baUMtNLJJVuMpIorTIVp/wDTPIx3tE/LND/FSptxtr0OHHeUtSh1dONYBHfjFR08LWvSlZ4RVNtEdt+Shp7R0rYx1kqVvTFzsKJXBEyS++PXjCWota9kqA5Y91GiGpBZT9H0JKR9ZQyKhLsTZZdQ445hxKgUpGAM+NWuPKIfJp/z+nzLb0xzdIjc3SIq5CEvE9iSRn4V9V220w7dDaYtyUtxkJ+jQhICQO/b51gPBvB8HiOReos+S5HejrCI6m8HrZOcpPMcq0jhnie52yyw7fMtZkKht9AXUyAFK0HTkpI2OB301muA9JKs0NLRH2vhXEtlbsV1tKt1IIB7tudC38NdScKt01hX3ghCwP8AqqDIvaJmzl1lNDP1FwVY/wClVV0ZD5ERm3Rb/wAooDel5xkKK89bT+791Z+sPPTSgArXkknn76PTCSmW/MTJS8mVGOFFJSV742SdwP30LcJQTcr+mMHNH0KiVkZ2GKNJUa+eD7fDkd5CXHbswytQyW+icOn3gYpUfI4Tt+gaulUe1WvGaVEyL9AOu4Jzsse6mFTdR6qVn3UdscHxkEFSQfGrBnh6E1j83R5Vj0Zr2RnCS+6eo2fOn24U1fJPP2VpaLXFT/Io/Vp0QI45NpHup9A7Gbt2iUodbUanRrCsjrjn7aPDDbAOkAHG1V7sW8A/QLgOJ7jqQfkqmsIT0yojWBskZaBxV5EszTSdmUg0mPXW/wCPhOk9paWlY+YPwrmbMmkaY6Utp04PTocQc+OmqaS+CTv0FLtETdvShaYKS2Y0JovuJ71AEgeemtJSEp5AZ8KzLhqyT4fGJuqyh5spWNLGpe6hjcmtEKJTozgNDvWd/IfvpKz0G1fyBvpSUPU4x+zk03YILL1mtLyypS2W16ULCSjrZB7M8j31C9Ky1R0wIiX9brqthp79hRpbo8SBDjx8IWtlsIKkpzkgd9NaTYnlpUzriPguYjXLtKTJb3KmgOsnw7D86icO/wAJpMByJbW3kRwsZWtYaShR7MqI+Ga1pUkH6uwqNPTHnMdDNbQ62DqCVjbPfV+smwALunjCxybVquvSCY+hnSy4VAEkYznnzrTZMox0AOIdUQN+jaUofCgHiODHaEdqIphlpEhDqkp1auqRyIO3jTw9ZcT9Bc7iwMbYkFQ8jmpzxuseuRRIvJnEISrShKmyO1xpY+YFUky6rf6z9wCWwRnrhI+FetPXxvqx7quSofZWwlR9+kCri2ic8ys3duNrz1QlHZ7efzq34iF6zL7ZKbjz7iEOtILjusFs7EH2j99TWYzjrpEFClrUcnowTkmtBdtlvez00KK57S0k1OYjxo7WiOw20nuQjTRnXXMHvHbVA+BYLqsAy8Mp7iQpXw2FX0S3w4m5ZU6ofad3P7qduN2t8BJ6Z0qcG/RtkKP+lCN24mmSAtEQertHtGCrz7KS76D8ZCK9T21tGM0pHTAaw2TvpG5+ANAHDFzi2a+TjKeeabU0pLLjLfSEAqBG3hXltbL94Z1ElS1HJOSVbdtUCGgqXKCmwlSF4xihpJpMady2HLnENjWsqXxLcdR55gvfgnFKgvChsFHzpVUM6fRGPEeFLP6VchzbsrrVkbYrI2ESexKTSJ7wfdXmMjf4Vz/VJFAHWx76WM8udeAkdx91NPrf/kW21d+okHNAExlJB5U8paUjc4odky7kyCoQJDg/4C0Y+JFMIu2rqvokR1d0loo+PL401mi7F3NmtsDKQVnuG1Usm+y3QQ1pbHZp3NcvSUr31pV/VOaoLi5NbWtUUoG22pJOT25+HKtOsVSpFrjcQH8XXNb3FsNyQ4XRGcaydWeSsmtIZldUHI8azC5WeXOll+S620nO6Y6ME+JOaMbSxNmsgRWnnEjbpOSP1jtU8fHrKb0Pk5c6aWS+euSW05GapZd2efOEr0gnA9tWQ4bfcUPXZWM80N8/1j+6r602iJBSFMtaF/f5q8zVvSRKzpgzA4fmSvpFslvP23yU/Dn8Ku0WNlhH07inj3Dqp8ufxq90kJ2dPgRUSQkkkkpPwrN7bLWEiDkNJCW0BKR2BOAK5U9tukeVOLb37R76bKQOaz7xUlDK3F6FFtAKwOqNWkE+O/yqgnniJ/P0Kkp+7GdHzJBNEJaSd8g06hJSNsH3004JqmeyIU5AJcgyE459TOfKqh95tokOktH/AIqSj51rX0hzlX400sKIOQkitP8AVmb4V/0yhicmKv1hkKW4NkKbwQnPM8+6qydJ1P5iQ1IKvrqWsYPurV5Vugvkl6Cws95bBqrf4ds7p60Qt/2alJxUPq9di1c56mbB5zG7R9xpVozfDdjQgJ6LVjtWo5Ne1XdEdA/CgeyusDsJHhU/oGv5seVe9C39weVZU2hAAPfSKlduKn9C39wUuhb+4PKihCv1jIBIBNe7Z20jwNT+hb+4K86Br+bHlRQgwzq7APOnwnOQoAg9nMU2+tiI2HF4SkqCeWdzUAcQQPVVvqWsKbCipoJJUMAnl4UUcHpdpt7+7kNknvCAD5iqiVw5CXno1PtE/cdJHkrIq0TfLe4stqcUlzJ+jUghRwrTnHcTXJu1t1ELJCQkK1qbOCDn5aST3U1pol5TKmNw/DilJW2ZDg31v7/DkPKrRQWGwAlJT2AYpxmfbn5TjKQnU22HsqGAUHO/htzrld0tTeNSwCeQLasnbPy38KHqgsz4RdQC+0e6p0d06dIVn2ZFONOQ3kBxlCXMpKgAncgHB28dqg/l62FlKlJUApttYSUD7YBA59gIJ7AKVHCepZIPVO3eKhvLSfsj3GuGr7bipLaG3A45kpQACVJ0FQUADyIBx7a6k3WCykF2M9hWjHUG+oFXf2AHP40UZHKkn2VyVD7/AJ05EutsmSWmW4jmp0nBUgYG2QTvyPZVv6jEPOO35UUUB9Q3yQD7a9CRz0qHgaIRCjY2YR5UvU4/8yjyooQG1gdjqx402rOn+NCqKDDjnmyjyrk2+GecZv8AVooQEHHVpB6uce2oZd1HrhST7Oyjj8lwT/8AFa/Vrz8kW/8AobO/6NOigCKeSFEF4f8ALpUdfka2/wBCY/UpUVBCfSpUqkoVKlSoAVKlSoAaksNSGS2+gLQeaT21FXaoCusqK2Scg7d4wfhtSpUAdpt0RC9aWUhWc8zzznPnvTZtkFQyqMgnPbk57fxPuOKVKgDpFuhtH6NhCezI7u7w9nKuUWuCkpWIzeoDAPPGxHy28KVKgCUllttjo20BCME4Ttz3PzqIm0W/ZHqrekJ0gHfA5Y8gAe8AClSoA7TboaQQmM2MqJyBg5Ixz7NjiuPyZCXpC2AoaAAFKJwBsOZ7iR7z30qVAHUe2QWlodaitoWncFI5d3l2d3ZU1Pb40qVAHVKlSoAVKlSoAVKlSoAVKlSoA//Z",
        instructor: "Instructor 1",
        time: "10:00 AM",
        date: "2024-02-23",
        academy: { name: "Academy 1" },
        courseFee: 1000,
        description: "Description 1",
        address: "Address 1",
        city: "City 1",
        state: "State 1",
        country: "Country 1",
        rating: 4,
      },
      {
        id: 2,
        name: "Course 2",
        imgURL: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAJQAwgMBIgACEQEDEQH/xAAcAAABBQEBAQAAAAAAAAAAAAAFAAIDBAYHAQj/xABBEAACAQMCAgYGBwcEAQUAAAABAgMABBEFIRIxBhNBUWGRByIycYGhFEJikrHB0RUjM1JTcuEkQ/DxFkRUc6Oy/8QAGQEAAwEBAQAAAAAAAAAAAAAAAQIDAAQF/8QAIxEAAgIBBAMBAQEBAAAAAAAAAAECEQMSITFBBBNRMiJhFP/aAAwDAQACEQMRAD8A6/EuKsJyqum1ShqUJIajcV7mqF3fSQzlEAIHfRBY+VarSLUbX8h+qvzqNrt25qtajCZajKik0zHuqJpG8PKsYfw04LUIlbiANWB86BhyLvVuEVBGKmaTqIiwxmgFF+IU88qFLqZAGYV3+0acNUP9EferUFsuSLmqkibml+0SR/CH3qY17n/aH3qNAIzHSWLflXv0rJ2jx8asLuAe2gYbFHvV2EYqBOYr2e8FqBleLJxscVjF8CmSLtQ/9rp/Rb71eNq0Z/2W8xQNQ64TnVCZKmfUo2H8JvMVVlvEYbI3nWCR8B7qVM+kJ/TfzpUAmhU08GoAacGqghNxUH1I/wCqb3CiYaqV3hZy3AGLLjlRQHsgf/znSznsqzkA54E2GOVeZDbFU+7RoyZX3pjVaKIfqL5VG8Uf8i+VBoKZXT1pFA796uZ2JqKOBFOVRQe/FTBe/lSmsktm44kfb1hkYqO6kDcYzgKPOqtreiZPowtpbcRJxMsqMpI7ADyx8al5Zx27HNGK2DNq9hs75kB5BlBHZTQT4edWrs8E0SgDPV91NVj3L90UIpmk9xi7CvCcnlVkOcb8P3RSB8B5CjuAhjHEwq+mOEVAigdg8qlU4oBJshVJ8KG3jl3XfkM1buH9ThofNOYrmJSRwspHLlg0JOhoqxmfdTWYAE7bVdE8h8PgKrSzFNuIcRIIB7aWV1Y0d3RGRjvppAq6JXwBxZx4CmMxOeXlRoWyrhqVTYpVhQtmvc1HmlmqUKSA1Dd7qCN8V6/rKwzgkUP0maWa09fcD6x7cf8AVC6aGStNjLaYug4vaOK94+FxnY57ahtIpEupWaQFMsFULuOXbmpJsdap+0B/zzoNvSMmtRYyudyNziq1xeQW90kMoOZNhttvtTdI+nGIftAKG24Am2Fxvkd9VNVQNqNrkeXgaZbxEe0tiWTWIIZXjcMxU4ygBHnmlHrVvJIkaJLxOwUbDmdu+gF6yC7kGRuSaj065RdTtsgFVdCz57ztSR3ijS2k0abpDqsOmzRmYkRsmM5AAxzqlpOvWWpztFbyrxjHqlwSw8BVrWrWC8ulivNOF3CygcZxhM53GTzGOzvFc+s9Dv7TpZCuVbT4rpCspbGd8gDv5YNaMuijxt7o6Nrmow2lwjsCwIK4U9lU49ft25QyedUukYDSx9WmAOeKFIyIwDMBuAcmtCWzBljTSNSutQnlFJ51INZi/pP5is5PJ1MyglVjKgk55kmvbeYyLxEADsHhR1WJVbGrh1GOTqvVPFK2AO7mKa+sQxyMjRuShI2IofpiGfqgHKhOLJHOh2pOIbiY8grGlTseSSiqCk+vIGVlifhPYTuR4U1L6O8DSiNwYV4uHi9qs/c3EfVwDLAooDZUjBJ251Y0K6je6aNGyJEI5dopW24jbKWwZtdYSe4SIQlS5xktRB24GA7wRWRe6TTpxPIrnqn9hFyzb7ADvNV7HprLe61FplzpclrIxPCrv64IUncY7QO+i3cQLaW5tozxIGHbXpqGwZmt8uhQhj6p5jepmowdxTBNVJobSrylRBQQzXmabmvM1UlYpn4IZG+yaq6XIPoirkAAtnw3qS8UyW0qrzKHHvrn/TaaeTSYVtJHURq0jqjkFh2++pSdMtCOqLNdZXKygyKc/vT8zTbmfrLrggIYdapLA7DlWf068C6aW3IkiU+qcHuOKu6VcRM8luZQzdWrE7ZzyPKparVF/WluaN5erG5/hseLwHOspPfanPrtmlxBHFC4JUB8kDB5n4Ud1KQLYhyWMckJVt8ZwO/s7d6zt3ewJLaPAPYYEnj4uFWYc/OjJvgEYp7jryHE8ok9Yk+0KpCBIzxIDkLjn3Y3+Qo4LRbu6MayFDjPLNPfQQedw/wSnxbxIZU1Nnuo3Ya3TUArSZiUEK+Mb/5NCLm3vbrUNMnhQtbwzCa4CnCqADjb5e80zUL/AE/SbaUXF80sUMhVbeIgSSyDBIOOSjI3780X9H18NQ0O9uZuEzTXbrKM+xsvCvu4cfOt6pK5MtHNHTpXJHrQZjhNgeYHbQ1I1IYFQeL2tudX78SnUOqgXjEaZc88CquqW8kVjby2l1HDM8vC5deMe4cvnUscubGzQ1NUeLEzs4kUcAHCveRU0UIQAcOSAFye4cqqaD9Je6jt9Tk6x2m4OJF4RjG3zrV/si3HZJ9+qRd2SyRaqynaX1tptq1zdyCOCMEyMQfV5UDGs6bqt7ItpcByzbKykEj3Gr3SO3WFY7PiZIblWVsji3wR+nlXObTTZrHpbZQxl5IFnVjKqnGBvuRy5UL6G0WlI316xuZXZDgY4VJHICo4k6ox8Ix1ZBGPCtDYWNvc2qzPGGZi2+T3mrB0u1/orRiriJJ1NgTVhG4iuTsDgsUAzsc0I1M2cV7p11MzmWCXiV23fDZXB+zhu2ietK+nuLdOFxcusdujHbiJxgnuHOs/BLa2mv2+mPMLpMlZriQ54pMHhHuBwPfUqdnTGqN/ZyBnK965qw1CNMDpfRxHcKp37xj/ADRphtT4pWiOaKUiGvadw0qoSLBpuaRNNJqxE9Y7eNZ286PyXXXAANA3sZHJd+IUfJ2IpWdzI4IbAA2CiklDUPCbjwc6vo0sbP6NGSFCcEZO/Zyqx0ahaVyF4VlhVTn+cHOfnVnprDHBd2ywZxIGcqeQ5cvOsxdajNYXUM1tIY5FBIPYR3GljhrG75HlnfsN7eXUKaBftfP1aw7qeZyeWPjtWB6ASdZrqW0igRzGWYpnI4+EAfgfOoOk1/e3FhaT3J4Fu5XIiX2R1YAB83byFA7a8msryG7gbhliYMpHZXq+H4UZ+M3JXI4/I8uUc1R4Ow2cQtNchhDlgYWwD2YopqUjx6fdSRfxEhdkPcQpxWF6H6zJr3SxJynB1Fm/WAHKlmK7ju5fOtrrRK6RfleYtpcfcNeWsTxtKR1TyRybrg4E8zOS/a25J5nxNGOi/Si56PXDlAJbaYjros/DiH2gPOgWcgDwppVjxBQTtuB+Nd00mqOaGzs7t0bmivrIamsbBroZBkG/ADt+ZoB0yhuLB0a0lZVlkxCoOxY8wR4DJrTaAEGi2PBjg6hAMbfVFYr0sajPbS2EEJ4QyStxdvYv4GvO0LhHasjuyxp0rwJayFus4sMHHgf1ro6txKD3jNcJ0bpdcWlnDYtZpP1aiKKQyFSByAIwa7fbsRBGrHLBACfHFLGLi3Y+SamlRjvSxdCLR7WJGZZ3uAUdTgqANz8wK52+sXT3NtMUVRbMrCNeR78+JrS+le749btrc5HU24KjsJYnPyArG2yLJPHG7eqzhW9xNd+PFHRbPOyZZa6TO4dD5LibQoZ7pOradmkSP+RCfVHlv8aMmo7eNIoUjj2RFCj3Cnk1xnWc99KMsqzaegUiLDsGB+tkVgetIbcHY5zneuk+k+INplpNj2JiufeP8VzUYLfnWOvF+Tp/o6vLrULaeW8cSCNhFHIfaPac/KtgeVYf0ZXKC2vLQk8fEJQD3cjjv5CtuTQSohkbctzylTc0qIhKaaTTjUTE1cge8VVLSXDsoyck4xQTpJ0x0/RFMWfpF1/SjPs/3Hsrm2o9J9Y1l2t4JJESRv4Vv6vwLDc00V9M7N307YDVbZU/ocWM/aP6VktX6rMCuwDBTyqpHfXaWkUVzO8ksalVZjxFVzkDPxNVp7wScLMqHh8MZotVGiepOdhnprPC9hoEMJx1dq7kYzuxA+HsmsoQWQjet5e2kOr+jVrr6LF9Jt0cxyhBxqqsc4PPGM1zeNblCGRiR2cW9d/iebDHBQaJ5fHlN6kzoPohTOp6k4+rCg82P6V0bUlLWFyoGcwuMd/qmuZejK/EPSBoZAiG6jKYTYcS7/gDXU7iSKGMvO6pH3tXB5U4yyuUeDowxahTPnKI+ohJHsjeplfcAetjtK/hWrfo3psV9cOJHlt3kJhi9gIvYDVS70eyA/07NEe44I/Wis8ex/8AmnyjoPo7vzedHkhkcNLauYyvaFwCvv58/Cs76Ybf1NOu99i8R7t8H8ql9G9u9pqV1icNG0HrADHI/wDdEunIt9Y0Oa3THHH+9jLcyV3294rmlKKkUjjlRyCBikiScihDeRr6I0i9i1Cxgu7d+KOVAwb4b188FYxgqox2b5rsPotaVui6daCE6+TqvFcjPzzWmBEnTXo9a6jfR3U8hQvAI1ZRuCCTnx5/KsgvQ+6S4iNrMs0fGvECOFgM10/WoLe8tBDMxBBDArzFCJ5raygwiooUc+2jCbihZwUjVR4MalTkY2NemqWiSGTTIJCQQ4LDHYM1dJpLHoy3pHgabotMyjJgkSQ47s4P41yi3gllBkAAUHALdvurrHTTWrexsZtPKrNPcxlWRuSIdsn8q5lLOoA37MADsrpxYU1cic/Icf5jyE+isslnrtjIh/3QhGeYbY/jXX2Ncq6Caf8AtTWRcPKojsyJCmfWc9nwzvXVGqWVRT2HjOc1/Qyva8pVIYnblWU9Imo3Wm9HXksnMcskix8a81B547q1hrFelQY6MctjcR/jXRHk53wYDQejF9q5jvrhSunmTDzGT1m3wcD39prd6jp2k2OlPptpaxwdZ6ysoy4b+bPMmougSt/4Sgk9kzuVB7uP9c0bVo5bzgA9ZYsk/Go5ZPVsdWKMdDtHGbyd4pnhlK8auV276ptLLJIEXPFyrqfSXoVZ63IJ43+i3Q9qRVyHHiPzrFa10S1Do+BdTTQz27HgWRMhg3ip93PNOpWQWNLgt3HSm4j0CDSLRFt4kjKTMh3kzz9wPbWYkm3OKuWenyai5Xr4YFBxxyZPkB+tF9a6GLBpH0nTL5rq6jBMiEABl+z4j50HNRdFFjbVod6P+CPUpNVn3W0BWJMHDSMMc+zA/EUe1bWZbqUvcSEnsUbAfCgHRlyNFgUHhABzt253z41f03R7rXr2W3tJYIhF/EMjji94XmfwpG7OiKUVZUnvjnnih8113tXR9O9H1nA6vfSvdMN+EsEXPuBzQjpl0FdS2o6LGmMfvbVDvt2p+nlS1ZvYrKfQHWLe1vJre4UKlyAnWY3Xw929GoNPW/WSx66SJyjKJY+akdu+3hv31zq1YpIRurA8u0V0DoXqNu14FuphE3VkKWPtGlaG6bA3Sn0edTYLNockryQL60MkmeNefq55Hnty51F6M9Qv9Oee2u1ZbaQZTrDjgkHhz3/Kuq8ELrxK/GD2jFD7vRNJuphdT2/FMBniD8PLlkDnQ1dEVH/CqYZ9QchZ1iOPaPb7h21S1zonJLaK9nPJJcLuVc4Enh4GpRaxXlrPLJNLA1upaN42weLHzop0auLp7Xi1KSNgQOAk+t45xTOVOgKNxsBdEtX+iM2n3mUy2AG+o35VseIMvEpyvfmhmsaRpepkyOphnA2miyG+PYaD251To/Plv9ZYHmyjdfEg/lW1x6NpZkelzNP0rvRxHBdVGTsPVUU/pN0Ku9P05bqwna64QTcKq+yP5l7SO+h+sXDX/SO7ePJaa5IUAbnJwK7Cl3wwpGVOVUKd/CuvPlUFFWc2DG5Ns4b0R1g6PrVvdFm6vi4ZlH1lPPy5/Cu32V5bX8YkspknXvRs499ZDXug+nalcSXVoz2Uz7kIAYy3fw9nwrISWHSPorOLlFfgRtp4DxIf7hz8xUPZjycMs4ThyjsvA/8AK3lSrBRekvMSF9NlLcIyVzgnwryl0v4G0dMaJe0t5VifSsqjosyRo7yNPHwgZPI5PL3VObzXCQZUhhjPPcA+ZJqtd3VzdmOGNbeRztgS8ZPwUVvbTCsVlrR7eKy6JWNsAA3UpnfmTgn8am017eOOWWQxh2fHrMc4H/DUNjpVzaoZ9QuQ23qx8WAp86zepW9j9KkDXFxJjn1bKFHuPbU23J2VSUY0bN9Qs09ua3X31jfSLqdrdaLHFbXEMkguAeFMZxg91VVj0xP/AEc0h7OOc/lQXpTLbpZwxxWaWxaTIYkksB76aF6hJJULo1HZS2E/06Ny30hcMinIQA8WD8RWtMPRaQgw6dfD+yeRfkGoLoVpqcGmQRQ2iDP7zidRnfftoz1evcI/1Swj7JUfgKWTuTCk0qAuoraW15JDp8UkNuBlUlJLZPPOd+dBbvTtZedNb0XJNvhW6tx1ikb5A7RuKJa2Jor11upuumKDL8WauaZZ2As0kvdRETP6/VoOL8PhT3SHl+aD3RPpfd6tpUk15blLiJuEhEx1pAG4B5HsxVqfpXIPVFhdBvtALQSB9Lti+LmZ4iVkUKCJC/afdy+dEI+kFpCnDGtzJ4yvn8TUXfw2yXIM1PTrfXOO5ltLm2vPqtFE7Fv7tsH8azg0rWLUl0tZZVTclR63v4edbU9IomJVrZ1B7Q4z8KrLdwysSt/dw57Nm/Chc49DJxa2M/Y9IZrZ8dbJC+N1xt8Qa0WkT3Wpush1JigOWTONqrXOhwagSTOk7H6zqyt51BYdGb601BDb3I6j2mfO647P80dUJOk9wq+wpdw2rSuZtRaPJI6sMBt7qjgXSYPau7hv7Mj8qJfsG1u5GnjuLh1O2OMHl2ZIqOTSbaDZ9Mu5e5usz8gfypLTfIGmuiNdW0y3/hi8b+6Vsf8A6qQdI4Ljigit5cuvCvaST2VUYpC2I9JijOec2fnmj+n/AEO2j629urFWxlY4F2Hx3yaNLmgJt7GA0ywvrDpGZrmyk6yFmkVSvECTnByOdbaHUtSYZOmtv2n1fxobquoTyXR/Zk7qjbMFBH+api01S49pLp89p4sfOqZJeynInFKFpGl/aEiDiuYY4R9u4Wmrq9hKxjSdCx5j6vnyoAnR6+f1jGieLMKkPR2U/wAecfdJqLjjXZZSn8E9ro7Oxa/RSTkqr7DwFKl/49D/AO6/+sUq3sh9DUvhqbiGK4QxzRLIp7GGaGz6RFbK0sEtzHt7KPt+tF+E59Y7dtMnkyhGcdlFyFUdzNs2nOpE6SzOOfGxP41XFzZRbRWCb9rCjkttDcD94gbAO+MEfGqF1a29pGZGgmmGNwu5HwoRnHsMoT6IrF7i8cpBBbxKPaLkAL8OdE76LSFtFhupre4kIwWKh8eWcVln6Q2ccmYNOz/8jDHyzT7jpdIkeIbWCJvOnp8qIlpcsYP2nMx4Wl4OQ4V7PgKlGi6hce0kwHez4/Gqtr0g1G8lCdailiABwgfM1tNOigtQJ9a1iFm7IhIAnx76dKS6QtJ9s5veWbtqEdiv8QuIx780cOgxwrme8t48dn/ZFEuk2uaJdiQKTNNwHq3jiOAcc+I1ijLx+0Rv2Uzt8Mza7RoorTSeLEl+zAf0yP0NW+r0OL2Ulk8Sx3oDZwybcEMjZ7lJohHYXsi5FswHiQKR13IyvpF5b3T4v4Vgp/uAqtca9Ij4t7SFAPf+WKkj0i6b2niTPP1s48qcOjfWnMl3kdyR4PzNTlLD2x1HJ8Bs/SK+YYLxr/amfxzRM60g0lktOsnmkKiWWUheEdoAFKPo1pqn940znP1nx8gKJWekaZBstshx2nP60nuxR/KKevI+WBNP1C5WQ4nlB7uLYUYi1q+XYFJvssnEflRaC3tY/ZgiHgEFW+JOSkAd1K80X0ZYpLsFW+p3E7YfSpsdpTIHkaKW8cUy8T2gU88Mq5+VLOCDjPuqQ3KA4JIPjU3NFFFjAnVyEqigHsAqUpvkVCZ1ZtmBpxlwmdvOl1hobJtz3qHiVuRxTXmUN61PjdHA9YfEUmqxqG8KfzV5U+Y/s/er2iCyg88nVA55tVWSeTI37aVKqtiIijuJOJ1DbUpJ5EdcMTkb5pUqjJjoEX9hb3TO0icLjPrJsT7++sLczMjyIMYVsCvKVdfittM586Qa0HTorpkMjyAk9hH6Vp7bSraPiC9Zsuc8WPwrylS5ZPVyNiSo8ktbYTY6iNvWx6wznzqLhRWRkjRC2QeFcUqVcuuX06HFVwS291KspQNtUklzKgYq5yDtSpUU9wEiXEhiWXOGbnivIp5SV9c86VKgwljrXkLK+Dj63bTUldDgN50qVTGLRlfvpzTPxgZ2pUqwGSiaRBlWPup5u5GT1gp94pUqJindM0YV0Yji5jspq3MoUetSpVjHiXUr+0R5U8OSeQz4UqVAJ71j/wA5pUqVYB//2Q==",
        instructor: "Instructor 2",
        time: "02:00 PM",
        date: "2024-02-24",
        academy: { name: "Academy 2" },
        courseFee: 1500,
        description: "Description 2",
        address: "Address 2",
        city: "City 2",
        state: "State 2",
        country: "Country 2",
        rating: 3.5,
      },
      // Add more courses as needed
    ];

    setCourses(mockCourses);
  }, []);

  function handleDelete(id) {
    // You can add delete logic here.
    const updatedCourses = courses.filter((course) => course.id !== id);
    setCourses(updatedCourses);
  }

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
              Admin Dashboard
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
          <h1 style={{ padding: "0 20px" }}>Courses</h1>
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
                        navigate("/admin/courses/users", {
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
                      View Users
                    </Button>
                    <br />
                    <Link
                      to={"/admin/course/edit"}
                      state={{ course: course }}
                    >
                      <Button
                        variant="contained"
                        color="primary"
                        size="small"
                        style={{ marginTop: 10 }}
                      >
                        Edit
                      </Button>
                    </Link>{" "}
                    <Button
                      onClick={() => {
                        handleDelete(course.id);
                      }}
                      variant="contained"
                      color="error"
                      size="small"
                      style={{ marginTop: 10 }}
                    >
                      Delete
                    </Button>
                  </CardContent>
                </Card>
              ))}
          </Container>
        </Box>
      </Box>
    </ThemeProvider>
  );
}
