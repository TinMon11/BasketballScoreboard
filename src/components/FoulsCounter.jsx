import React from "react";
import DangerousIcon from "@mui/icons-material/Dangerous";

export const FoulsCounter = ({ fouls = 0 }) => {
  const icons = [];

  for (let i = 1; i <= 5; i++) {
    const iconColor = i <= fouls ? "red" : "gray";
    icons.push(<DangerousIcon key={i} style={{ color: iconColor }} />);
  }

  return <div className="flex items-center">{icons}</div>;
};
