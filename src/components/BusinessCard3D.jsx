import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { EffectComposer } from 'three/addons/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/addons/postprocessing/RenderPass.js';
import { UnrealBloomPass } from 'three/addons/postprocessing/UnrealBloomPass.js';
import { SMAAPass } from 'three/addons/postprocessing/SMAAPass.js';
import { Mail, MapPin, Phone, Sparkles } from 'lucide-react';
import { contact } from '../data.js';
import eventBrigadeLogo from '../assets/event-brigade-logo.svg';
import SectionHeader from './SectionHeader.jsx';

function makeTextTexture(lines, options = {}) {
  const {
    width = 1024,
    height = 512,
    align = 'left',
    color = '#f8f1df',
    accent = '#f4d78a',
    titleSize = 72,
    bodySize = 34
  } = options;
  const canvas = document.createElement('canvas');
  canvas.width = width;
  canvas.height = height;
  const ctx = canvas.getContext('2d');
  ctx.clearRect(0, 0, width, height);
  ctx.textBaseline = 'top';
  ctx.textAlign = align;

  let y = 56;
  const x = align === 'center' ? width / 2 : 64;
  lines.forEach((line) => {
    const isTitle = line.type === 'title';
    ctx.font = `${isTitle ? '700' : '500'} ${isTitle ? titleSize : bodySize}px Inter, Arial, sans-serif`;
    ctx.fillStyle = line.accent ? accent : color;
    ctx.fillText(line.text, x, y);
    y += isTitle ? 94 : 54;
  });

  const texture = new THREE.CanvasTexture(canvas);
  texture.colorSpace = THREE.SRGBColorSpace;
  texture.anisotropy = 8;
  return texture;
}

function makeRoundedCard(width, height, radius) {
  const x = -width / 2;
  const y = -height / 2;
  const shape = new THREE.Shape();
  shape.moveTo(x + radius, y);
  shape.lineTo(x + width - radius, y);
  shape.quadraticCurveTo(x + width, y, x + width, y + radius);
  shape.lineTo(x + width, y + height - radius);
  shape.quadraticCurveTo(x + width, y + height, x + width - radius, y + height);
  shape.lineTo(x + radius, y + height);
  shape.quadraticCurveTo(x, y + height, x, y + height - radius);
  shape.lineTo(x, y + radius);
  shape.quadraticCurveTo(x, y, x + radius, y);
  return new THREE.ExtrudeGeometry(shape, {
    depth: 0.08,
    bevelEnabled: true,
    bevelThickness: 0.025,
    bevelSize: 0.025,
    bevelSegments: 8
  });
}

