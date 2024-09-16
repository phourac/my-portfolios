"use client";
import React, { useRef, useState, useEffect } from "react";
import * as random from "maath/random";
import { Points, PointMaterial } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { Points as ThreePoints } from "three";

const validateSphere = (sphere: Float32Array) => {
  for (let i = 0; i < sphere.length; i++) {
    if (isNaN(sphere[i])) {
      return false;
    }
  }
  return true;
};

const Stars = (props: any) => {
  const ref = useRef<ThreePoints>();
  const [sphere] = useState(() => {
    const generatedSphere = random.inSphere(new Float64Array(5000), {
      radius: 1.5,
    });

    const sphereFloat32 = new Float32Array(generatedSphere);
    if (!validateSphere(sphereFloat32)) {
      throw new Error("Sphere contains NaN values");
    }
    return sphereFloat32;
  });

  const [position, setPosition] = useState<[number, number, number]>([0, 2, 0]);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const animationDuration = 2000; // Duration in milliseconds
    const startTime = Date.now();

    const animate = () => {
      const elapsedTime = Date.now() - startTime;
      const progress = Math.min(elapsedTime / animationDuration, 1);
      const newPosition: [number, number, number] = [
        2 - 2 * progress, // x-axis remains 0 for bottom center
        // -2 + 2 * progress, // y-axis transition from -2 to 0
        2 - 2 * progress, // y-axis transition from -2 to 0

        0,
      ];
      setPosition(newPosition);

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, []);

  // Handle mouse movement and update rotation accordingly
  const handleMouseMove = (event: MouseEvent) => {
    const { clientX, clientY } = event;
    const x = (clientX / window.innerWidth) * 2 - 1; // Normalize to [-1, 1]
    const y = (clientY / window.innerHeight) * 2 - 1; // Normalize to [-1, 1]
    setMousePosition({ x, y });
  };

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  useFrame((state, delta) => {
    if (ref.current) {
      // Continue normal rotation
      ref.current.rotation.x -= delta / 10;
      ref.current.rotation.y -= delta / 15;

      // Add small influence from mouse position to rotation
      ref.current.rotation.x += mousePosition.y * delta * 0.5; // Slight influence based on y-axis mouse movement
      ref.current.rotation.y += mousePosition.x * delta * 0.5; // Slight influence based on x-axis mouse movement
    }
  });

  return (
    <group position={position}>
      <Points
        ref={ref}
        positions={sphere}
        stride={4}
        frustumCulled={false}
        {...props}
      >
        <PointMaterial
          transparent
          color="#BF40BF"
          size={0.007}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  );
};

export default Stars;
