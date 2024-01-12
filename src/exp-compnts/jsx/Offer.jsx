import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import "../css/offers.css";
import Link from "@mui/material/Link";
import { LuPlus } from "react-icons/lu";
import { Zoom } from "@mui/material";
import AddOffer from "./AddOffer";

const offerDataModel = [
  {
    product_description: "Mastercycler® X50 - PCR Thermocycler",
    product_code: "6303000010",
    discount: "20",
    validity: "Offer valid until 30 Dec 2024",
    img_link:
      "https://www.eppendorf.com/product-media/img/global/233332/Eppendorf_PCR_Mastercycler-X50s_product.jpg?imwidth=540",
    product_link:
      "https://www.eppendorf.com/za-en/eShop-Products/PCR/Thermocyclers/Mastercycler-X50-p-PF-217186",
  },

];

export default function Offer() {
  const [open, setOpen] = useState(false);

  return (
    <div className="offers-container">
      {offerDataModel.map((data, index) => (
        <Zoom
          in={true}
          style={{ transitionDelay: `${index * 400 + 800}ms` }}
          key={index}
        >
          <Card sx={{ maxWidth: 345 }}>
            <CardMedia
              component="img"
              alt="product under offer"
              height="auto"
              image={data.img_link}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {data.product_description}
              </Typography>

              <Typography gutterBottom variant="p" component="div">
                Cat. no: {data.product_code}.
              </Typography>
              <Typography
                variant="body2"
                color="text.secondary"
                sx={{ marginTop: "1rem" }}
              >
                Now available with <b>{data.discount}% Discount</b>.{" "}
                {data.validity}
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Edit</Button>
              <Button size="small">
                <Link href={data.product_link} underline="hover" target="blank">
                  Learn more
                </Link>
              </Button>
            </CardActions>
          </Card>
        </Zoom>
      ))}

      <AddOffer open={open} setOpen={setOpen}/>

      <div className="offer-add-new">
        <button onClick={()=>setOpen(!open)}>
          <LuPlus /> NEW
        </button>
      </div>
    </div>
  );
}
