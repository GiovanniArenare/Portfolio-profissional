import { useEffect, useRef } from "react";

export default function ProjetosBackground() {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext("2d");

        let width = 0;
        let height = 0;
        let animationId;
        let offset = 0;

        const GRID_SIZE = 42;
        const COLOR = "#0bd800";

        function resizeCanvas() {
            const rect = canvas.parentElement.getBoundingClientRect();
            const dpr = Math.min(window.devicePixelRatio || 1, 2);

            width = rect.width;
            height = Math.max(
                rect.height,
                canvas.parentElement.scrollHeight
            );

            canvas.width = width * dpr;
            canvas.height = height * dpr;

            ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
        }

        function animate() {
            ctx.clearRect(0, 0, width, height);

            // Grade horizontal e vertical.
            ctx.lineWidth = 1;
            ctx.strokeStyle = "rgba(11, 216, 0, 0.055)";

            for (let x = 0; x <= width; x += GRID_SIZE) {
                ctx.beginPath();
                ctx.moveTo(x, 0);
                ctx.lineTo(x, height);
                ctx.stroke();
            }

            for (let y = 0; y <= height; y += GRID_SIZE) {
                ctx.beginPath();
                ctx.moveTo(0, y);
                ctx.lineTo(width, y);
                ctx.stroke();
            }

            // Brilho que percorre lentamente a grade.
            offset = (offset + 0.35) % (height + 180);

            const gradient = ctx.createLinearGradient(
                0,
                offset - 90,
                0,
                offset + 90
            );

            gradient.addColorStop(0, "rgba(11, 216, 0, 0)");
            gradient.addColorStop(0.5, "rgba(11, 216, 0, 0.12)");
            gradient.addColorStop(1, "rgba(11, 216, 0, 0)");

            ctx.fillStyle = gradient;
            ctx.fillRect(0, 0, width, height);

            // Brilho sutil no topo.
            const glow = ctx.createRadialGradient(
                width * 0.5,
                0,
                0,
                width * 0.5,
                0,
                width * 0.65
            );

            glow.addColorStop(0, "rgba(11, 216, 0, 0.055)");
            glow.addColorStop(1, "rgba(11, 216, 0, 0)");

            ctx.fillStyle = glow;
            ctx.fillRect(0, 0, width, height);

            animationId = requestAnimationFrame(animate);
        }

        resizeCanvas();
        animate();

        window.addEventListener("resize", resizeCanvas);

        return () => {
            cancelAnimationFrame(animationId);
            window.removeEventListener("resize", resizeCanvas);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            aria-hidden="true"
            style={{
                position: "absolute",
                left: 0,
                width: "100%",
                height: "109%",
                pointerEvents: "none",
                zIndex: 0,
                top: -80,
            }}
        />
    );
}
