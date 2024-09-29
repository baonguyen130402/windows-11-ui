import { useContext } from "react";
import { BrightnessContext } from "../contexts/BrightnessContext";

export function genarateBrightnessUnit() {
  const { brightness } = useContext(BrightnessContext);
  
  return {
    "brightness-200": brightness === 200,
    "brightness-190": brightness === 190,
    "brightness-180": brightness === 180,
    "brightness-170": brightness === 170,
    "brightness-160": brightness === 160,
    "brightness-150": brightness === 150,
    "brightness-140": brightness === 140,
    "brightness-130": brightness === 130,
    "brightness-120": brightness === 120,
    "brightness-110": brightness === 110,
    "brightness-100": brightness === 100,
    "brightness-90": brightness === 90,
    "brightness-80": brightness === 80,
    "brightness-70": brightness === 70,
    "brightness-60": brightness === 60,
    "brightness-50": brightness === 50,
    "brightness-40": brightness === 40,
    "brightness-30": brightness === 30,
    "brightness-20": brightness === 20,
    "brightness-10": brightness === 10,
  };
}
