"use client";

import { useGLTF, Center } from "@react-three/drei";
import { useRef, useEffect } from "react";
import { Group } from "three";
import * as THREE from "three";

export function F1CarModel(props: JSX.IntrinsicElements["group"]) {
  const groupRef = useRef<Group>(null);
  const gltf = useGLTF("/models/2026__f1_audi_fom_update.glb");

  useEffect(() => {
    if (gltf.scene && groupRef.current) {
      // Calculate bounding box and center the model
      const box = new THREE.Box3().setFromObject(gltf.scene);
      const size = box.getSize(new THREE.Vector3());
      const center = box.getCenter(new THREE.Vector3());

      // Center the model
      gltf.scene.position.sub(center);

      // Scale to larger size (~8 units for better visibility)
      const maxDim = Math.max(size.x, size.y, size.z);
      const scale = 8 / maxDim;
      groupRef.current.scale.setScalar(scale);

      console.log("✅ F1 Model loaded and centered");
      console.log("📏 Original size:", size);
      console.log("📐 Scale applied:", scale);
    }
  }, [gltf]);

  if (!gltf.scene) return null;

  return (
    <group ref={groupRef} {...props} dispose={null}>
      <primitive object={gltf.scene} />
    </group>
  );
}

// Précharger le modèle
useGLTF.preload("/models/2026__f1_audi_fom_update.glb");
