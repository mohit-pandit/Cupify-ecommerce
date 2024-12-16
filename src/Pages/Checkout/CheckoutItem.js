import React, { useState } from "react";
import {
  Box,
  Grid,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  TextField,
  Button,
  RadioGroup,
  FormControlLabel,
  Radio,
  Paper,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export const CheckoutItem = () => {
  const [billingDetails, setBillingDetails] = useState({
    address: "",
    city: "",
    postalCode: "",
  });
  const [paymentMethod, setPaymentMethod] = useState("");
  const [errors, setErrors] = useState({});

  const cartItem = {
    name: "Century Dhaniya 100g",
    price: 50,
    image: "https://via.placeholder.com/80", // Replace with actual image path
    quantity: 1,
  };

  const handleInputChange = (e) => {
    setBillingDetails({
      ...billingDetails,
      [e.target.name]: e.target.value,
    });
  };

  const handlePaymentMethodChange = (e) => {
    setPaymentMethod(e.target.value);
  };

  const validateForm = () => {
    const newErrors = {};
    if (!billingDetails.address) newErrors.address = "Address is required.";
    if (!billingDetails.city) newErrors.city = "City is required.";
    if (!billingDetails.postalCode)
      newErrors.postalCode = "Postal Code is required.";
    if (!paymentMethod) newErrors.paymentMethod = "Payment method is required.";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handlePayNow = () => {
    if (validateForm()) {
      alert("Payment processed successfully!");
    }
  };

  return (
    <Box sx={{ padding: 3 }}>
      <Grid container spacing={4}>
        {/* Left Section: Billing Address and Payment */}
        <Grid item xs={12} md={8}>
          <Accordion defaultExpanded>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              sx={{ fontWeight: "bold", fontSize: "1.2rem" }}
            >
              <Typography>1. Billing Address</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <TextField
                label="Address"
                name="address"
                fullWidth
                margin="normal"
                value={billingDetails.address}
                onChange={handleInputChange}
                error={!!errors.address}
                helperText={errors.address}
                sx={{ marginBottom: 2 }}
              />
              <TextField
                label="City"
                name="city"
                fullWidth
                margin="normal"
                value={billingDetails.city}
                onChange={handleInputChange}
                error={!!errors.city}
                helperText={errors.city}
                sx={{ marginBottom: 2 }}
              />
              <TextField
                label="Postal Code"
                name="postalCode"
                fullWidth
                margin="normal"
                value={billingDetails.postalCode}
                onChange={handleInputChange}
                error={!!errors.postalCode}
                helperText={errors.postalCode}
                sx={{ marginBottom: 2 }}
              />
            </AccordionDetails>
          </Accordion>

          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              sx={{ fontWeight: "bold", fontSize: "1.2rem" }}
            >
              <Typography>2. Payment</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <RadioGroup
                value={paymentMethod}
                onChange={handlePaymentMethodChange}
                sx={{ display: "flex", flexDirection: "row", gap: 2 }}
              >
                <FormControlLabel
                  value="cod"
                  control={<Radio />}
                  label="Cash on Delivery"
                />
                <FormControlLabel
                  value="card"
                  control={<Radio />}
                  label="Pay with Card"
                />
              </RadioGroup>
              {errors.paymentMethod && (
                <Typography color="error">{errors.paymentMethod}</Typography>
              )}
            </AccordionDetails>
          </Accordion>
        </Grid>

        {/* Right Section: Cart Details */}
        <Grid item xs={12} md={4}>
          <Paper
            elevation={3}
            sx={{
              padding: 3,
              borderRadius: 2,
              border: "1px solid #ddd",
              backgroundColor: "#fff",
            }}
          >
            <Typography variant="h6" sx={{ marginBottom: 2 }}>
              My Cart
            </Typography>
            <Box sx={{ display: "flex", gap: 2, alignItems: "center" }}>
              <img
                src={cartItem.image}
                alt={cartItem.name}
                style={{
                  width: "80px",
                  height: "80px",
                  borderRadius: "8px",
                  objectFit: "cover",
                }}
              />
              <Box>
                <Typography>{cartItem.name}</Typography>
                <Typography>Price: ₹{cartItem.price}</Typography>
                <Typography>Quantity: {cartItem.quantity}</Typography>
              </Box>
            </Box>
            <Box sx={{ borderTop: "1px solid #ddd", mt: 2, pt: 2 }}>
              <Typography>Sub Total: ₹{cartItem.price}</Typography>
              <Typography>Delivery Charges: ₹0</Typography>
              <Typography>Total Savings: ₹0</Typography>
              <Typography variant="h6" sx={{ mt: 1 }}>
                Total: ₹{cartItem.price}
              </Typography>
            </Box>
            <Button
              variant="contained"
              fullWidth
              sx={{
                mt: 2,
                padding: "10px 20px",
                fontWeight: "bold",
                borderRadius: 2,
              }}
              onClick={handlePayNow}
            >
              Pay Now
            </Button>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};
