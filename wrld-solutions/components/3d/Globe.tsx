"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Line } from "@react-three/drei";
import { useRef, useMemo } from "react";
import * as THREE from "three";


function Particles() {
  const particles = useMemo(() => {
    const positions = [];

    for (let i = 0; i < 1000; i++) {
      positions.push(
        (Math.random() - 0.5) * 12,
        (Math.random() - 0.5) * 12,
        (Math.random() - 0.5) * 12
      );
    }

    return new Float32Array(positions);
  }, []);

  return (
    <points>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={particles.length / 3}
          array={particles}
          itemSize={3}
        />
      </bufferGeometry>

      <pointsMaterial
        color="#60a5fa"
        size={0.03}
      />
    </points>
  );
}

function Nodes() {
  const nodes = [
    [2, 0, 0],
    [-2, 0.5, 0],
    [0, 2, 0],
    [0, -2, 0],
    [1.5, 1.5, 0],
  ];

  return (
    <>
      {nodes.map((position, index) => (
        <mesh
          key={index}
          position={position as [number, number, number]}
        >
          <sphereGeometry args={[0.06, 16, 16]} />
          <meshBasicMaterial color="#38bdf8" />
        </mesh>
      ))}
    </>
  );
}



  function NetworkLines() {
  return (
    <>
      <Line
        points={[
          [2, 0, 0],
          [0, 2, 0],
        ]}
        color="#38bdf8"
        lineWidth={1}
      />

      <Line
        points={[
          [0, 2, 0],
          [-2, 0.5, 0],
        ]}
        color="#38bdf8"
        lineWidth={1}
      />

      <Line
        points={[
          [-2, 0.5, 0],
          [0, -2, 0],
        ]}
        color="#38bdf8"
        lineWidth={1}
      />

      <Line
        points={[
          [0, -2, 0],
          [1.5, 1.5, 0],
        ]}
        color="#38bdf8"
        lineWidth={1}
      />

      <Line
        points={[
          [1.5, 1.5, 0],
          [2, 0, 0],
        ]}
        color="#38bdf8"
        lineWidth={1}
      />
    </>
  );
}


function Earth() {
  const globeRef = useRef<THREE.Mesh>(null);

  useFrame(() => {
    if (globeRef.current) {
      globeRef.current.rotation.y += 0.002;
    }
  });

  return (
    <>
      {/* Main Globe */}
      <mesh ref={globeRef}>
        <sphereGeometry args={[2.3, 64, 64]} />

        <meshStandardMaterial
          color="#2563eb"
          wireframe
        />
      </mesh>

      {/* Atmosphere Glow */}
      <mesh scale={1.15}>
        <sphereGeometry args={[2.3, 64, 64]} />

        <meshBasicMaterial
          color="#60a5fa"
          transparent
          opacity={0.15}
        />
      </mesh>
    </>
  );
}

export default function Globe() {
  return (
    <div className="w-full h-[550px]">
      <Canvas camera={{ position: [0, 0, 6] }}>
        <ambientLight intensity={2} />

        <directionalLight
          position={[5, 5, 5]}
          intensity={2}
        />

        <Particles />

        <NetworkLines />

        <Nodes />

        <Earth />

        <OrbitControls
          enableZoom={false}
          autoRotate={false}
        />
      </Canvas>
    </div>
  );
}