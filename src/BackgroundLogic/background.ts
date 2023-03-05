import * as THREE from 'three';

const Background = () => {
  const camera = new THREE.PerspectiveCamera(70, window.innerWidth / window.innerHeight, 0.01, 700);

  camera.position.z = 1;

  // create scene
  const scene = new THREE.Scene();

  // stars part
  const sphereTab: THREE.Mesh[] = [];

  for (let i = 0; i < 500; i++) {
    const lumiereS = new THREE.MeshPhongMaterial({
      emissive: '#fff'
    });

    sphereTab.push(new THREE.Mesh(new THREE.SphereGeometry(Math.random() * 1, 20, 20), lumiereS));
  }

  for (let i = 0; i < sphereTab.length; i++) {
    sphereTab[i].position.set(
      Math.random() * 600 - 300,
      Math.random() * 600 - 300,
      Math.random() * 600 - 300
    );
    scene.add(sphereTab[i]);
  }

  // sphere part
  const circle = new THREE.Object3D();
  const skelet = new THREE.Object3D();

  scene.add(circle);
  scene.add(skelet);

  circle.position.set(0.5, 0, 0); // = 0.5;
  skelet.position.set(0.5, 0, 0); // = 0.5;

  const geom = new THREE.IcosahedronGeometry(7, 1);
  const geom2 = new THREE.IcosahedronGeometry(15, 1);
  const mat = new THREE.MeshPhongMaterial({
    color: 0xffffff,
    flatShading:true
  });

  const mat2 = new THREE.MeshPhongMaterial({
    color: 0xffffff,
    wireframe: true,
    side: THREE.DoubleSide
  });

  const sphere1 = new THREE.Mesh(geom, mat);
  sphere1.scale.x = sphere1.scale.y = sphere1.scale.z = 0.026;
  circle.add(sphere1);

  const sphere2 = new THREE.Mesh(geom2, mat2);
  sphere2.scale.x = sphere2.scale.y = sphere2.scale.z = 0.02;
  skelet.add(sphere2);

  const light = new THREE.DirectionalLight(0xb3c6ff);
  light.position.set(22, 22, 22);
  scene.add(light);
  const light1 = new THREE.DirectionalLight(0xb3c6ff);
  light1.position.set(-22, 22, -4);
  scene.add(light1);

  const renderer = new THREE.WebGLRenderer({
    antialias: true,
    alpha: true
  });

  renderer.setClearColor(0x131a3d, 1);

  renderer.setSize(window.innerWidth, window.innerHeight);
  document.body.appendChild(renderer.domElement); // append canvas to the body

  window.addEventListener('resize', onWindowResize, false); // resizer for 3d scene

  animate(); // loop for 3d scene

  function animate() {
    requestAnimationFrame(animate); // to run the loop

    const timer = 0.00001 * Date.now();

    for (let i = 0, il = sphereTab.length; i < il; i++) {
      const sfere = sphereTab[i];
      sfere.position.x = 400 * Math.sin(timer + i);
      // sfere.position.z= 500 * Math.sin( timer + i * 1.1 );
      sfere.position.z = 400 * Math.sin(timer + i * 1.1);
    }

    circle.rotation.x -= 0.002;
    circle.rotation.y -= 0.003;
    skelet.rotation.x -= 0.001;
    skelet.rotation.y += 0.002;

    renderer.render(scene, camera);
  }

  function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();

    renderer.setSize(window.innerWidth, window.innerHeight);
  }

  return null;
};

export default Background;
