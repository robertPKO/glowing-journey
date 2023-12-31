/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/
"use client"
import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function Model(props) {
  const { nodes, materials } = useGLTF("/conversational_space.glb");
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.structure.geometry}
        material={nodes.structure.material}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.emissive.geometry}
        material={nodes.emissive.material}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.sol.geometry}
        material={nodes.sol.material}
      />
    </group>
  );
}

useGLTF.preload("/conversational_space.glb");