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
    const { nodes, materials } = useGLTF('/bio_project_plant_cell/scene.gltf')
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
                <group scale={0.01}>
                    <group rotation={[Math.PI / 2, 0, 0]}>
                        <group rotation={[-Math.PI / 2, 0, 0]} scale={[100, 100, 100]}>
                            <mesh geometry={nodes.Cylinder_Material016_0.geometry} material={materials['Material.016']} />
                            <mesh geometry={nodes.Cylinder_Material010_0.geometry} material={materials['Material.010']} />
                        </group>
                        <group position={[50, 26.17, -77.4]} rotation={[-Math.PI / 2, 0, 0]} scale={[56.84, 56.84, 56.84]}>
                            <mesh geometry={nodes.Sphere_Material003_0.geometry} material={nodes.Sphere_Material003_0.material} />
                            <mesh geometry={nodes.Sphere_Material014_0.geometry} material={materials['Material.014']} />
                        </group>
                        <group position={[47.37, 14.48, -74.93]} rotation={[-Math.PI / 2, 0, 0.67]} scale={[55.26, 55.26, 55.26]}>
                            <mesh
                                geometry={nodes.Sphere001_Material003_0.geometry}
                                material={nodes.Sphere001_Material003_0.material}
                            />
                            <mesh geometry={nodes.Sphere001_Material017_0.geometry} material={materials['Material.017']} />
                        </group>
                        <group position={[-13.96, 15.44, 114.28]} rotation={[0, -1.33, 0]} scale={[12.4, 12.4, 12.4]}>
                            <mesh
                                geometry={nodes.Cylinder001_Material012_0.geometry}
                                material={nodes.Cylinder001_Material012_0.material}
                            />
                            <mesh
                                geometry={nodes.Cylinder001_Material013_0.geometry}
                                material={nodes.Cylinder001_Material013_0.material}
                            />
                        </group>
                        <group position={[50.05, 28.75, -77.39]} rotation={[-Math.PI / 2, 0, 0]} scale={10.78}>
                            <mesh geometry={nodes.Sphere002_Material005_0.geometry} material={materials['Material.005']} />
                        </group>
                        <group position={[-46.11, 0, 12.2]} rotation={[-Math.PI / 2, 0, 3.06]} scale={[100, 100, 100]}>
                            <mesh geometry={nodes.Cube_Material001_0.geometry} material={materials['Material.001']} />
                        </group>
                        <group rotation={[-Math.PI / 2, 0, 0]} scale={[19.49, 19.49, 19.49]}>
                            <mesh geometry={nodes.Cylinder002_Material008_0.geometry} material={materials['Material.008']} />
                        </group>
                        <group position={[0, 17.47, 0]} rotation={[-Math.PI / 2, 0, 0]} scale={[100, 100, 100]}>
                            <mesh geometry={nodes.Cube001_Material002_0.geometry} material={materials['Material.002']} />
                        </group>
                        <group position={[-35.07, 14.77, 74.97]} rotation={[Math.PI, -0.74, Math.PI]} scale={[15.02, 15.02, 15.02]}>
                            <mesh
                                geometry={nodes.Cylinder003_Material012_0.geometry}
                                material={nodes.Cylinder003_Material012_0.material}
                            />
                            <mesh
                                geometry={nodes.Cylinder003_Material013_0.geometry}
                                material={nodes.Cylinder003_Material013_0.material}
                            />
                        </group>
                        <group position={[101.66, 16.7, 61.3]} rotation={[Math.PI, 0.28, -Math.PI]} scale={[15.02, 15.02, 15.02]}>
                            <mesh
                                geometry={nodes.Cylinder004_Material012_0.geometry}
                                material={nodes.Cylinder004_Material012_0.material}
                            />
                            <mesh
                                geometry={nodes.Cylinder004_Material013_0.geometry}
                                material={nodes.Cylinder004_Material013_0.material}
                            />
                        </group>
                        <group
                            position={[-79.92, 14.77, -85.82]}
                            rotation={[Math.PI, -1.52, Math.PI]}
                            scale={[13.62, 13.62, 13.62]}>
                            <mesh
                                geometry={nodes.Cylinder005_Material012_0.geometry}
                                material={nodes.Cylinder005_Material012_0.material}
                            />
                            <mesh
                                geometry={nodes.Cylinder005_Material013_0.geometry}
                                material={nodes.Cylinder005_Material013_0.material}
                            />
                        </group>
                        <group position={[-110.26, 13.96, -11.81]} rotation={[-Math.PI / 2, 0, 0]} scale={14.89}>
                            <mesh geometry={nodes.Sphere004_Material009_0.geometry} material={materials['Material.009']} />
                        </group>
                        <group position={[-90.15, 16.01, -47.39]} rotation={[-Math.PI / 2, 0, -0.6]} scale={[70.17, 70.17, 70.17]}>
                            <mesh
                                geometry={nodes.Sphere005_Material007_0.geometry}
                                material={nodes.Sphere005_Material007_0.material}
                            />
                            <mesh
                                geometry={nodes.Sphere005_Material006_0.geometry}
                                material={nodes.Sphere005_Material006_0.material}
                            />
                        </group>
                        <group position={[-94.41, 16.01, 22.76]} rotation={[-Math.PI / 2, 0, -1.95]} scale={[70.17, 70.17, 70.17]}>
                            <mesh
                                geometry={nodes.Sphere006_Material007_0.geometry}
                                material={nodes.Sphere006_Material007_0.material}
                            />
                            <mesh
                                geometry={nodes.Sphere006_Material006_0.geometry}
                                material={nodes.Sphere006_Material006_0.material}
                            />
                        </group>
                        <group position={[-99.71, 16.01, 74.23]} rotation={[-Math.PI / 2, 0, -0.78]} scale={[70.17, 70.17, 70.17]}>
                            <mesh
                                geometry={nodes.Sphere007_Material007_0.geometry}
                                material={nodes.Sphere007_Material007_0.material}
                            />
                            <mesh
                                geometry={nodes.Sphere007_Material006_0.geometry}
                                material={nodes.Sphere007_Material006_0.material}
                            />
                        </group>
                        <group position={[-21.24, 16.01, 31.38]} rotation={[-Math.PI / 2, 0, -3.02]} scale={[70.17, 70.17, 70.17]}>
                            <mesh
                                geometry={nodes.Sphere008_Material007_0.geometry}
                                material={nodes.Sphere008_Material007_0.material}
                            />
                            <mesh
                                geometry={nodes.Sphere008_Material006_0.geometry}
                                material={nodes.Sphere008_Material006_0.material}
                            />
                        </group>
                        <group position={[20.11, 16.01, 128.99]} rotation={[-Math.PI / 2, 0, -1.31]} scale={[70.17, 70.17, 70.17]}>
                            <mesh
                                geometry={nodes.Sphere009_Material007_0.geometry}
                                material={nodes.Sphere009_Material007_0.material}
                            />
                            <mesh
                                geometry={nodes.Sphere009_Material006_0.geometry}
                                material={nodes.Sphere009_Material006_0.material}
                            />
                        </group>
                        <group position={[91.44, 16.01, 5.06]} rotation={[-Math.PI / 2, 0, -2.21]} scale={[70.17, 70.17, 70.17]}>
                            <mesh
                                geometry={nodes.Sphere010_Material007_0.geometry}
                                material={nodes.Sphere010_Material007_0.material}
                            />
                            <mesh
                                geometry={nodes.Sphere010_Material006_0.geometry}
                                material={nodes.Sphere010_Material006_0.material}
                            />
                        </group>
                        <group position={[-35.05, 16.01, -30.84]} rotation={[-Math.PI / 2, 0, -2.21]} scale={[70.17, 70.17, 70.17]}>
                            <mesh
                                geometry={nodes.Sphere011_Material007_0.geometry}
                                material={nodes.Sphere011_Material007_0.material}
                            />
                            <mesh
                                geometry={nodes.Sphere011_Material006_0.geometry}
                                material={nodes.Sphere011_Material006_0.material}
                            />
                        </group>
                        <group rotation={[-Math.PI / 2, 0, 0]} scale={[100, 100, 100]}>
                            <mesh geometry={nodes.Cylinder006_Material011_0.geometry} material={materials['Material.011']} />
                        </group>
                        <group position={[49.63, 38.98, -74.21]} rotation={[-1.28, -0.03, 0]} scale={[11.76, 11.76, 11.76]}>
                            <mesh geometry={nodes.Text001_Material015_0.geometry} material={nodes.Text001_Material015_0.material} />
                        </group>
                        <group position={[47.58, 29.44, -61.56]} rotation={[-Math.PI / 2, 0, 0]} scale={[11.76, 11.76, 11.76]}>
                            <mesh geometry={nodes.Text002_Material015_0.geometry} material={nodes.Text002_Material015_0.material} />
                        </group>
                        <group position={[23.31, 29.11, -60.82]} rotation={[-1.57, 0, 0]} scale={[11.76, 11.76, 11.76]}>
                            <mesh geometry={nodes.Text003_Material015_0.geometry} material={nodes.Text003_Material015_0.material} />
                        </group>
                        <group position={[69.99, 27.68, -26.29]} rotation={[-Math.PI / 2, 0, 0]} scale={[11.76, 11.76, 11.76]}>
                            <mesh geometry={nodes.Text004_Material015_0.geometry} material={nodes.Text004_Material015_0.material} />
                        </group>
                        <group position={[26.87, 24.8, 46.96]} rotation={[-1.59, -0.01, 0]} scale={[11.76, 11.76, 11.76]}>
                            <mesh geometry={nodes.Text005_Material015_0.geometry} material={nodes.Text005_Material015_0.material} />
                        </group>
                        <group position={[-61.76, 22.79, 12.35]} rotation={[-Math.PI / 2, 0, 0]} scale={11.76}>
                            <mesh geometry={nodes.Text006_Material015_0.geometry} material={nodes.Text006_Material015_0.material} />
                        </group>
                        <group position={[91.42, 19.18, 2.41]} rotation={[-Math.PI / 2, 0, 0]} scale={[11.76, 11.76, 11.76]}>
                            <mesh geometry={nodes.Text007_Material015_0.geometry} material={nodes.Text007_Material015_0.material} />
                        </group>
                        <group position={[98.86, 19.31, 62.76]} rotation={[-Math.PI / 2, 0, 0]} scale={11.76}>
                            <mesh geometry={nodes.Text008_Material015_0.geometry} material={nodes.Text008_Material015_0.material} />
                        </group>
                        <group position={[75.27, 19.46, 65.91]} rotation={[-1.63, -0.2, -0.01]} scale={[11.76, 11.76, 11.76]}>
                            <mesh geometry={nodes.Text009_Material015_0.geometry} material={nodes.Text009_Material015_0.material} />
                        </group>
                        <group position={[-108.19, 28.09, -7.87]} rotation={[-1.31, 0.14, -0.02]} scale={[11.76, 11.76, 11.76]}>
                            <mesh geometry={nodes.Text010_Material015_0.geometry} material={nodes.Text010_Material015_0.material} />
                        </group>
                        <group position={[109.9, 13.09, -34.04]} rotation={[-Math.PI / 2, 0, 0]} scale={[11.76, 11.76, 11.76]}>
                            <mesh geometry={nodes.Text011_Material015_0.geometry} material={nodes.Text011_Material015_0.material} />
                        </group>
                        <group position={[148.45, 27.32, -36.52]} rotation={[-Math.PI / 2, 0, 0]} scale={[11.76, 11.76, 11.76]}>
                            <mesh geometry={nodes.Text012_Material015_0.geometry} material={nodes.Text012_Material015_0.material} />
                        </group>
                        <group position={[71.4, 19.68, -14.22]} rotation={[0, 0.32, 0]} scale={[12.37, 12.37, 12.37]}>
                            <mesh geometry={nodes.Text013_Material015_0.geometry} material={nodes.Text013_Material015_0.material} />
                        </group>
                    </group>
                </group>
            </group>
        </group>
    )
}

