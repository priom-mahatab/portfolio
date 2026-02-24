'use client';
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, MeshDistortMaterial, Sphere } from "@react-three/drei";
import { useRef } from "react";
import * as THREE from "three";

function Shape() {
    const meshRef = useRef<THREE.Mesh>(null);

    useFrame((state) => {
        if (!meshRef.current) return;
        meshRef.current.rotation.x = state.clock.getElapsedTime() * 0.2;
        meshRef.current.rotation.y = state.clock.getElapsedTime() * 0.3;
    });

    return (
        <mesh ref={meshRef}>
            <icosahedronGeometry args={[2, 1]} />
            <meshBasicMaterial
                color="#3b82f6"
                wireframe
                transparent
                opacity={0.3}
            />
        </mesh>
    );
}

export default function Visual3D() {
    return (
        <div className="w-full h-full">
            <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
                <ambientLight intensity={0.5} />
                <pointLight position={[10, 10, 10]} />
                <Shape />
                <OrbitControls enableZoom={false} enablePan={false}/>
            </Canvas>
        </div>
    )
}