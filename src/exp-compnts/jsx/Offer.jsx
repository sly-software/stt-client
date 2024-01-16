import React, { useEffect, useRef, useState } from "react";
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
  Zoom,
  Link,
} from "@mui/material";
import "../css/offers.css";
import { LuPlus } from "react-icons/lu";
import AddOffer from "./AddOffer";
import { useDispatch, useSelector } from "react-redux";
import { fetchOffers } from "../../features/Offers";

export default function Offer() {
  const [open, setOpen] = useState(false);
  const [pCodeToEdit, setPCodeToEdit] = useState("");
  const [edit, setEdit] = useState(false);
  const dispatch = useDispatch();
  const currentOffers = useSelector((state) => state.offers.currentOffers);
  const productCode = useRef();

  useEffect(() => {
    dispatch(fetchOffers());
    // console.log(currentOffers[0].img_link);
  }, [dispatch]);

  const handleEdit = () => {
    setPCodeToEdit(productCode.current.innerText);
    setOpen(!open);
    setEdit(true);
  };

  return (
    <div className="offers-container">
      {currentOffers.map((data, index) => (
        <Zoom
          in={true}
          style={{ transitionDelay: `${index * 400 + 800}ms` }}
          key={index}
        >
          <Card sx={{ maxWidth: 345 }}>
            <CardMedia
              component="img"
              alt="product img"
              height="auto"
              image={String(data.img_link)}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {data.product_description}
              </Typography>

              <Typography gutterBottom variant="p" component="div">
                Cat. no: <span ref={productCode}>{data.product_code}</span>.
              </Typography>

              <Typography
                variant="body2"
                color="text.secondary"
                sx={{ marginTop: "1rem" }}
              >
                Now available with <b>{data.discount}% Discount</b>.
                <span>
                  {data.validity === ""
                    ? ` ${data.discount_condition} `
                    : ` ${data.discount_condition} ${new Date(
                        data.validity
                      ).getDate()}/${
                        new Date(data.validity).getMonth() + 1
                      }/${new Date(data.validity).getFullYear()} `}
                </span>
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small" onClick={handleEdit}>
                Edit
              </Button>
              <Button size="small">
                <Link href={data.product_link} underline="hover" target="blank">
                  Learn more
                </Link>
              </Button>
            </CardActions>
          </Card>
        </Zoom>
      ))}

      <AddOffer
        open={open}
        setOpen={setOpen}
        editState={edit}
        setEdit={setEdit}
        pCodeToEdit={pCodeToEdit}
      />

      <div className="offer-add-new">
        <button
          onClick={() => {
            setOpen(!open);
            setEdit(false);
          }}
        >
          <LuPlus /> NEW
        </button>
      </div>
    </div>
  );
}
