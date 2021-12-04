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
    const { nodes, materials } = useGLTF('/lungs_inhale_front_view/scene.gltf')
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

function Details() {

    const snap = useSnapshot(state)
    if (snap.current === "lung_LOBE") {
        return (
            <div className="model_part_title">
                <h1 className="view_info_click">Lungs</h1>
                <p className="view_info_desc">In exhalation, the diaphragm moves upward and the chest wall muscles relax, causing the chest cavity to get smaller and push air out of respiratory system through the nose or mouth.</p>
            </div>
        )
    }
    else if (snap.current === "xx-001") {
        return (
            <div className="model_part_title">
                <h1 className="view_info_click">Rib Cage</h1>
                <p className="view_info_desc">The rib cage protects the organs in the thoracic cavity, assists in respiration, and provides support for the upper extremities. During inspiration the ribs are elevated, and during expiration the ribs are depressed.</p>
            </div>
        )
    }
    else {
        return (
            <div className="view_info">
                <h1 className="view_info_click">Click on diffrent parts of Lungs to know more</h1>
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

export default function Lungs() {
    return (
        <>
            <div className="model">

                <Link to="/explore" className="model_goback">Go Back</Link>

                <div className="model_info">
                    <h1 className="model_info_title">
                        Human Lungs
                    </h1>
                    <div className="explore_title_line"></div>
                    <div className="model_info_desc">The cells in our bodies need oxygen to stay alive. Carbon dioxide is made in our bodies as cells do their jobs.The lungs and respiratory system allow oxygen in the air to be taken into the body, while also letting the body get rid of carbon dioxide in the air breathed out.</div>
                </div>

                <div className="model3D">

                    <div className="model3D_3D">
                        <Canvas shadows dpr={[1, 2]} camera={{ position: [0, 0, 4], fov: 50 }}>
                            <ambientLight intensity={0.7} />
                            <spotLight intensity={0.5} angle={0.1} penumbra={1} position={[10, 15, 10]} castShadow />
                            <Suspense fallback={null}>
                                <Bio scale={.023} />
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
