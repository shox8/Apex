"use client";
import React from "react";
import { PageLoaderStyle } from "../styles/ui";

const PageLoader = () => {
  return (
    <PageLoaderStyle>
      <div className="loader"></div>
    </PageLoaderStyle>
  );
};

export default PageLoader;
