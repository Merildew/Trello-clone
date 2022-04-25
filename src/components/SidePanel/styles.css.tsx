import { style } from "@vanilla-extract/css";

export const sidePanelWrapper = style({
  position: "absolute",
  backgroundColor: "#f4f5f7",
  boxShadow: "0 12px 24px -6px #091e4240,0 0 0 1px #091e4214",
  top: "0",
  right: "0",
  width: "340px",
  bottom: "0",
});

export const sidePanelHeader = style({
  display: "flex",
  alignItems: "center",
  position: "sticky",
  padding: "0 12px",
  top: "0",
  height: "48px",
  borderBottom: "2px solid #dedede",
});

export const sidePanelBody = style({
  display: "flex",
  flexDirection: "column-reverse",
  whiteSpace: "normal",
  padding: "12px",
});

export const sidePanelScroll = style({
  overflowY: "scroll",
  height: "calc(100% - 48px)",
});

export const sidePanelClose = style({
  width: "20px",
  height: "20px",
  cursor: "pointer",
});

export const sidePanelTitle = style({
  width: "100%",
  color: "#172b4d",
  textAlign: "center",
  fontSize: "16px",
});

export const activity = style({
  margin: "12px 0",
  color: "#172b4d",
});

export const activityAction = style({
  fontSize: "14px",
  marginBottom: "4px",
  overflowWrap: "break-word",
});

export const activityTime = style({
  fontSize: "12px",
});
