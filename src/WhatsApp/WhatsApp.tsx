// WhatsAppLink.js

import React from "react";
import WhatsAppIcon from '@mui/icons-material/WhatsApp'; // Import WhatsAppIcon from Material-UI

function WhatsAppLink() {
  const phoneNumber = "+97126330061"; // Replace with your desired WhatsApp number

  const handleWhatsAppClick = () => {
    const whatsappURL = `https://wa.me/${phoneNumber}`;
    window.open(whatsappURL, "_blank");
  };

  return (
    <div className="whatsapp-link" onClick={handleWhatsAppClick}>
      <WhatsAppIcon style={{ fontSize: 50 }} /> {/* Adjust the fontSize value to make the icon bigger */}
    </div>
  );
}

export default WhatsAppLink;
