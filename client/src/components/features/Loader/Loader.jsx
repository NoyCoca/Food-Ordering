import CircularProgress from "@mui/material/CircularProgress";
import Stack from "@mui/material/Stack";

const Loader = () => {
  return (
    <Stack
      sx={{
        color: "#fbb44b",
        display: "flex",
        justifyContent: "center",
        width: "100%",
        height: "100vh",
        alignItems: "center",
      }}
      spacing={2}
      direction="row"
    >
      <CircularProgress color="inherit" />
    </Stack>
  );
};

export default Loader;