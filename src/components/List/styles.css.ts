import { style } from "@vanilla-extract/css";

export const listWrapper = style({
  display: "inline-block",
  verticalAlign: "top",
  maxHeight: "100%",
  backgroundColor: "#ebecf0",
  borderRadius: "3px",
  width: "272px",
  padding: "0 8px 8px",
  margin: "0 4px",
});

export const listHeader = style({
  display: "flex",
  margin: "6px 0",
});

export const listHeaderMenu = style({
  display: "flex",
  justifyContent: "space-evenly",
  alignItems: "center",
  width: "32px",
  height: "32px",
  padding: "6px",
  selectors: {
    "&:hover": {
      cursor: "pointer",
      backgroundColor: "#091e4221",
      borderRadius: "3px",
    },
  },
});

export const listHeaderMenuPart = style({
  width: "3px",
  height: "3px",
  backgroundColor: "#172b4d",
  borderRadius: "50%",
});

export const listTitleInput = style({
  backgroundColor: "#ebecf0",
  border: "none",
  padding: "8px 4px",
  color: "#172b4d",
  fontWeight: "600",
  width: "100%",
  cursor: "pointer",
  outline: "none",
  fontSize: "14px",
  height: "32px",
  selectors: {
    "&:focus": {
      border: "#026AA7 2px solid",
      backgroundColor: "#fff",
      borderRadius: "3px",
    },
  },
});

export const listCard = style({
  backgroundColor: "#fff",
  borderRadius: "3px",
  padding: "6px 12px",
  fontSize: "16px",
  boxSizing: "content-box",
  boxShadow: "0 1px 0 #091e4240",
  wordWrap: "break-word",
  whiteSpace: "break-spaces",
  margin: "6px 0",
  selectors: {
    "&:hover": {
      backgroundColor: "#f4f5f7",
      cursor: "pointer",
    },
  },
});

export const addCardButton = style({
  color: "#5e6c84",
  padding: "4px 8px",
  selectors: {
    "&:hover": {
      cursor: "pointer",
      backgroundColor: "#091e4221",
      borderRadius: "3px",
    },
  },
});

export const addCardControlPanel = style({
  display: "flex",
  alignItems: "center",
});

export const addCardText = style({
  border: "none",
  padding: "8px 4px",
  color: "#172b4d",
  fontWeight: "400",
  width: "100%",
  cursor: "pointer",
  outline: "none",
  fontSize: "14px",
  minHeight: "72px",
  overflow: "hidden",
  overflowWrap: "break-word",
  borderRadius: "3px",
  margin: "6px 0",
  resize: "vertical",
  selectors: {
    "&:focus": {
      cursor: "text",
      boxShadow: "0 1px 0 #091e4240",
    },
  },
});

export const addCardConfirm = style({
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

export const addCardClose = style({
  width: "24px",
  height: "24px",
  cursor: "pointer",
  margin: "0 8px",
});
