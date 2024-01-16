import React, { useEffect, useState } from "react";
import {
  Box,
  Drawer,
  Button,
  FormControl,
  Input,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";
import "../css/AddOffer.css";
import { useDispatch } from "react-redux";
import {
  addNewOffer,
  getOffers,
  fetchOffers,
  addNewOfferToDb,
} from "../../features/Offers";

export default function AddOffer({
  pCodeToEdit,
  open,
  setOpen,
  editState,
  setEdit,
}) {
  const [product_description, setProductDescription] = useState("");
  const [product_code, setProductCode] = useState("");
  const [discount, setDiscount] = useState("");
  const [discount_condition, setDiscountCondition] = useState("");
  const [validity, setValidity] = useState("");
  const [image_link, setImageAddres] = useState("");
  const [product_link, setProductLink] = useState("");
  const dispatch = useDispatch();

  const handleClick = () => {
    if (
      product_code &&
      product_description &&
      discount &&
      discount_condition &&
      image_link &&
      product_link
    ) {
      // dispatch(
      //   addNewOffer({
      //     product_description,
      //     product_code,
      //     discount,
      //     discount_condition,
      //     validity,
      //     image_link,
      //     product_link,
      //   })
      // );
      dispatch(
        addNewOfferToDb({
          product_description,
          product_code,
          discount,
          discount_condition,
          validity,
          image_link,
          product_link,
        })
      );
      dispatch(fetchOffers());
    }
    setOpen(!open);
  };

  const handleEdit = () => {
    if (
      product_code &&
      product_description &&
      discount &&
      discount_condition &&
      image_link &&
      product_link
    ) {
      dispatch(
        updateExistingOffer({
          product_description,
          product_code,
          discount,
          discount_condition,
          validity,
          image_link,
          product_link,
        })
      );
    }

    dispatch(getOffers());

    setOpen(!open);
    setEdit(!editState);
  };

  return (
    <div style={{ position: "absolute" }}>
      <Drawer anchor={`right`} open={open} onClose={() => setOpen(!open)}>
        <div className="head-cover">
          <p>ADD NEW OFFER</p>
        </div>
        <Box
          sx={{
            "& .MuiTextField-root": { m: 1, width: "25ch" },
            minWidth: "30rem",
            height: "100%",
            top: "4rem",
            padding: "1.5rem",
          }}
          component="form"
        >
          <div className="input-fields-container">
            <FormControl variant="standard" sx={{ m: 1, minWidth: "100%" }}>
              <InputLabel htmlFor="product_description" required>
                product_Description
              </InputLabel>
              <Input
                id="product_description"
                aria-describedby="product_description-input-field"
                type="text"
                value={product_description}
                onChange={(e) => setProductDescription(e.target.value)}
              />
            </FormControl>

            <FormControl variant="standard" sx={{ m: 1, minWidth: "100%" }}>
              <InputLabel htmlFor="item-code" required>
                Item Code
              </InputLabel>
              <Input
                id="item-code"
                aria-describedby="item-code-input-field"
                type="text"
                value={product_code}
                onChange={(e) => setProductCode(e.target.value)}
              />
            </FormControl>

            <FormControl variant="standard" sx={{ m: 1, minWidth: "100%" }}>
              <InputLabel htmlFor="discount" required>
                Discount
              </InputLabel>
              <Input
                id="discount"
                aria-describedby="discount-input-field"
                type="number"
                value={discount}
                onChange={(e) => setDiscount(e.target.value)}
              />
            </FormControl>

            <FormControl variant="standard" sx={{ m: 1, minWidth: "100%" }}>
              <InputLabel id="silvester" required>
                Discount Condition
              </InputLabel>
              <Select
                labelId="silvester"
                id="silvester"
                label="condition"
                value={discount_condition}
                onChange={(e) => setDiscountCondition(e.target.value)}
              >
                <MenuItem value={"Offer valid until"}>
                  Offer valid untill
                </MenuItem>
                <MenuItem value={"While stock last"}>While stock last</MenuItem>
              </Select>
            </FormControl>

            <FormControl variant="standard" sx={{ m: 1, minWidth: "100%" }}>
              <Input
                id="validity"
                aria-describedby="validity-input-field"
                type="date"
                value={validity}
                onChange={(e) => setValidity(e.target.value)}
                disabled={discount_condition === "While stock last"}
              />
            </FormControl>

            <FormControl variant="standard" sx={{ m: 1, minWidth: "100%" }}>
              <InputLabel htmlFor="image-address" required>
                Image Address
              </InputLabel>
              <Input
                id="image-address"
                aria-describedby="image-address-input-field"
                type="text"
                value={image_link}
                onChange={(e) => setImageAddres(e.target.value)}
              />
            </FormControl>

            <FormControl variant="standard" sx={{ m: 1, minWidth: "100%" }}>
              <InputLabel htmlFor="product-link" required>
                Product Link
              </InputLabel>
              <Input
                id="product-link"
                aria-describedby="product-link-input-field"
                type="text"
                value={product_link}
                onChange={(e) => setProductLink(e.target.value)}
              />
            </FormControl>

            {editState ? (
              <Button
                variant="outlined"
                sx={{ margin: "1rem", fontWeight: "bold" }}
                color="secondary"
                onClick={handleEdit}
              >
                Save Changes
              </Button>
            ) : (
              <Button
                variant="outlined"
                sx={{ margin: "1rem", fontWeight: "bold" }}
                onClick={handleClick}
                color="secondary"
              >
                SUBMIT
              </Button>
            )}
          </div>
        </Box>
        <div className="head-cover-footer"></div>
      </Drawer>
    </div>
  );
}
