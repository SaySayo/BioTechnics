import React, { Suspense, useRef, useState } from "react"
import { Link } from "react-router-dom"
import { Canvas } from "@react-three/fiber"
import { ContactShadows, Environment, useGLTF, OrbitControls } from "@react-three/drei"
import { proxy, useSnapshot } from "valtio"
import "./HumanEye.css"

const state = proxy({
    current: null,
})


function Bio(props) {
    const group = useRef()
    const { nodes, materials } = useGLTF('/biology_a_human_eye/scene.gltf')
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
                <group position={[-7.46, -4.82, 3.33]}>
                    <mesh geometry={nodes['������������_0'].geometry} material={materials.material_11} />
                    <mesh geometry={nodes['������������_1_1'].geometry} material={nodes['������������_1_1'].material} />
                    <mesh geometry={nodes['������������_2'].geometry} material={materials.Material} />
                </group>
                <group position={[-6.91, -5.35, 3.34]} rotation={[-Math.PI, 0, 0]} scale={[-0.43, 0.43, 0.43]}>
                    <mesh geometry={nodes['������������������_0'].geometry} material={materials.material_10} />
                </group>
                <group position={[-6.71, -5.02, 3.42]} rotation={[0, Math.PI / 2, 0]} scale={0.9}>
                    <mesh geometry={nodes['������������_0_1'].geometry} material={materials.material_9} />
                </group>
                <group position={[-6.7, -5.15, 3.31]} rotation={[0, Math.PI / 2, 0]} scale={0.91}>
                    <mesh geometry={nodes['����������������_����������������_0'].geometry} material={materials.material_8} />
                </group>
                <group position={[-7.48, -4.82, 3.33]}>
                    <mesh geometry={nodes['��������������������_����������������_0'].geometry} material={materials.material_7} />
                    <mesh
                        geometry={nodes['��������������������_����������������_1'].geometry}
                        material={nodes['��������������������_����������������_1'].material}
                    />
                </group>
                <group position={[-7.48, -4.82, 3.33]}>
                    <mesh
                        geometry={nodes['����������������_��_����������_��������_����������������_0'].geometry}
                        material={materials.material_5}
                    />
                    <mesh
                        geometry={nodes['����������������_��_����������_��������_����������������_1'].geometry}
                        material={nodes['����������������_��_����������_��������_����������������_1'].material}
                    />
                </group>
                <group position={[-8.28, -4.86, 2.99]} rotation={[1.57, -1.3, 1.33]} scale={[0.26, 0.26, 0.26]}>
                    <mesh
                        geometry={nodes['��������_����������������������_����������_0'].geometry}
                        material={materials.material_4}
                    />
                </group>
                <group position={[-7.53, -8.91, 7.54]} rotation={[0.77, 0, 0]} />
                <group position={[-7.59, -2.49, 6.11]} />
            </group>
        </group>
    )
}

function Details() {

    const snap = useSnapshot(state)
    // if (snap.current === "Part1.2.3_ReferenceRepcolor128128128") {
    //     return (
    //         <div className="model_part_title">
    //             <h1 className="model_part_desc">Body</h1>
    //         </div>
    //     )
    // }
    // else if (snap.current === "Part2_ReferenceRepcolor128128128") {
    //     return (
    //         <div className="model_part_title">
    //             <h1 className="model_part_desc">Wheels</h1>
    //         </div>
    //     )
    // }

    // else {
    //     return (
    //         <div className="view_info">
    //             <h1 className="view_info_click">Click on diffrent parts of C 17 to know more</h1>
    //             <p className="view_info_desc">To view the 3D model in AR, scan the QR code or click on the button below.</p>

    //             <div className="view_info_main">
    //                 <img className="view_info_qr" src="https://storage.echo3d.co/shiny-wave-1052/268c3742-66a2-4139-9bbd-f3d153aba560.png" alt="Bio QR" />
    //                 <a href="https://go.echo3d.co/Q61F" target="_blank" rel="noreferrer">
    //                     <button className="view_info_button">View in AR</button>
    //                 </a>
    //             </div>
    //         </div>
    //     )
    // }
    return (
        <div>
            {snap.current}
        </div>
    )
}

export default function HumanEye() {
    return (
        <>
            <div className="model">

                <Link to="/explore" className="model_goback">Go Back</Link>

                <div className="model_info">
                    <h1 className="model_info_title">
                        Human Eye
                    </h1>
                    <div className="explore_title_line"></div>
                    <div className="model_info_desc">The human eye is a sense organ that reacts to light and allows vision. Rod and cone cells in the retina are photoreceptive cells which are able to detect visible light and convey this information to the brain.</div>
                </div>

                <div className="model3D">

                    <div className="model3D_3D">
                        <Canvas shadows dpr={[1, 2]} camera={{ position: [0, 0, 4], fov: 50 }}>
                            <ambientLight intensity={0.7} />
                            <spotLight intensity={0.5} angle={0.1} penumbra={1} position={[10, 15, 10]} castShadow />
                            <Suspense fallback={null}>
                                <Bio scale={1} />
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
