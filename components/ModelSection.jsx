"use client"
import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { Model } from "./Model";
import { Preload } from "@react-three/drei";

export default function ModelSection() {
  return (
    <div className="w-full h-[100vh]">
      <Canvas>
        <ambientLight intensity={1.5} />
        <Suspense>
          <Model />
        </Suspense>
        <Preload all />
      </Canvas>
    </div>
  );
}
