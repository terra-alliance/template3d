import { useRef } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { Hud, OrthographicCamera } from "@react-three/drei"

export default function App() {
  return (
    <div
      style={{
        position: "absolute",
        width: "100%",
        height: "100%",
      }}
    >
      <Background />
      <Canvas>
        <Hud>
          <OrthographicCamera makeDefault position={[0, 0, 1000]} far={10000} />
          <Box scale={100} />
        </Hud>
      </Canvas>
    </div>
  )
}

function Box(props) {
  const mesh = useRef()

  useFrame((state, delta) => (mesh.current.rotation.y += delta))

  return (
    <mesh {...props} ref={mesh} rotation-x={45 * (Math.PI / 180)}>
      <boxGeometry args={[1, 1, 1]} />
      <meshBasicMaterial color={"green"} wireframe={true} />
    </mesh>
  )
}

function Background() {
  return (
    <div
      style={{
        position: "absolute",
        width: "100%",
        height: "100%",
        backgroundColor: "black",
        zIndex: -1,
      }}
    ></div>
  )
}
