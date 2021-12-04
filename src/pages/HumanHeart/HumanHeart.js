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
    const { nodes, materials } = useGLTF('/human_heart/scene.gltf')
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
                <mesh geometry={nodes.mesh_0.geometry} material={materials.Material__37} />
                <mesh geometry={nodes.mesh_1.geometry} material={nodes.mesh_1.material} />
                <mesh geometry={nodes.mesh_2.geometry} material={nodes.mesh_2.material} />
                <mesh geometry={nodes.mesh_3.geometry} material={nodes.mesh_3.material} />
                <mesh geometry={nodes.mesh_4.geometry} material={nodes.mesh_4.material} />
            </group>
        </group>
    )
}

function Details() {

    const snap = useSnapshot(state)
    if (snap.current === "Material__24") {
        return (
            <div className="model_part_title">
                <h1 className="view_info_click">Coronary Sulcus</h1>
                <p className="view_info_desc">The coronary sulcus, separating the atria and ventricles, spans from the upper medial end of the third left costal cartilage to the middle of the right sixth chondrosternal joint.</p>
            </div>
        )
    }
    else if (snap.current === "Material__37") {
        return (
            <div className="model_part_title">
                <h1 className="view_info_click">Right Atrium</h1>
                <p className="view_info_desc">One of the four chambers of the heart. The right atrium receives blood low in oxygen from the body and then empties the blood into the right ventricle.</p>
            </div>
        )
    }
    else if (snap.current === "Material__12") {
        return (
            <div className="model_part_title">
                <h1 className="view_info_click">Right ventricle</h1>
                <p className="view_info_desc">The lower right chamber of the heart that receives deoxygenated blood from the right atrium and pumps it under low pressure into the lungs via the pulmonary artery.</p>
            </div>
        )
    }
    else {
        return (
            <div className="view_info">
                <h1 className="view_info_click">Click on diffrent parts of Heart to know more</h1>
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

export default function HumanHeart() {
    return (
        <>
            <div className="model">

                <Link to="/explore" className="model_goback">Go Back</Link>

                <div className="model_info">
                    <h1 className="model_info_title">
                        Heart
                    </h1>
                    <div className="explore_title_line"></div>
                    <div className="model_info_desc">The heart is a muscular organ in most animals, which pumps blood through the blood vessels of the circulatory system. The pumped blood carries oxygen and nutrients to the body, while carrying metabolic waste such as carbon dioxide to the lungs. This work is based on "human heart" (https://sketchfab.com/3d-models/human-heart-bc51630b88b94f5fb6bdaef1488041c3) by sammite (https://sketchfab.com/sammite86) licensed under CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)</div>
                </div>

                <div className="model3D">

                    <div className="model3D_3D">
                        <Canvas shadows dpr={[1, 2]} camera={{ position: [0, 0, 4], fov: 50 }}>
                            <ambientLight intensity={0.7} />
                            <spotLight intensity={0.5} angle={0.1} penumbra={1} position={[10, 15, 10]} castShadow />
                            <Suspense fallback={null}>
                                <Bio scale={.01} />
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
