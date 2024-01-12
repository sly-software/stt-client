import React, { useState } from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import {
  Button,
  FormControl,
  Input,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";
import "../css/AddOffer.css";

const offerDataModel = {
  product_description: "Mastercycler® X50 - PCR Thermocycler",
  product_code: "6303000010",
  discount: "20",
  validity: "Offer valid until 30 Dec 2024",
  img_link:
    "https://www.eppendorf.com/product-media/img/global/233332/Eppendorf_PCR_Mastercycler-X50s_product.jpg?imwidth=540",
  product_link:
    "https://www.eppendorf.com/za-en/eShop-Products/PCR/Thermocyclers/Mastercycler-X50-p-PF-217186",
};

export default function AddOffer({ open, setOpen }) {
  const [offerCondition, setOfferCondition] = useState("");

  const handleClick = () => {
    setOpen(!open);
  }
  return (
    <div style={{ position: "absolute" }}>
      <Drawer anchor={`right`} open={open} onClose={() => setOpen(!open)}>
        <div className="head-cover">
          <p>ADD NEW OFFER</p>
        </div>
        <Box
          sx={{
            "& .MuiTextField-root": { m: 1, width: "25ch" },
            minWidth: 500,
            height: "100%",
            top: "4rem",
            padding: "1.5rem",
          }}
          component="form"
          noValidate
        >
          <div className="input-fields-container">
            <FormControl variant="standard" sx={{ m: 1, minWidth: "100%" }}>
              <InputLabel htmlFor="description" required>
                Description
              </InputLabel>
              <Input
                id="description"
                aria-describedby="description-input-field"
                type="text"
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
                value={offerCondition}
                onChange={(e) => setOfferCondition(e.target.value)}
              >
                <MenuItem value={" Offer valid until "}>
                  Offer valid untill
                </MenuItem>
                <MenuItem value={" While stock last "}>
                  While stock last
                </MenuItem>
              </Select>
            </FormControl>

            <FormControl variant="standard" sx={{ m: 1, minWidth: "100%" }}>
              <Input
                id="date"
                aria-describedby="date-input-field"
                type="date"
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
              />
            </FormControl>

            <Button variant="standard" sx={{ margin: "1rem" }} onClick={handleClick}>
              SUBMIT
            </Button>

          </div>
        </Box>
        <div className="head-cover-footer"></div>
      </Drawer>
    </div>
  );
}
