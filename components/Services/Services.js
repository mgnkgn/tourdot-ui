import React from "react";

import styles from "@/styles/Services.module.css";
import ServiceUpper from "./ServiceUpper";
import ServiceLower from "./ServiceLower";

const Services = () => {
  return (
    <div className={styles.serviceCt}>
      <ServiceUpper />
      <ServiceLower />
    </div>
  );
};

export default Services;