function Details() {

    const snap = useSnapshot(state)
    if (snap.current === "Material.010") {
        return (
            <div className="model_part_title">
                <h1 className="view_info_click">Cell Wall</h1>
                <p className="view_info_desc">Cell wall</p>
            </div>
        )
    }
    else if (snap.current === "Material.005") {
        return (
            <div className="model_part_title">
                <h1 className="view_info_click">Nucleous</h1>
                <p className="view_info_desc">Nucleous</p>
            </div>
        )
    }
    else if (snap.current === "Material.016") {
        return (
            <div className="model_part_title">
                <h1 className="view_info_click">Cytoplasm</h1>
                <p className="view_info_desc">Cytoplasm</p>
            </div>
        )
    }

    else {
        return (
            <div className="view_info">
                <h1 className="view_info_click">Click on diffrent parts of Plant Cell to know more</h1>
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
    // return (
    //     <div>
    //         {snap.current}
    //     </div>
    // )
}

export default function PlantCell() {
    return (
        <>
            <div className="model">

                <Link to="/explore" className="model_goback">Go Back</Link>

                <div className="model_info">
                    <h1 className="model_info_title">
                        Plant Cell
                    </h1>
                    <div className="explore_title_line"></div>
                    <div className="model_info_desc">Plant cells are eukaryotic cells present in green plants, photosynthetic eukaryotes of the kingdom Plantae. Their distinctive features include primary cell walls containing cellulose, hemicelluloses and pectin, the presence of plastids with the capability to perform photosynthesis and store starch, a large vacuole that regulates turgor pressure, the absence of flagella or centrioles, except in the gametes, and a unique method of cell division involving the formation of a cell plate or phragmoplast that separates the new daughter cells.</div>
                </div>

                <div className="model3D">

                    <div className="model3D_3D" style={{ height: "60vh" }}>
                        <Canvas shadows dpr={[1, 2]} camera={{ position: [0, 4, 4], fov: 50 }}>
                            <ambientLight intensity={0.7} />
                            <spotLight intensity={0.5} angle={0.1} penumbra={1} position={[10, 15, 10]} castShadow />
                            <Suspense fallback={null}>
                                <Bio scale={1.5} />
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
