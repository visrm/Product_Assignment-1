import Grid from "@mui/material/Grid2";
import { useState, useEffect } from "react";
import axios from "axios";
import { Box, Card, CardContent, CardMedia, Typography } from "@mui/material";

const ViewProd = () => {
  const [products, setProduct] = useState([]);
  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((res) => setProduct(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <Box>
        <Typography
          variant="h4"
          component="div"
          color="primary"
          sx={{
            fontFamily: "Poppins",
            textAlign: "center",
            fontWeight: "600",
            my: "1rem",
          }}
        >
          Products Dashboard
        </Typography>
        <Grid
          container
          spacing={2}
          sx={{ placeContent: "center", margin: "1.25rem" }}
          alignContent="center"
        >
          {products.map((item) => {
            return (
              <Grid key={item.id} size={4} sx={{ borderRadius: "1rem" }}>
                <Card
                  sx={{
                    maxWidth: 360,
                    height: "100%",
                    padding: "0.5rem",
                    mx: "auto",
                  }}
                >
                  <CardMedia
                    sx={{ height: 180, borderRadius: "innherit" }}
                    image={item.image}
                    title={item.title}
                  />
                  <CardContent>
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        flexWrap: "no-wrap",
                        justifyContent: "space-between",
                      }}
                    >
                      <Typography
                        gutterBottom
                        variant="body1"
                        component="div"
                        sx={{
                          width: "75%",
                          fontFamily: "Georgia",
                          fontWeight: "500",
                        }}
                      >
                        {item.title}
                      </Typography>
                      <Typography variant="body1" sx={{ fontWeight: "500" }}>
                        {"₹ " + item.price}
                      </Typography>
                    </div>
                    <Typography
                      variant="subtitle1"
                      sx={{ color: "text.secondary", fontStyle: "italic" }}
                      align="left"
                    >
                      <span
                        style={{
                          fontWeight: "500",
                        }}
                      >
                        category:
                      </span>
                      &nbsp;{item.category}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            );
          })}
        </Grid>
      </Box>
    </>
  );
};

export default ViewProd;
