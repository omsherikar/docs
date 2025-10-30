"use client";

import React from "react";

type NetworkGlobeProps = {
  className?: string;
};

export default function NetworkGlobe({ className }: NetworkGlobeProps) {
  return <div className={className} aria-hidden="true" />;
}


