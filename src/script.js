import './style.css'
import * as THREE from 'three'

const canvas = document.querySelector('canvas.webgl')

const scene = new THREE.Scene()

const sphereGeometry = new THREE.SphereGeometry(1, 60, 60)
const sphereMaterial = new THREE.MeshBasicMaterial({ color: 0xff0000 })
const sphere = new THREE.Mesh(sphereGeometry, sphereMaterial)
scene.add(sphere)

const sizes = {
    width: window.innerWidth,
    height: window.innerHeight
}

const camera = new THREE.PerspectiveCamera(45, sizes.width / sizes.height, 0.1, 200)
camera.position.z = 3
scene.add(camera)

window.addEventListener('resize', () => {

    sizes.width = window.innerWidth
    sizes.height = window.innerHeight

    camera.aspect = sizes.width / sizes.height
    camera.updateProjectionMatrix()

    renderer.setSize(sizes.width, sizes.height)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
})

const renderer = new THREE.WebGLRenderer({
    canvas: canvas
})

renderer.setSize(sizes.width, sizes.height)
renderer.render(scene, camera)

const animate = () => {

    requestAnimationFrame(animate)
    renderer.render(scene, camera)
}

animate()
