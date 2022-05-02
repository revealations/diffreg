/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useEffect } from "react";

function RenderMap() {
  useEffect(() => {
    const map = new naver.maps.Map("map", {
      center: new naver.maps.LatLng(37.3965651, 126.9662141),
      zoom: 17,
      scrollWheel: false,
      draggable: false,
    });
  });

  return <div id="map" style={{ width: "100%", height: "300px" }} />;
}

export default RenderMap;
