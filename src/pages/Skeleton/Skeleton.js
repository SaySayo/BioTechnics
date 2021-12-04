import React, { Suspense, useRef, useState } from "react"
import { Link } from "react-router-dom"
import { Canvas } from "@react-three/fiber"
import { ContactShadows, Environment, useGLTF, OrbitControls } from "@react-three/drei"
import { proxy, useSnapshot } from "valtio"

const state = proxy({
    current: null,
})


function Bio(props) {
    const group = useRef()
    const { nodes, materials } = useGLTF('/skeleton/scene.gltf')
    const [hovered, set] = useState(null)
    console.log(hovered)
    return (
        <group ref={group} {...props} dispose={null}
            onPointerOver={(e) => (e.stopPropagation(), set(e.object.material.name))}
            onPointerOut={(e) => e.intersections.length === 0 && set(null)}
            onPointerMissed={() => (state.current = null)}
            onPointerDown={(e) => (e.stopPropagation(), (state.current = e.object.material.name))}
        >
            <group rotation={[-Math.PI / 2, 0, 0]}>
        <group position={[-0.94, -0.56, -3.41]}>
          <mesh geometry={nodes.mesh_0.geometry} material={nodes.mesh_0.material} />
          <mesh geometry={nodes.mesh_1.geometry} material={nodes.mesh_1.material} />
          <mesh geometry={nodes.mesh_2.geometry} material={nodes.mesh_2.material} />
          <mesh geometry={nodes.mesh_3.geometry} material={nodes.mesh_3.material} />
          <mesh geometry={nodes.mesh_4.geometry} material={nodes.mesh_4.material} />
          <mesh geometry={nodes.mesh_5.geometry} material={nodes.mesh_5.material} />
          <mesh geometry={nodes.mesh_6.geometry} material={nodes.mesh_6.material} />
          <mesh geometry={nodes.mesh_7.geometry} material={nodes.mesh_7.material} />
          <mesh geometry={nodes.mesh_8.geometry} material={nodes.mesh_8.material} />
          <mesh geometry={nodes.mesh_9.geometry} material={nodes.mesh_9.material} />
          <mesh geometry={nodes.mesh_10.geometry} material={nodes.mesh_10.material} />
          <mesh geometry={nodes.mesh_11.geometry} material={nodes.mesh_11.material} />
          <mesh geometry={nodes.mesh_12.geometry} material={nodes.mesh_12.material} />
          <mesh geometry={nodes.mesh_13.geometry} material={nodes.mesh_13.material} />
          <mesh geometry={nodes.mesh_14.geometry} material={nodes.mesh_14.material} />
          <mesh geometry={nodes.mesh_15.geometry} material={nodes.mesh_15.material} />
          <mesh geometry={nodes.mesh_16.geometry} material={nodes.mesh_16.material} />
          <mesh geometry={nodes.mesh_17.geometry} material={nodes.mesh_17.material} />
          <mesh geometry={nodes.mesh_18.geometry} material={nodes.mesh_18.material} />
        </group>
      </group>
        </group>
    )
}

function Details() {

    const snap = useSnapshot(state)
    if (snap.current === "material_0") {
        return (
            <div className="model_part_title">
                <h1 className="view_info_click">Skull</h1>
                <p className="view_info_desc">A variety of gross morphological traits of the human skull demonstrate sexual dimorphism, such as the median nuchal line, mastoid processes, supraorbital margin, supraorbital ridge, and the chin.</p>
            </div>
        )
    }

    else {
        return (
            <div className="view_info">
                <h1 className="view_info_click">Click on diffrent parts of Skeleton to know more</h1>
                <p className="view_info_desc">To view the 3D model in AR, scan the QR code or click on the button below.</p>

                <div className="view_info_main">
                    <img className="view_info_qr" src="https://storage.echo3d.co/shiny-wave-1052/268c3742-66a2-4139-9bbd-f3d153aba560.png" alt="Bio QR" />
                    <a href="https://go.echo3d.co/Q61F" target="_blank" rel="noreferrer">
                        <button className="view_info_button">View in AR</button>
                    </a>
                </div>
            </div>
        )
    }
}

export default function Skeleton() {
    return (
        <>
            <div className="model">

                <Link to="/explore" className="model_goback">Go Back</Link>

                <div className="model_info">
                    <h1 className="model_info_title">
                    Skeleton
                    </h1>
                    <div className="explore_title_line"></div>
                    <div className="model_info_desc">The human skeleton is the internal framework of the human body. It is composed of around 270 bones at birth – this total decreases to around 206 bones by adulthood after some bones get fused together. The bone mass in the skeleton reaches maximum density around age 21. The human skeleton can be divided into the axial skeleton and the appendicular skeleton. The axial skeleton is formed by the vertebral column, the rib cage, the skull and other associated bones. </div>
                </div>

                <div className="model3D">

                    <div className="model3D_3D">
                        <Canvas shadows dpr={[1, 2]} camera={{ position: [0, 0, 4], fov: 50 }}>
                            <ambientLight intensity={0.7} />
                            <spotLight intensity={0.5} angle={0.1} penumbra={1} position={[10, 15, 10]} castShadow />
                            <Suspense fallback={null}>
                                <Bio scale={.5} />
                                <Environment preset="city" />
                                <ContactShadows rotation-x={Math.PI / 2} position={[0, -0.8, 0]} opacity={0.25} width={10} height={10} blur={1.5} far={0.8} />
                            </Suspense>
                            <OrbitControls autoRotate />
                        </Canvas>
                    </div>

                    <div className="model3D_3D_Desc">
                        <Details />
                    </div>

                </div>

            </div>

        </>
    )
}
