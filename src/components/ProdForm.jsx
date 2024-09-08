import {
  Box,
  Button,
  InputAdornment,
  Stack,
  TextField,
  Typography,
} from "@mui/material";

const ProdForm = () => {
  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          margin: "1rem auto",
          placeItems: "center",
          fontFamily: "Georgia",
        }}
      >
        <Box component="form" autoComplete="off" sx={{ padding: "2rem", borderRadius: "0.25em"}}>
          <Typography
            variant="h4"
            color="primary"
            sx={{ margin: "0.5rem 0", fontWeight: "600", fontFamily: "Poppins" }}
          >
            Product Details
          </Typography>
          <Stack direction="column" spacing={0.5} sx={{ maxWidth: "480px" }}>
            <label htmlFor="name">Product Name :</label>
            <TextField
              placeholder="Name"
              id="name"
              variant="outlined"
              size="small"
              type="text"
              defaultValue=""
            />
            <label htmlFor="image">Product Image :</label>
            <TextField
              type="file"
              id="image"
              accept="image/*"
              defaultValue=""
              helperText="choose image files (in .png .jpg format)"
            />
            <label htmlFor="category">Product Category :</label>
            <TextField
              placeholder="Category"
              id="category"
              variant="outlined"
              size="small"
              type="text"
              defaultValue=""
            />
            <label htmlFor="price">Product Price :</label>
            <TextField
              placeholder="Price"
              id="price"
              variant="outlined"
              size="small"
              type="text"
              defaultValue=""
              slotProps={{
                input: {
                  startAdornment: (
                    <InputAdornment position="start">₹</InputAdornment>
                  ),
                },
              }}
            /><br/>
            <Button type="submit" variant="contained">
              Submit
            </Button>
          </Stack>
        </Box>
      </div>
    </>
  );
};

export default ProdForm;
