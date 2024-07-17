import { ImageResponse } from "next/og";

const size = { width: 32, height: 32 };

const styles = {
  fontSize: 24,
  background: "black",
  width: "100%",
  height: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: "white",
  borderRadius: 50,
};

export default function Icon() {
  return new ImageResponse(<div style={styles}>A</div>, { ...size });
}
