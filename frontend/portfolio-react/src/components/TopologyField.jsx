import { useMemo } from "react";

export const TOPOLOGY_FIELD_DEFAULTS = {
  mode: "dark",
  hue: 100,
  saturation: 1.5,
  brightness: 0.8,
  speed: 1,
};

function clamp(value, min, max) {
  return Math.min(max, Math.max(min, value));
}

function createTopologySource(speed) {
  return `<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">

  <style>
    * {
      box-sizing: border-box;
    }

    html, body {
      width: 100%;
      height: 100%;
      margin: 0;
      overflow: hidden;
      background: #070707;
    }

    body {
      position: relative;
    }

    canvas {
      display: block;
      width: 100%;
      height: 100%;
    }

    .glow {
      position: absolute;
      width: 65vmin;
      height: 65vmin;
      left: 65%;
      top: 50%;
      transform: translate(-50%, -50%);
      border-radius: 50%;
      background: radial-gradient(
        circle,
        rgba(11, 216, 0, 0.10),
        transparent 70%
      );
      pointer-events: none;
    }
  </style>

  <script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js"></script>
</head>

<body>
  <div class="glow"></div>
  <canvas id="topology"></canvas>

  <script>
    (() => {
      const canvas = document.getElementById("topology");

      if (!window.THREE) {
        document.body.style.background = "#070707";
        return;
      }

      const scene = new THREE.Scene();

      const camera = new THREE.PerspectiveCamera(
        60, 1, 0.1, 2000
      );

      camera.position.z = 650;

      const renderer = new THREE.WebGLRenderer({
        canvas,
        alpha: true,
        antialias: true
      });

      renderer.setPixelRatio(
        Math.min(window.devicePixelRatio || 1, 2)
      );

      const group = new THREE.Group();
      scene.add(group);

      const nodeCount = 180;
      const nodes = [];
      const radius = 1;

      const geometry = new THREE.SphereGeometry(
        radius, 8, 8
      );

      for (let i = 0; i < nodeCount; i++) {
        const phi = Math.acos(
          -1 + (2 * i) / nodeCount
        );

        const theta = Math.sqrt(nodeCount * Math.PI) * phi;

        const x = Math.cos(theta) * Math.sin(phi);
        const y = Math.sin(theta) * Math.sin(phi);
        const z = Math.cos(phi);

        const material = new THREE.MeshBasicMaterial({
          color: 0x0bd800,
          transparent: true,
          opacity: 0.8
        });

        const mesh = new THREE.Mesh(geometry, material);

        mesh.position.set(x, y, z);

        mesh.userData = {
          pulseSpeed: Math.random() * 0.02 + 0.01,
          pulseOffset: Math.random() * Math.PI * 2,
          baseSize: Math.random() * 1.2 + 0.8
        };

        group.add(mesh);
        nodes.push(mesh);
      }

      const positions = [];
      const colors = [];

      const connectionDistance = 0.28;

      for (let i = 0; i < nodeCount; i++) {
        for (let j = i + 1; j < nodeCount; j++) {
          const distance = nodes[i].position.distanceTo(
            nodes[j].position
          );

          if (distance < connectionDistance) {
            positions.push(
              nodes[i].position.x,
              nodes[i].position.y,
              nodes[i].position.z,
              nodes[j].position.x,
              nodes[j].position.y,
              nodes[j].position.z
            );

            const alpha = 1 - distance / connectionDistance;

            colors.push(
              0.05 * alpha, alpha, 0.02 * alpha,
              0.05 * alpha, alpha, 0.02 * alpha
            );
          }
        }
      }

      const lineGeometry = new THREE.BufferGeometry();

      lineGeometry.setAttribute(
        "position",
        new THREE.Float32BufferAttribute(positions, 3)
      );

      lineGeometry.setAttribute(
        "color",
        new THREE.Float32BufferAttribute(colors, 3)
      );

      const lineMaterial = new THREE.LineBasicMaterial({
        vertexColors: true,
        transparent: true,
        opacity: 0.55,
        depthWrite: false,
        blending: THREE.AdditiveBlending
      });

      group.add(
        new THREE.LineSegments(lineGeometry, lineMaterial)
      );

      function resize() {
        const width = window.innerWidth;
        const height = window.innerHeight;
        const isMobile = width <= 768;

        camera.aspect = width / height;
        camera.updateProjectionMatrix();

        renderer.setSize(width, height);

        if (isMobile) {
          // CELULAR
          group.scale.setScalar(60);

          group.position.set(
            100,  // X: deslocamento horizontal
            150, // Y: deslocamento vertical
            0
          );
        } else {
          // DESKTOP
          group.scale.setScalar(340);

          group.position.set(
            width * 0.22,
            -height * 0.02,
            0
          );
        }
      }

      window.addEventListener("resize", resize);
      resize();

      let time = 0;
      let frameId;

      function animate() {
        frameId = requestAnimationFrame(animate);

        time += ${speed};

        group.rotation.y = time * 0.0018;
        group.rotation.x = 0.2;
        group.rotation.z = time * 0.0006;

        nodes.forEach((mesh) => {
          const p = mesh.userData;

          const pulse = (
            Math.sin(
              time * p.pulseSpeed + p.pulseOffset
            ) + 1
          ) / 2;

          const size = (
            p.baseSize + pulse * 1.5
          ) / group.scale.x;

          mesh.scale.setScalar(size);
          mesh.material.opacity = 0.35 + pulse * 0.6;
        });

        renderer.render(scene, camera);
      }

      animate();

      window.addEventListener("pagehide", () => {
        cancelAnimationFrame(frameId);
        renderer.dispose();
      }, { once: true });
    })();
  </script>
</body>
</html>`;
}

export default function TopologyField({
  mode = TOPOLOGY_FIELD_DEFAULTS.mode,
  hue = TOPOLOGY_FIELD_DEFAULTS.hue,
  saturation = TOPOLOGY_FIELD_DEFAULTS.saturation,
  brightness = TOPOLOGY_FIELD_DEFAULTS.brightness,
  speed = TOPOLOGY_FIELD_DEFAULTS.speed,
  className,
  style,
}) {
  const safeMode = mode === "light" ? "light" : "dark";

  const safeHue = clamp(Number(hue) || 0, -180, 180);
  const safeSaturation = clamp(Number(saturation) || 0, 0, 2);
  const safeBrightness = clamp(Number(brightness) || 0.8, 0.35, 1.65);
  const safeSpeed = clamp(Number(speed) || 0.01, 0.1, 3);

  const source = useMemo(
    () => createTopologySource(safeSpeed),
    [safeSpeed]
  );


  const filter = `hue-rotate(${safeHue}deg) saturate(${safeSaturation}) brightness(${safeBrightness})`;

  return (
    <iframe
      className={className}
      title="Animação de topologia"
      aria-hidden="true"
      tabIndex={-1}
      srcDoc={source}
      sandbox="allow-scripts"
      loading="eager"
      style={{
        display: "block",
        position: "absolute",
        inset: 0,
        width: "100%",
        height: "100%",
        border: 0,
        background: safeMode === "dark" ? "#070707" : "#f4f3f1",
        filter: filter,
        pointerEvents: "none",
        ...style,
      }}
    />
  );
}

