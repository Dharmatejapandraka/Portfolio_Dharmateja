
import { Suspense, useEffect, useMemo, useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import {
  Float,
  Stars,
  Sparkles,
  Center,
  useGLTF
} from '@react-three/drei'
import * as THREE from 'three'

// ========================================
// REALISTIC DARK ASTRONAUT MODEL
// ========================================

function AstronautModel() {
  const group = useRef()

  const { scene } = useGLTF('/models/astronaut.glb')

  // Clone model and customize materials
  const astronaut = useMemo(() => {
    const clone = scene.clone(true)

    clone.traverse((child) => {
      if (!child.isMesh) return

      const originalMaterials = Array.isArray(child.material)
        ? child.material
        : [child.material]

      const updatedMaterials = originalMaterials.map((original) => {
        const material = original.clone()
        const name = `${child.name} ${material.name}`.toLowerCase()

        if (material.color) {
          // Dark reflective helmet visor
          if (
            name.includes('visor') ||
            name.includes('glass') ||
            name.includes('lens')
          ) {
            material.color.set('#120820')
            material.metalness = 0.95
            material.roughness = 0.08
            material.emissive = new THREE.Color('#3d087c')
            material.emissiveIntensity = 0.5
          }

          // Dark futuristic spacesuit
          else {
            material.color.set('#30253f')
            material.metalness = 0.5
            material.roughness = 0.42
          }
        }

        return material
      })

      child.material = Array.isArray(child.material)
        ? updatedMaterials
        : updatedMaterials[0]

      child.castShadow = true
      child.receiveShadow = true
    })

    return clone
  }, [scene])

  // Clean up cloned materials
  useEffect(() => {
    return () => {
      astronaut.traverse((child) => {
        if (!child.isMesh) return

        const materials = Array.isArray(child.material)
          ? child.material
          : [child.material]

        materials.forEach((material) => material.dispose())
      })
    }
  }, [astronaut])

  // Interactive mouse movement
  useFrame((state, delta) => {
    if (!group.current) return

    const targetX = state.pointer.y * 0.12
    const targetY = -0.35 + state.pointer.x * 0.2

    group.current.rotation.x = THREE.MathUtils.damp(
      group.current.rotation.x,
      targetX,
      2,
      delta
    )

    group.current.rotation.y = THREE.MathUtils.damp(
      group.current.rotation.y,
      targetY,
      2,
      delta
    )
  })

  return (
    <group ref={group}>
      <Float
        speed={1.2}
        rotationIntensity={0.06}
        floatIntensity={0.2}
      >
        <Center>
          <primitive object={astronaut} scale={2.2} />
        </Center>
      </Float>
    </group>
  )
}

// ========================================
// GLOWING PURPLE ORBITAL RINGS
// ========================================


function OrbitalRings() {
  const orbitRef = useRef()
  const glowRef = useRef()
  const lightRef = useRef()

  useFrame((state) => {
    const t = state.clock.elapsedTime

    if (orbitRef.current) {
      orbitRef.current.rotation.y = Math.sin(t * 0.2) * 0.06
    }

    if (glowRef.current) {
      glowRef.current.material.opacity =
        0.18 + Math.sin(t * 1.5) * 0.05
    }

    if (lightRef.current) {
      const angle = t * 0.65

      lightRef.current.position.set(
        2.05 * Math.cos(angle),
        1.05 * Math.sin(angle),
        0.45 * Math.sin(angle)
      )
    }
  })

  return (
    <group
      ref={orbitRef}
      position={[0, 0.1, 0]}
      rotation={[0.95, 0.15, -0.48]}
    >
      {/* Wide outer purple glow */}
      <mesh>
        <torusGeometry args={[2.05, 0.075, 20, 200]} />
        <meshBasicMaterial
          color="#9d35ff"
          transparent
          opacity={0.13}
          toneMapped={false}
        />
      </mesh>

      {/* Soft neon halo */}
      <mesh>
        <torusGeometry args={[2.05, 0.035, 16, 200]} />
        <meshBasicMaterial
          color="#b34cff"
          transparent
          opacity={0.35}
          toneMapped={false}
        />
      </mesh>

      {/* Bright central orbit */}
      <mesh>
        <torusGeometry args={[2.05, 0.012, 16, 200]} />
        <meshBasicMaterial
          color="#e5a4ff"
          toneMapped={false}
        />
      </mesh>

      {/* Moving glowing orbital light */}
      <mesh ref={lightRef}>
        <sphereGeometry args={[0.055, 24, 24]} />
        <meshBasicMaterial
          color="#ffffff"
          toneMapped={false}
        />
      </mesh>
    </group>
  )
}


// ========================================
// COSMIC BACKGROUND
// ========================================

function SpaceBackground() {
  return (
    <>
      <Stars
        radius={70}
        depth={50}
        count={1600}
        factor={3}
        saturation={0.7}
        fade
        speed={0.5}
      />

      <Sparkles
        count={120}
        scale={6}
        size={2}
        speed={0.45}
        color="#c78aff"
      />
    </>
  )
}

// ========================================
// LIGHTING
// ========================================


function SceneLighting() {
  return (
    <>
      <ambientLight intensity={1.1} />

      {/* Soft front light */}
      <directionalLight
        position={[0, 3, 6]}
        intensity={2.8}
        color="#e4d5ff"
      />

      {/* Purple cinematic rim light */}
      <pointLight
        position={[-4, 2, 2]}
        intensity={45}
        color="#a341ff"
      />

      {/* Back purple glow */}
      <pointLight
        position={[3, 2, -3]}
        intensity={55}
        color="#8b35ff"
      />

      {/* Helmet highlight */}
      <pointLight
        position={[0, 3, 3]}
        intensity={30}
        color="#e8caff"
      />

      {/* Lower body lighting */}
      <pointLight
        position={[0, -3, 2]}
        intensity={18}
        color="#7929db"
      />
    </>
  )
}


// ========================================
// COMPLETE SPACE SCENE
// ========================================


function SpaceScene() {
  return (
    <>
      <SceneLighting />

      <SpaceBackground />

      <Suspense fallback={null}>
        <AstronautModel />
      </Suspense>
    </>
  )
}


// ========================================
// MAIN CANVAS
// ========================================

export default function Scene() {
  return (
    <div className="scene-container">
      <Canvas
        camera={{
          position: [0, 0, 7],
          fov: 38
        }}
        dpr={[1, 1.5]}
        gl={{
          antialias: true,
          alpha: true,
          powerPreference: 'high-performance'
        }}
      >
        <SpaceScene />
      </Canvas>
    </div>
  )
}

// Preload astronaut model
useGLTF.preload('/models/astronaut.glb')
