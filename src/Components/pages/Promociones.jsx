import { Grid, Container, Card, CardContent, Typography, CardMedia, Box } from "@mui/material";

const Promociones = () => {
  const imagen1 = "https://cdn.discordapp.com/attachments/750089258852941874/1094813241634459690/normalito.jpg";
  const imagen2 = "https://cdn.discordapp.com/attachments/750089258852941874/1094822830618718208/istockphoto-535504850-612x612.jpg";

  return (
    <Container>
      <Typography variant="h2" textAlign={"center"} color="orange" sx={{ marginBottom: "1.5rem" }}>
        Promociones
      </Typography>
      <Box marginTop="2rem">
        <Grid
          container
          spacing={2}
          justifyContent="center"
          alignItems="center"
        >
          <Grid item>
          <Card sx={{ maxWidth: 550, height: 550 }}>

              <CardMedia
                component="img"
                height="400"
                sx={{ objectFit: "cover" }}
                src={`${imagen1}`}
                alt={"El Deluxe"}
              />
              <CardContent>
                <Typography variant="h3" textAlign={"center"} color="initial">
                  El Tradicional
                </Typography>
                <Typography variant="body2" textAlign={"center"} color="initial">
                  Caja de Cotufas Medianas + Refresco
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item>
          <Card sx={{ maxWidth: 550, height: 550 }}>

              <CardMedia
                component="img"
                height="400"
                sx={{ objectFit: "cover" }}
                src={`${imagen2}`}
                alt={"Edicion 3D"}
              />
              <CardContent>
                <Typography variant="h3" textAlign={"center"} color="initial">
                  Edicion 3D
                </Typography>
                <Typography variant="body2" textAlign={"center"} color="initial">
                  2 Entradas para funcion 3D
                </Typography>
                <Typography variant="body2" textAlign={"center"} color="initial">
                  2 Refrescos
                </Typography>
                <Typography variant="body2" textAlign={"center"} color="initial">
                  Una Caja de Cotufas Tamaño grande
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default Promociones;
