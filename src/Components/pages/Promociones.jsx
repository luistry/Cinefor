import { Grid,Container,Card,CardContent,Typography,CardMedia } from "@mui/material"
const  Promociones = () => {
const imagen1 = "https://cdn.discordapp.com/attachments/750089258852941874/1094813241634459690/normalito.jpg"
const imagen2 = "https://cdn.discordapp.com/attachments/750089258852941874/1094822830618718208/istockphoto-535504850-612x612.jpg"
return(
 
    <Container>
      
        <Typography variant="h2" textAlign={"center"} color="orange">Promociones</Typography>
        <Grid sx={{ justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '1rem', margin: 'auto' }}>
    <Card sx={{ marginBottom: '1.5rem' }}>
        <CardMedia component="img"  objectFit="cover" height="725" width={550} src={`${imagen1}`} alt={"El Deluxe"} />
        <CardContent>
            <Typography variant="h3" textAlign={"center"} color="initial">El Tradicional</Typography>
            <Typography variant="subtitle1" textAlign={"center"} color="initial">Caja de Cotufas Medianas + Refresco</Typography>
        </CardContent>
    </Card>
    <Card sx={{ marginBottom: '1.5rem' }}>
        <CardMedia component="img" height="725 " width={550} objectFit="cover" src={`${imagen2}`} alt={"Edicion 3D"} />
        <CardContent>
            <Typography variant="h3" textAlign={"center"} color="initial">Edicion 3D</Typography>
            <Typography variant="subtitle1" textAlign={"center"} color="initial">2 Entradas para funcion 3D</Typography>
            <Typography variant="subtitle1" textAlign={"center"} color="initial">2 Refrescos</Typography>
            <Typography variant="subtitle1" textAlign={"center"} color="initial">Una Caja de Cotufas Tamaño grande</Typography>
        </CardContent>
    </Card>
</Grid>

    </Container>
)
}
export default Promociones