export default function BusinessCard3D() {
  const mountRef = useRef(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return undefined;

    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x070707, 0.045);

    const camera = new THREE.PerspectiveCamera(38, mount.clientWidth / mount.clientHeight, 0.1, 100);
    camera.position.set(0, 1.15, 5.7);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(mount.clientWidth, mount.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.55;
    mount.appendChild(renderer.domElement);

    const composer = new EffectComposer(renderer);
    composer.addPass(new RenderPass(scene, camera));
    composer.addPass(new UnrealBloomPass(new THREE.Vector2(mount.clientWidth, mount.clientHeight), 0.26, 0.72, 0.78));
    composer.addPass(new SMAAPass(mount.clientWidth, mount.clientHeight));

    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.enablePan = false;
    controls.minDistance = 4.2;
    controls.maxDistance = 8;
    controls.maxPolarAngle = Math.PI * 0.72;
    controls.minPolarAngle = Math.PI * 0.25;
    controls.autoRotate = true;
    controls.autoRotateSpeed = 0.45;

    const bgCanvas = document.createElement('canvas');
    bgCanvas.width = 1024;
    bgCanvas.height = 1024;
    const bg = bgCanvas.getContext('2d');
    const gradient = bg.createRadialGradient(512, 260, 40, 512, 512, 650);
    gradient.addColorStop(0, '#4d3b17');
    gradient.addColorStop(0.32, '#171412');
    gradient.addColorStop(1, '#050505');
    bg.fillStyle = gradient;
    bg.fillRect(0, 0, 1024, 1024);
    bg.globalAlpha = 0.35;
    for (let i = 0; i < 140; i += 1) {
      bg.fillStyle = `rgba(244,215,138,${0.18 + Math.random() * 0.38})`;
      bg.beginPath();
      bg.arc(Math.random() * 1024, Math.random() * 1024, 1 + Math.random() * 2, 0, Math.PI * 2);
      bg.fill();
    }
    const bgTexture = new THREE.CanvasTexture(bgCanvas);
    const bgMesh = new THREE.Mesh(
      new THREE.SphereGeometry(40, 48, 48),
      new THREE.MeshBasicMaterial({ map: bgTexture, side: THREE.BackSide })
    );
    scene.add(bgMesh);

    const ambient = new THREE.AmbientLight(0xfff4df, 0.75);
    scene.add(ambient);
    const key = new THREE.DirectionalLight(0xffe7b0, 5.2);
    key.position.set(3.5, 4.8, 3.2);
    key.castShadow = true;
    scene.add(key);
    const rim = new THREE.DirectionalLight(0xf4d78a, 4.4);
    rim.position.set(-4, 2.4, -3);
    scene.add(rim);
    const under = new THREE.PointLight(0xd8b76a, 2.4, 12);
    under.position.set(0, -1.8, 2.5);
    scene.add(under);

    const cardGroup = new THREE.Group();
    scene.add(cardGroup);

    const cardMaterial = new THREE.MeshStandardMaterial({
      color: 0x101012,
      metalness: 0.72,
      roughness: 0.28,
      envMapIntensity: 1.1
    });
    const card = new THREE.Mesh(makeRoundedCard(4.2, 2.35, 0.16), cardMaterial);
    card.rotation.x = -0.07;
    card.castShadow = true;
    card.receiveShadow = true;
    cardGroup.add(card);

    const border = new THREE.Mesh(
      new THREE.TorusGeometry(1, 0.006, 8, 160),
      new THREE.MeshBasicMaterial({ color: 0xf4d78a })
    );
    border.scale.set(2.14, 1.19, 1);
    border.position.z = 0.09;
    border.rotation.z = 0;
    cardGroup.add(border);

    const logoTexture = new THREE.TextureLoader().load(eventBrigadeLogo);
    logoTexture.colorSpace = THREE.SRGBColorSpace;
    const logoPlane = new THREE.Mesh(
      new THREE.PlaneGeometry(1.08, 0.76),
      new THREE.MeshBasicMaterial({ map: logoTexture, transparent: true })
    );
    logoPlane.position.set(1.2, 0.5, 0.13);
    cardGroup.add(logoPlane);

    const nameTexture = makeTextTexture(
      [
        { text: 'Kunal Garg', type: 'title', accent: true },
        { text: 'Founder, Director' },
        { text: 'Event Brigade Pune', accent: true }
      ],
      { titleSize: 64, bodySize: 30 }
    );
    const namePlane = new THREE.Mesh(
      new THREE.PlaneGeometry(2.2, 1.1),
      new THREE.MeshBasicMaterial({ map: nameTexture, transparent: true })
    );
    namePlane.position.set(-0.82, 0.16, 0.135);
    cardGroup.add(namePlane);

    const contactTexture = makeTextTexture(
      [
        { text: contact.email },
        { text: contact.phones.join(' | ') },
        { text: 'www.eventbrigade.in' },
        { text: 'Bavdhan, Pune' }
      ],
      { width: 1200, height: 420, titleSize: 46, bodySize: 38, color: '#d6d0c3' }
    );
    const contactPlane = new THREE.Mesh(
      new THREE.PlaneGeometry(2.75, 0.96),
      new THREE.MeshBasicMaterial({ map: contactTexture, transparent: true })
    );
    contactPlane.position.set(-0.62, -0.54, 0.14);
    cardGroup.add(contactPlane);

    const accent = new THREE.Mesh(
      new THREE.BoxGeometry(2.2, 0.018, 0.02),
      new THREE.MeshStandardMaterial({ color: 0xf4d78a, emissive: 0x3b2500, emissiveIntensity: 0.32 })
    );
    accent.position.set(-0.44, -0.04, 0.14);
    cardGroup.add(accent);

    const ground = new THREE.Mesh(
      new THREE.PlaneGeometry(18, 18),
      new THREE.ShadowMaterial({ opacity: 0.35 })
    );
    ground.rotation.x = -Math.PI / 2;
    ground.position.y = -2.2;
    ground.receiveShadow = true;
    scene.add(ground);

    const particles = new THREE.BufferGeometry();
    const count = 90;
    const positions = new Float32Array(count * 3);
    for (let i = 0; i < count; i += 1) {
      positions[i * 3] = (Math.random() - 0.5) * 9;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 5;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 7;
    }
    particles.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    const particleMesh = new THREE.Points(
      particles,
      new THREE.PointsMaterial({ color: 0xf4d78a, size: 0.018, transparent: true, opacity: 0.45 })
    );
    scene.add(particleMesh);

    const clock = new THREE.Clock();
    let frameId = 0;
    const animate = () => {
      const elapsed = clock.getElapsedTime();
      cardGroup.position.y = Math.sin(elapsed * 0.65) * 0.08;
      cardGroup.rotation.y = Math.sin(elapsed * 0.34) * 0.08;
      cardGroup.rotation.z = Math.cos(elapsed * 0.28) * 0.015;
      particleMesh.rotation.y = elapsed * 0.035;
      under.intensity = 2.4 + Math.sin(elapsed * 0.8) * 0.35;
      controls.update();
      composer.render();
      frameId = window.requestAnimationFrame(animate);
    };
    animate();

    const resize = () => {
      if (!mount) return;
      camera.aspect = mount.clientWidth / mount.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(mount.clientWidth, mount.clientHeight);
      composer.setSize(mount.clientWidth, mount.clientHeight);
    };
    window.addEventListener('resize', resize);

    return () => {
      window.cancelAnimationFrame(frameId);
      window.removeEventListener('resize', resize);
      controls.dispose();
      composer.dispose();
      scene.traverse((object) => {
        object.geometry?.dispose?.();
        if (Array.isArray(object.material)) object.material.forEach((mat) => mat.dispose?.());
        else object.material?.dispose?.();
      });
      bgTexture.dispose();
      logoTexture.dispose();
      nameTexture.dispose();
      contactTexture.dispose();
      renderer.dispose();
      mount.removeChild(renderer.domElement);
    };
  }, []);

  return (
    <section id="business-card" className="section relative overflow-hidden bg-charcoal">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_12%,rgba(244,215,138,0.16),transparent_36%),radial-gradient(circle_at_85%_60%,rgba(216,183,106,0.1),transparent_28%)]" />
      <div className="relative mx-auto max-w-7xl px-5">
        <SectionHeader
          eyebrow="Signature Card"
          title="A cinematic business card for the Event Brigade founder."
          text="A premium 3D card treatment inspired by luxury metal, gold accents and the official Event Brigade identity."
        />
        <div className="mt-12 grid gap-8 lg:grid-cols-[1.25fr_0.75fr] lg:items-center">
          <div className="relative min-h-[520px] overflow-hidden rounded-[2rem] border border-champagne/20 bg-obsidian shadow-soft">
            <div ref={mountRef} className="absolute inset-0" aria-label="Interactive 3D Event Brigade business card" />
            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-obsidian to-transparent" />
          </div>
          <div className="space-y-4">
            {[
              [Mail, contact.email],
              [Phone, contact.phones.join(' / ')],
              [MapPin, 'Bavdhan, Pune'],
              [Sparkles, 'Drag to rotate. Scroll to zoom.']
            ].map(([Icon, text]) => (
              <div key={text} className="glass-card flex items-center gap-4 p-5">
                <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl border border-gold/30 bg-gold-radial text-gold">
                  <Icon size={22} />
                </span>
                <span className="leading-7 text-smoke">{text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
