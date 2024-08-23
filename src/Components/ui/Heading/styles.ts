export const useStyles = (variant: "primary" | "secondary") => {
  const defaultProps = {
    fontSize: "80px",
    display: "inline-block",
  };

  const styles = {
    primary: {
      ...defaultProps,
      color: "text.secondary",
    },
    secondary: {
      ...defaultProps,
      color: "text.primary",
    },
  };

  return styles[variant];
};
