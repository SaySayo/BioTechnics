/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
author: syasya.affandi (https://sketchfab.com/syasya.affandi)
license: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
source: https://sketchfab.com/3d-models/lungs-inhale-front-view-464f90cfd70145d298af3f2da57c2a8c
title: Lungs Inhale Front View
*/

import React, { useRef } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'

export default function Model({ ...props }) {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('/scene.gltf')
  const { actions } = useAnimations(animations, group)
  return (
    <group ref={group} {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <group position={[14.77, -48.75, 27.88]} rotation={[-Math.PI / 2, 0, 0]} scale={[1.08, 1, 0.91]}>
            <group position={[0, 5.98, 32.13]}>
              <mesh
                geometry={nodes.Diaphragm_2_lung_LOBE_0.geometry}
                material={nodes.Diaphragm_2_lung_LOBE_0.material}
              />
            </group>
          </group>
          <group position={[16.29, 42.41, -5.58]} rotation={[-Math.PI / 2, 0, 0]} scale={[1.04, 1, 1]}>
            <group position={[0, -17.3, -11.92]}>
              <mesh
                geometry={nodes.LUNG_lobe_02_01_lung_LOBE_0.geometry}
                material={nodes.LUNG_lobe_02_01_lung_LOBE_0.material}
              />
            </group>
          </group>
          <group position={[14.75, -7.54, -11.71]} rotation={[-Math.PI / 2, 0, 0]} scale={[1.05, 1.06, 1]}>
            <group position={[0, -48.14, 0]}>
              <mesh
                geometry={nodes['skeleton_03_xx-001_0'].geometry}
                material={nodes['skeleton_03_xx-001_0'].material}
              />
            </group>
          </group>
          <group position={[14.75, -50.12, -3.56]} rotation={[-Math.PI / 2, 0, 0]} scale={[1.05, 1.06, 1]}>
            <group position={[0, -20.19, 49.75]}>
              <mesh
                geometry={nodes['skeleton_02_xx-001_0'].geometry}
                material={nodes['skeleton_02_xx-001_0'].material}
              />
            </group>
          </group>
          <group position={[25.81, 40.47, -9.42]} rotation={[-Math.PI / 2, 0, 0]} scale={[1.05, 1.06, 1]}>
            <group position={[-10.48, -25.7, -40.84]}>
              <mesh geometry={nodes['Object_xx-001_0'].geometry} material={nodes['Object_xx-001_0'].material} />
            </group>
          </group>
          <group position={[25.81, 0.18, -11.65]} rotation={[-Math.PI / 2, 0, 0]} scale={[1.05, 1.06, 1]}>
            <group position={[-10.48, -27.8, -0.56]}>
              <mesh geometry={nodes['Object001_xx-001_0'].geometry} material={nodes['Object001_xx-001_0'].material} />
            </group>
          </group>
          <group position={[2.43, -0.38, -12.42]} rotation={[-Math.PI / 2, 0, 0]} scale={[1.05, 1.06, 1]}>
            <group position={[11.68, -28.52, 0]}>
              <mesh geometry={nodes['Object003_xx-001_0'].geometry} material={nodes['Object003_xx-001_0'].material} />
            </group>
          </group>
          <group
            name="Object005"
            position={[2.44, 39.83, -9.78]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={[1.05, 1.06, 1]}>
            <group position={[11.66, -26.04, -40.21]}>
              <mesh geometry={nodes['Object005_xx-001_0'].geometry} material={nodes['Object005_xx-001_0'].material} />
            </group>
          </group>
          <group position={[14.77, 35, 13.03]} rotation={[-Math.PI / 2, 0, 0]}>
            <mesh geometry={nodes.LUNG_02_01_brtr_0.geometry} material={materials.brtr} />
          </group>
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/scene.gltf')
