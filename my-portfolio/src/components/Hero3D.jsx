import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Icosahedron, MeshDistortMaterial, Float, Environment } from '@react-three/drei';

const AnimatedShape = () => {
  const meshRef = useRef();

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.getElapsedTime() * 0.2;
      meshRef.current.rotation.y = state.clock.getElapsedTime() * 0.3;
    }
  });

  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={2}>
      <Icosahedron ref={meshRef} args={[1.5, 0]}>
        <MeshDistortMaterial
          color="#6366f1" // Indigo 500
          emissive="#0ea5e9" // Cyan 500
          emissiveIntensity={0.5}
          wireframe={true}
          distort={0.3}
          speed={2}
          roughness={0.2}
          metalness={0.8}
        />
      </Icosahedron>
    </Float>
  );
};

const Hero3D = () => {
  return (
    <div className="w-full h-full pointer-events-auto cursor-grab active:cursor-grabbing">
      <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1} />
        <AnimatedShape />
        <OrbitControls 
          enableZoom={false} 
          enablePan={false}
          autoRotate={true}
          autoRotateSpeed={1.5}
        />
        <Environment preset="city" />
      </Canvas>
    </div>
  );
};

export default Hero3D;
