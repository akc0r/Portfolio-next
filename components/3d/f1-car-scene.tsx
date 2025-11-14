"use client";

import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import {
  OrbitControls,
  Environment,
  PresentationControls,
  useProgress,
  Html,
} from "@react-three/drei";
import { F1CarModel } from "./F1CarModel";

function F1Loader() {
  const { progress } = useProgress();
  return (
    <Html center>
      <div className="flex flex-col items-center gap-4">
        <div className="w-16 h-16 border-4 border-primary/30 border-t-primary rounded-full animate-spin" />
        <p className="text-sm text-muted-foreground">
          Chargement de la F1... {progress.toFixed(0)}%
        </p>
      </div>
    </Html>
  );
}

export function F1CarScene() {
  return (
    <div className="absolute inset-0 w-full h-full">
      <Canvas
        camera={{ position: [8, 3, 8], fov: 50 }}
        gl={{ antialias: true, alpha: true }}
        className="bg-transparent"
      >
        <Suspense fallback={<F1Loader />}>
          {/* Environment lighting */}
          <Environment preset="studio" />

          {/* Additional lights for better effect */}
          <ambientLight intensity={0.8} />
          <directionalLight position={[10, 10, 10]} intensity={2} castShadow />
          <directionalLight position={[-10, 5, -10]} intensity={1.5} />
          <pointLight position={[0, 5, 0]} intensity={0.5} />

          {/* F1 Car - only auto-rotation */}
          <F1CarModel />

          {/* Orbit controls disabled - only auto-rotate */}
          <OrbitControls
            enableZoom={false}
            enablePan={false}
            enableRotate={false}
            autoRotate
            autoRotateSpeed={1}
            target={[0, 0, 0]}
          />
        </Suspense>
      </Canvas>
    </div>
  );
}
