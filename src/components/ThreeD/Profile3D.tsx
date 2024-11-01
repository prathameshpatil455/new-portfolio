"use client";

import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";

const Profile3DModel = () => {
  // Load the 3D model
  const { scene, error } = useGLTF("/threeD.glb");

  if (error) {
    console.error("Failed to load the 3D model:", error);
    return null; // Or return a fallback UI
  }

  return <primitive object={scene} scale={1.5} />;
};

const Profile3D = () => {
  return (
    <div className="w-full max-h-[400px]">
    <Canvas>
      {/* OrbitControls allows rotating and zooming */}
      <OrbitControls enableZoom={false} />
      {/* Ambient light for soft illumination */}
      <ambientLight intensity={0.5} />
      {/* Directional light for strong shadows and highlights */}
      <directionalLight position={[5, 5, 5]} intensity={1} />
      
      {/* Render the 3D model */}
      <Profile3DModel />
    </Canvas>
    </div>
  );
};

export default Profile3D;
