import React from "react";
import {
  Box,
  Typography,
  Grid,
  Paper,
  Button,
  Divider,
  List,
  ListItem,
  ListItemText,
  Avatar,
} from "@mui/material";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

export const ConfirmationDetails = () => {
  return (
    <Box sx={{ padding: 3 }}>
      <Typography variant="h5" fontWeight="bold" gutterBottom>
        Thank you for your order #3911690705825
      </Typography>
      <Button variant="outlined" sx={{ float: "right", mb: 2 }}>
        Continue Shopping
      </Button>
      <Paper elevation={3} sx={{ padding: 3, marginBottom: 4 }}>
        <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
          <LocalShippingIcon fontSize="large" />
          <Typography>
            We'll send you an email with tracking information when your item
            ships.
          </Typography>
        </Box>
        <Grid container spacing={3} mt={2}>
          {/* Order Info */}
          <Grid item xs={12} md={6}>
            <Typography variant="subtitle1" fontWeight="bold">
              Order placed
            </Typography>
            <Typography>Value shipping</Typography>
            <Typography color="green" fontWeight="bold">
              Arrives by Tue, May 10
            </Typography>
            <Typography>Sold by Walmart.com</Typography>
            <Typography>Order #3911690705825</Typography>
          </Grid>

          {/* Shipping Address */}
          <Grid item xs={12} md={6}>
            <Typography variant="subtitle1" fontWeight="bold">
              Shipping address
            </Typography>
            <Typography>John Newman</Typography>
            <Typography>2125 Chestnut Street</Typography>
            <Typography>San Francisco, CA 94123</Typography>
            <Typography>test-order@baymard.com</Typography>
          </Grid>
        </Grid>

        {/* Progress Bar */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 4,
            marginTop: 3,
            padding: 2,
            borderTop: "1px solid #ddd",
            borderBottom: "1px solid #ddd",
          }}
        >
          <CheckCircleIcon color="success" />
          <Typography fontWeight="bold">Order placed</Typography>
          <Divider flexItem orientation="vertical" />
          <Typography color="grey">Processing</Typography>
          <Divider flexItem orientation="vertical" />
          <Typography color="grey">Shipped</Typography>
          <Divider flexItem orientation="vertical" />
          <Typography color="grey">Delivered</Typography>
        </Box>

        {/* Order Item */}
        <Box sx={{ display: "flex", alignItems: "center", gap: 2, marginTop: 2 }}>
          <Avatar
            src="https://via.placeholder.com/80" // Replace with actual product image
            alt="Product Image"
            sx={{ width: 80, height: 80 }}
          />
          <Box>
            <Typography>Crayola 83-Piece Bundle Set</Typography>
            <Typography color="grey">Value shipping: Arrives by Tue, May 10</Typography>
            <Typography>Quantity: 1</Typography>
            <Typography fontWeight="bold">₹4.43</Typography>
          </Box>
        </Box>
      </Paper>

      {/* Order Summary and Payment Info */}
      <Grid container spacing={3}>
        {/* Order Summary */}
        <Grid item xs={12} md={4}>
          <Paper elevation={3} sx={{ padding: 3 }}>
            <Typography variant="subtitle1" fontWeight="bold">
              Order summary
            </Typography>
            <List>
              <ListItem>
                <ListItemText primary="Subtotal (1 item)" />
                <Typography>₹4.43</Typography>
              </ListItem>
              <ListItem>
                <ListItemText primary="Value shipping" />
                <Typography>₹4.97</Typography>
              </ListItem>
              <ListItem>
                <ListItemText primary="Est. tax" />
                <Typography>₹0.39</Typography>
              </ListItem>
              <Divider />
              <ListItem>
                <ListItemText primary="Total" />
                <Typography fontWeight="bold">₹9.79</Typography>
              </ListItem>
            </List>
          </Paper>
        </Grid>

        {/* Payment Info */}
        <Grid item xs={12} md={4}>
          <Paper elevation={3} sx={{ padding: 3 }}>
            <Typography variant="subtitle1" fontWeight="bold">
              Payment type
            </Typography>
            <Box sx={{ display: "flex", alignItems: "center", gap: 2, mt: 2 }}>
              <img
                src="https://via.placeholder.com/40x20" // Replace with Visa/Mastercard logo
                alt="Card Logo"
              />
              <Typography>Ending in 8903</Typography>
            </Box>
          </Paper>
        </Grid>

        {/* Billing Address */}
        <Grid item xs={12} md={4}>
          <Paper elevation={3} sx={{ padding: 3 }}>
            <Typography variant="subtitle1" fontWeight="bold">
              Billing address
            </Typography>
            <Typography>John Newman</Typography>
            <Typography>2125 Chestnut Street</Typography>
            <Typography>San Francisco, CA 94123</Typography>
            <Typography>test-order@baymard.com</Typography>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

