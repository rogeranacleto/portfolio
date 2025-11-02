import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

type Props = {
  children?: React.ReactNode;
  className?: string;
};

const SpaceBackground: React.FC<Props> = ({ className = '' }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mousePos = useRef({ x: 0, y: 0 });
  const isDragging = useRef(false);
  const previousMousePosition = useRef({ x: 0, y: 0 });
  const rotation = useRef({ x: 0, y: 0 });

  useEffect(() => {
    if (!canvasRef.current) return;

    const createCircleTexture = (hexColor: string, size = 128) => {
      const canvas = document.createElement('canvas');
      canvas.width = canvas.height = size;
      const ctx = canvas.getContext('2d')!;
      ctx.clearRect(0, 0, size, size);

      ctx.fillStyle = 'rgba(0,0,0,0)';
      ctx.fillRect(0, 0, size, size);

      const g = ctx.createRadialGradient(size / 2, size / 2, 0, size / 2, size / 2, size / 2);
      g.addColorStop(0, hexColor);
      g.addColorStop(0.6, hexColor);
      g.addColorStop(1, 'rgba(0,0,0,0)');

      ctx.fillStyle = g;
      ctx.fillRect(0, 0, size, size);

      const tex = new THREE.CanvasTexture(canvas);
      tex.needsUpdate = true;
      tex.minFilter = THREE.LinearMipMapLinearFilter;
      tex.magFilter = THREE.LinearFilter;
      tex.format = THREE.RGBAFormat;
      return tex;
    };

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 5;

    const renderer = new THREE.WebGLRenderer({
      canvas: canvasRef.current,
      alpha: true,
      antialias: true,
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(window.devicePixelRatio);

    const whiteTex = createCircleTexture('#ffffff', 128);
    const cyanTex = createCircleTexture('#2E0854', 128);

    const starsGeometry = new THREE.BufferGeometry();
    const starsVertices: number[] = [];
    for (let i = 0; i < 6000; i++) {
      const x = (Math.random() - 0.5) * 100;
      const y = (Math.random() - 0.5) * 100;
      const z = (Math.random() - 0.5) * 100;
      starsVertices.push(x, y, z);
    }
    starsGeometry.setAttribute('position', new THREE.Float32BufferAttribute(starsVertices, 3));
    const starsMaterial = new THREE.PointsMaterial({
      color: 0xffffff,
      size: 0.12,
      map: whiteTex,
      transparent: true,
      opacity: 1.0,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
      sizeAttenuation: true,
    });
    const stars = new THREE.Points(starsGeometry, starsMaterial);
    scene.add(stars);

    const createParticles = (color: number, count: number, spread: number, texture: THREE.Texture) => {
      const geometry = new THREE.BufferGeometry();
      const vertices: number[] = [];
      for (let i = 0; i < count; i++) {
        const x = (Math.random() - 0.5) * spread;
        const y = (Math.random() - 0.5) * spread;
        const z = (Math.random() - 0.5) * spread;
        vertices.push(x, y, z);
      }
      geometry.setAttribute('position', new THREE.Float32BufferAttribute(vertices, 3));
      const material = new THREE.PointsMaterial({
        color,
        size: 0.05,
        map: texture, 
        transparent: true,
        opacity: 0.90,
        blending: THREE.AdditiveBlending,
        depthWrite: false,
        sizeAttenuation: true,
      });
      return new THREE.Points(geometry, material);
    };

    const whiteParticles = createParticles(0xffffff, 200, 40, whiteTex);
    const cyanParticles = createParticles(0x2E0854, 150, 35, cyanTex);
    scene.add(whiteParticles);
    scene.add(cyanParticles);

    const constellations: THREE.Line[] = [];
    for (let i = 0; i < 6; i++) {
      const points: THREE.Vector3[] = [];
      const numPoints = 3 + Math.floor(Math.random() * 2);
      const baseX = (Math.random() - 0.5) * 25;
      const baseY = (Math.random() - 0.5) * 25;
      const baseZ = (Math.random() - 0.5) * 25;

      for (let j = 0; j < numPoints; j++) {
        points.push(
          new THREE.Vector3(
            baseX + (Math.random() - 0.5) * 4,
            baseY + (Math.random() - 0.5) * 4,
            baseZ + (Math.random() - 0.5) * 4
          )
        );
      }

      const geometry = new THREE.BufferGeometry().setFromPoints(points);
      const material = new THREE.LineBasicMaterial({
        color: 0x444444,
        transparent: true,
        opacity: 0.2,
        blending: THREE.AdditiveBlending,
      });
      const line = new THREE.Line(geometry, material);
      constellations.push(line);
      scene.add(line);
    }

    const handleMouseMove = (e: MouseEvent) => {
      mousePos.current.x = (e.clientX / window.innerWidth) * 2 - 1;
      mousePos.current.y = -(e.clientY / window.innerHeight) * 2 + 1;

      if (isDragging.current) {
        const deltaX = e.clientX - previousMousePosition.current.x;
        const deltaY = e.clientY - previousMousePosition.current.y;

        rotation.current.y += deltaX * 0.005;
        rotation.current.x += deltaY * 0.005;

        rotation.current.x = Math.max(-Math.PI / 2, Math.min(Math.PI / 2, rotation.current.x));
      }

      previousMousePosition.current = { x: e.clientX, y: e.clientY };
    };

    const handleMouseDown = (e: MouseEvent) => {
      isDragging.current = true;
      previousMousePosition.current = { x: e.clientX, y: e.clientY };
    };

    const handleMouseUp = () => {
      isDragging.current = false;
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);

    const animate = () => {
      requestAnimationFrame(animate);

      stars.rotation.y += 0.00005;

      constellations.forEach((line, i) => {
        line.rotation.y += 0.0003 * (i % 2 === 0 ? 1 : -1);
      });

      const time = Date.now() * 0.001;
      whiteParticles.rotation.y += 0.001;
      cyanParticles.rotation.y -= 0.0008;
      (cyanParticles.material as THREE.PointsMaterial).opacity = 0.2 + Math.sin(time) * 0.1;

      camera.position.x = Math.sin(rotation.current.y) * 5;
      camera.position.z = Math.cos(rotation.current.y) * 5;
      camera.position.y = rotation.current.x * 3;
      camera.lookAt(0, 0, 0);

      renderer.render(scene, camera);
    };

    animate();

    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('resize', handleResize);

      scene.remove(stars);
      scene.remove(whiteParticles);
      scene.remove(cyanParticles);
      constellations.forEach((l) => scene.remove(l));

      try {
        starsGeometry.dispose();
        (starsMaterial as THREE.Material).dispose();

        (whiteParticles.geometry as THREE.BufferGeometry).dispose();
        (whiteParticles.material as THREE.Material).dispose();
        (cyanParticles.geometry as THREE.BufferGeometry).dispose();
        (cyanParticles.material as THREE.Material).dispose();

        constellations.forEach((line) => {
          (line.geometry as THREE.BufferGeometry).dispose();
          (line.material as THREE.Material).dispose();
        });

        whiteTex.dispose();
        cyanTex.dispose();
      } catch (err) {
        alert(err)
      }

      renderer.dispose();
    };
  }, []);

  return (
    <div className={'w-full bg-black ' + className}>
      <canvas ref={canvasRef} className="fixed inset-0 w-full h-full z-0 pointer-events-none" />
    </div>
  );
};

export default SpaceBackground;