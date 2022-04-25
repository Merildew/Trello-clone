import { style, styleVariants } from "@vanilla-extract/css";

export const mainPageWrapper = style({
  position: "absolute",
  top: "0",
  bottom: "0",
  right: "0",
  left: "0",

  backgroundColor: "#FAFBFC",
  color: "#172b4d",
});

export const mainHeader = style({
  position: "sticky",
  width: "100%",
  height: "44px",
  backgroundColor: "rgb(0, 121, 191)",
});

export const logo = style({
  height: "28px",
  margin: "8px 36px",
});

export const boardsListWrapper = style({
  maxWidth: "825px",
  margin: "0 auto",
  padding: "40px 16px 0",
  color: "#172b4d",
});

export const boardsList = style({
  display: "flex",
  flexWrap: "wrap",
  marginTop: "12px",
});

export const createBoardBlock = style({
  position: "relative",
  width: "20%",
  margin: "0 2% 2% 0",
});

export const createBoardButton = style({
  display: "flex",
  alignItems: "center",
  backgroundColor: "#091e420a",
  border: "none",
  padding: "6px 12px",
  color: "#172b4d",
  height: "80px",
  textAlign: "center",
  borderRadius: "3px",
  fontSize: "14px",
  selectors: {
    "&:hover": {
      cursor: "pointer",
      backgroundColor: "#091e4214",
    },
  },
});

export const createBoardTitle = style({
  flexGrow: "1",
});

export const createPanelWrapper = style({
  position: "absolute",
  width: "242px",
  top: "-50%",
  left: "calc(100% + 12px)",
  backgroundColor: "#f4f5f7",
  boxShadow: "0 12px 24px -6px #091e4240,0 0 0 1px #091e4214",
});

export const createPanelHeader = style({
  display: "flex",
  alignItems: "center",
  padding: "0 12px",
  height: "48px",
  borderBottom: "2px solid #dedede",
});

export const sidePanelBody = style({
  whiteSpace: "normal",
  padding: "12px",
});

export const createPanelClose = style({
  width: "20px",
  height: "20px",
  cursor: "pointer",
});

export const createPanelTitle = style({
  width: "100%",
  color: "#5e6c84",
  textAlign: "center",
  fontSize: "14px",
  fontWeight: "400",
});

export const createBodyButton = style({
  backgroundColor: "#0079bf",
  padding: "6px 12px",
  color: "#fff",
  border: "none",
  borderRadius: "3px",
  selectors: {
    "&:hover": {
      cursor: "pointer",
      boxShadow: "0 1px 0 #091e4240",
      backgroundColor: "#055a8c",
    },
  },
});

const baseInput = style({
  backgroundColor: "#fff",
  padding: "8px 4px",
  color: "#172b4d",
  fontWeight: "600",
  width: "100%",
  cursor: "pointer",
  outline: "none",
  fontSize: "14px",
  height: "32px",
  borderRadius: "3px",
  margin: "8px 0",
});

export const boardTitleInput = styleVariants({
  active: [baseInput, { border: "#026AA7 2px solid" }],
  error: [baseInput, { border: "none", boxShadow: "inset 0 0 0 2px #eb5a46" }],
});

export const inputLabel = style({
  fontSize: "12px",
  color: "#5e6c84",
  fontWeight: "700",
});

export const boardLink = style({
  textDecoration: "none",
  margin: "0 2% 2% 0",
  color: "#fff",
  fontSize: "16px",
  fontWeight: "700",
  width: "20%",
  height: "80px",
  padding: "8px",
  backgroundColor: "rgb(0, 121, 191)",
  borderRadius: "3px",
  selectors: {
    "&:hover": {
      cursor: "pointer",
      backgroundColor: "#055a8c",
    },
    "&:nth-of-type(4n)": {
      marginRight: "0",
    },
  },
});
