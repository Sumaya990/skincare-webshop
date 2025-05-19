import { Instagram, LinkedIn } from "@mui/icons-material";
import { Box, Link, Typography } from "@mui/material";
import Image from "next/image";

export default function Footer() {
  return (
    <>
      <Box
        component="footer"
        sx={{
          marginTop: 4,
          padding: 2,
          color: "#000",
          display: "grid",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          backgroundColor: "#F2F2E8",

          "@media (min-width: 600px)": {
            display: "flex",
            justifyContent: "space-between",
            flexWrap: "wrap",
            alignItems: "center",
          },

          "@media (min-width: 1280px)": {
            display: "flex",
            justifyContent: "space-between",
            flexWrap: "wrap",
            alignItems: "center",
          },
        }}
      >
        <Typography data-cy="admin-link">
          <Link sx={{ textDecoration: "none" }} href="/admin" color="#efebe9">
            Admin
          </Link>
        </Typography>
        <Typography>Return</Typography>
        <Typography>Contact</Typography>
        <Typography>About</Typography>
        <Typography mb={1}>FAQ</Typography>
        <Box>
          <Typography>Follow us:</Typography>
          <LinkedIn />
          <Instagram />
        </Box>
        <Image src="/logotype.png" alt="Beauty" width={150} height={100} />
      </Box>
    </>
  );
}
