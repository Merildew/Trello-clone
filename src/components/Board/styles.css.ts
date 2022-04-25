import { style } from "@vanilla-extract/css";

export const boardHeader = style({
  display: "flex",
  justifyContent: "space-between",
});

export const boardHeaderInput = style({
  backgroundColor: "rgb(0, 121, 191)",
  border: "none",
  margin: "8px 0 0 8px",
  color: "#fff",
  fontWeight: "700",
  cursor: "pointer",
  outline: "none",
  fontSize: "18px",
  height: "32px",
  borderRadius: "3px",
  textAlign: "center",
  selectors: {
    "&:hover": {
      backgroundColor: "#ffffff52",
    },
    "&:focus": {
      backgroundColor: "#fff",
      color: "#172b4d",
    },
  },
});

export const showMenuButton = style({
  backgroundColor: "#ffffff3d",
  margin: "8px 8px 0 0",
  border: "none",
  padding: "6px 12px",
  color: "#fff",
  textAlign: "left",
  borderRadius: "3px",
  selectors: {
    "&:hover": {
      cursor: "pointer",
      boxShadow: "0 1px 0 #091e4240",
      backgroundColor: "#ffffff52",
    },
  },
});

export const wrapper = style({
  background: "rgb(0, 121, 191)",
  whiteSpace: "nowrap",
  position: "absolute",
  top: "0",
  bottom: "0",
  left: "0",
  right: "0",
});

export const boardWrapper = style({
  height: "100%",
  display: "flex",
  flexDirection: "column",
});

export const listBoard = style({
  padding: "8px",
  height: "100%",
  overflowX: "scroll",
});

export const addListButton = style({
  backgroundColor: "#ffffff3d",
  border: "none",
  padding: "6px 12px",
  color: "#fff",
  height: "44px",
  width: "272px",
  textAlign: "left",
  borderRadius: "3px",
  selectors: {
    "&:hover": {
      cursor: "pointer",
      boxShadow: "0 1px 0 #091e4240",
      backgroundColor: "#ffffff52",
    },
  },
});
