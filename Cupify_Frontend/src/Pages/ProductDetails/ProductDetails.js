import React, { useState } from "react";
import './ProductDetails.css'
import LuggageIcon from '@mui/icons-material/Luggage';
import LockClockIcon from '@mui/icons-material/LockClock';
import PublicIcon from '@mui/icons-material/Public';
import RecyclingIcon from '@mui/icons-material/Recycling';
import AcUnitIcon from '@mui/icons-material/AcUnit';

import {
  Box,
  Typography,
  Button,
  Grid,
  IconButton,
  Card,
  CardMedia,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

const ProductDetails = () => {

  // State for quantity
  const [quantity, setQuantity] = useState(1);

  // State for main image
  const [mainImage, setMainImage] = useState('https://www.milton.in/cdn/shop/files/Glassy_350_Pink_4.jpg?v=1701346019&width=1000');


  const features = [
    { icon: <LuggageIcon />, label: "Handcrafted" },
    { icon: <LockClockIcon />, label: "Durable" },
    { icon: <PublicIcon />, label: "Desh ki Mitti" },
    { icon: <RecyclingIcon />, label: "Recyclable" },
    { icon: <AcUnitIcon />, label: "Lead & Cadmium Free" },
  ];

  let thumbnails = ['//monsta-demo.myshopify.com/cdn/shop/files/slider4.jpg?v=1614305543',
    'https://www.milton.in/cdn/shop/files/Glassy_350_Pink_4.jpg?v=1701346019&width=1000',
    '//monsta-demo.myshopify.com/cdn/shop/files/slider4.jpg?v=1614305543']


  // Increase Quantity
  const handleIncrease = () => {
    setQuantity(quantity + 1);
  };

  // Decrease Quantity
  const handleDecrease = () => {
    if (quantity > 1) setQuantity(quantity - 1);
  };

  // Handle Thumbnail Click
  const handleThumbnailClick = (img) => {
    setMainImage(img);
  };

  return (
    <Box sx={{ padding: 2 }}>
      <Grid container spacing={4}>
        {/* Left Section: Image Gallery */}
        <Grid item xs={12} md={6}>
          <Card>
            <CardMedia
              component="img"
              height="300"
              image={mainImage}
              alt="Handcrafted Hammered Coffee Mug"
            />
          </Card>
          <Box sx={{ display: "flex", gap: 1, mt: 2 }}>
            {/* Thumbnails */}
            {thumbnails?.map((thumb, index) => (
              <img
                key={index}
                src={`${thumb}`}
                alt={`Thumbnail ${index}`}
                onClick={() => handleThumbnailClick(thumb)}
                style={{
                  width: "70px",
                  height: "70px",
                  objectFit: "cover",
                  cursor: "pointer",
                  borderRadius: "5px",
                }}
              />
            ))}
          </Box>
        </Grid>

        {/* Right Section: Product Details */}
        <Grid item xs={12} md={6}>
          <Typography variant="h5" className="font-weight-bold">
            Handcrafted Hammered Finish Coffee Mug, 440 ML, Femora
          </Typography>
          <Typography sx={{ color: "green", mt: 1 }}>Tax included</Typography>
          <Typography
            sx={{
              fontSize: "1.5rem",
              fontWeight: "bold",
              mt: 1,
            }}
          >
            Rs. 616.00
            <span style={{ textDecoration: "line-through", marginLeft: "10px" }}>
              Rs. 880.00
            </span>
          </Typography>
          <Typography sx={{ color: "red" }}>Save 30%</Typography>

          {/* Quantity Selector */}
          <Box sx={{ display: "flex", alignItems: "center", mt: 2 }}>
            <IconButton onClick={handleDecrease}>
              <RemoveIcon />
            </IconButton>
            <Typography sx={{ mx: 2 }}>{quantity}</Typography>
            <IconButton onClick={handleIncrease}>
              <AddIcon />
            </IconButton>
          </Box>

          {/* Buttons */}
          <Box sx={{ mt: 2 }}>
            <Button variant="outlined" sx={{ mr: 2 }}>
              Add to cart
            </Button>
            <Button variant="contained">BUY IT NOW</Button>
          </Box>

          {/* Offer Section */}
          <Box sx={{ mt: 3 }} className="Offer-section">
            <Typography variant="h6">Buy more save more!</Typography>
            <Box sx={{ mt: 1, padding: 2, border: "1px solid #ddd" }} className="offer-box">
              <Typography>Buy 2 get Rs. 25.00 off on each product</Typography>
              <Button variant="contained" sx={{ mt: 3 }}>
                Grab this deal
              </Button>
            </Box>
            <Box sx={{ mt: 2, padding: 2, border: "1px solid #ddd" }} className="offer-box">
              <Typography>Buy 3 get Rs. 35.00 off on each product</Typography>
              <Button variant="contained" sx={{ mt: 3 }}>
                Grab this deal
              </Button>
            </Box>
          </Box>

          {/* Product Details Section */}
          <Box sx={{ mt: 4 }}>
            <Typography variant="h6" className="font-weight-bold">Specifications</Typography>
            <List>
              <ListItem>
                <ListItemText><span className="font-weight-bold">Capacity:</span> 440 ML</ListItemText>
              </ListItem>
              <ListItem>
                <ListItemText><span className="font-weight-bold">Diameter:</span>  7 CM, Height: 12 CM</ListItemText>
              </ListItem>
              <ListItem>
                <ListItemText><span className="font-weight-bold">Material:</span>  Borosilicate Glass</ListItemText>
              </ListItem>
              <ListItem>
                <ListItemText><span className="font-weight-bold">Care instructions:</span> Handwash with mild soap, not safe for microwave.</ListItemText>
              </ListItem>
              <ListItem>
                <ListItemText><span className="font-weight-bold">Warranty:</span> 1 year from purchase date</ListItemText>
              </ListItem>
            </List>
          </Box>

        </Grid>
      </Grid>



      {/* Features Section */}
      <Box sx={{ mt: 4, display: "flex", justifyContent: "space-between" }} className="product-extra-details">
        {features.map((feature, index) => (
          <Box key={index} sx={{ textAlign: "center" }} >
            {/* <img
              src={feature.icon}
              alt={feature.label}
              style={{ width: "50px", height: "50px", marginBottom: "10px" }}
            /> */}
            {feature.icon}
            <Typography>{feature.label}</Typography>
          </Box>
        ))}
      </Box>

      {/* WhatsApp Icon */}
      <Box sx={{ position: "fixed", bottom: 16, right: 16 }}>
        <IconButton
          sx={{
            backgroundColor: "#25D366",
            color: "white",
            "&:hover": { backgroundColor: "#1E9D45" },
          }}
        >
          <WhatsAppIcon />
        </IconButton>
      </Box>
    </Box>
  );
};


export default ProductDetails;