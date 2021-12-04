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
    const { nodes, materials } = useGLTF('/human_brain/scene.gltf')
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
                    <group scale={0.01}>
                        <mesh geometry={nodes.Object_5.geometry} material={materials.material_0} />
                    </group>
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
                <h1 className="view_info_click">Frontal Lobe</h1>
                <p className="view_info_desc">The frontal lobe is the most anterior (front) part of the brain. It extends from the area behind the forehead back to the precentral gyrus. As a whole, the frontal lobe is responsible for higher cognitive functions such as memory, emotions, impulse control, problem solving, social interaction, and motor function.</p>
            </div>
        )
    }

    else {
        return (
            <div className="view_info">
                <h1 className="view_info_click">Click on diffrent parts of C 17Human Brain to know more</h1>
                <p className="view_info_desc">To view the 3D model in AR, scan the QR code or click on the button below.</p>

                <div className="view_info_main">
                    <img className="view_info_qr" src="https://storage.echo3d.co/shiny-wave-1052/268c3742-66a2-4139-9bbd-f3d153aba560.png" alt="Aircraft QR" />
                    <a href="https://go.echo3d.co/Q61F" target="_blank" rel="noreferrer">
                        <button className="view_info_button">View in AR</button>
                    </a>
                </div>
            </div>
        )
    }
    // return (
    //     <div>
    //         {snap.current}
    //     </div>
    // )
}

export default function HumanBrain() {
    return (
        <>
            <div className="model">

                <Link to="/explore" className="model_goback">Go Back</Link>

                <div className="model_info">
                    <h1 className="model_info_title">
                        Human Brain
                    </h1>
                    <div className="explore_title_line"></div>
                    <div className="model_info_desc">The human brain is the central organ of the human nervous system, and with the spinal cord makes up the central nervous system. The brain consists of the cerebrum, the brainstem and the cerebellum. It controls most of the activities of the body, processing, integrating, and coordinating the information it receives from the sense organs, and making decisions as to the instructions sent to the rest of the body. </div>
                </div>

                <div className="model3D">

                    <div className="model3D_3D">
                        <Canvas shadows dpr={[1, 2]} camera={{ position: [0, 0, 4], fov: 50 }}>
                            <ambientLight intensity={0.7} />
                            <spotLight intensity={0.5} angle={0.1} penumbra={1} position={[10, 15, 10]} castShadow />
                            <Suspense fallback={null}>
                                <Bio scale={2.5} />
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
