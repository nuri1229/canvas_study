import React, { useEffect, useRef, useCallback, useState } from "react";

const canvasWidth = window.screen.width;
const canvasHeight = 200;
const lineWidth = 4;

export const Step3Page: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const domRef = useRef<HTMLDivElement | null>(null);
  const [flag, setFlag] = useState<boolean>(false);

  const getCtx = () => {
    const ctx = canvasRef.current?.getContext("2d");
    if (ctx) return ctx;
    throw new Error("Canvas Context Not Exist");
  };
  const setCanvasConfig = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    canvas.width = canvasWidth;
    canvas.height = canvasHeight;

    const ctx = getCtx();

    ctx.strokeStyle = "#999";
    // ctx.lineWidth = lineWidth;
    ctx.lineJoin = "round";
    ctx.lineCap = "round";
  }, []);

  const drawing = () => {
    const radius = 200;
    const ctx = getCtx();
    ctx.fillStyle = "#000";
    ctx.beginPath();
    ctx.arc(canvasWidth / 2, canvasHeight, 200, Math.PI * 1, Math.PI * 2);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();

    ctx.fillStyle = "red";
    ctx.beginPath();
    ctx.arc(canvasWidth / 2, canvasHeight, 200 * 0.8, Math.PI * 1, Math.PI * 2);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();

    // ctx.beginPath();
    // let x = 0;
    // let y = 0;
    // ctx.moveTo(x, y);
    // ctx.lineTo(100, 100);
    // ctx.stroke();
    const smallRadius = radius * 0.8;

    ctx.lineWidth = 4;
    ctx.beginPath();
    let x = Math.cos(5 * (Math.PI / 180)) * radius + canvasWidth / 2;
    let y = canvasHeight - Math.sin(5 * (Math.PI / 180)) * radius;
    ctx.moveTo(x, y);
    x = Math.cos(5 * (Math.PI / 180)) * smallRadius + canvasWidth / 2;
    y = canvasHeight - Math.sin(5 * (Math.PI / 180)) * smallRadius;
    ctx.lineTo(x, y);
    ctx.stroke();

    ctx.beginPath();
    x = Math.cos(45 * (Math.PI / 180)) * radius + canvasWidth / 2;
    y = canvasHeight - Math.sin(45 * (Math.PI / 180)) * radius;
    ctx.moveTo(x, y);
    x = Math.cos(45 * (Math.PI / 180)) * smallRadius + canvasWidth / 2;
    y = canvasHeight - Math.sin(45 * (Math.PI / 180)) * smallRadius;
    ctx.lineTo(x, y);
    ctx.stroke();

    ctx.beginPath();
    x = Math.cos(90 * (Math.PI / 180)) * radius + canvasWidth / 2;
    y = canvasHeight - Math.sin(90 * (Math.PI / 180)) * radius;
    ctx.moveTo(x, y);
    x = Math.cos(90 * (Math.PI / 180)) * smallRadius + canvasWidth / 2;
    y = canvasHeight - Math.sin(90 * (Math.PI / 180)) * smallRadius;
    ctx.lineTo(x, y);
    ctx.stroke();

    ctx.beginPath();
    x = Math.cos(135 * (Math.PI / 180)) * radius + canvasWidth / 2;
    y = canvasHeight - Math.sin(135 * (Math.PI / 180)) * radius;
    ctx.moveTo(x, y);
    x = Math.cos(135 * (Math.PI / 180)) * smallRadius + canvasWidth / 2;
    y = canvasHeight - Math.sin(135 * (Math.PI / 180)) * smallRadius;
    ctx.lineTo(x, y);
    ctx.stroke();

    ctx.beginPath();
    x = Math.cos(175 * (Math.PI / 180)) * radius + canvasWidth / 2;
    y = canvasHeight - Math.sin(175 * (Math.PI / 180)) * radius;
    ctx.moveTo(x, y);
    x = Math.cos(175 * (Math.PI / 180)) * smallRadius + canvasWidth / 2;
    y = canvasHeight - Math.sin(175 * (Math.PI / 180)) * smallRadius;
    ctx.lineTo(x, y);
    ctx.stroke();

    ctx.beginPath();
    x = Math.cos(175 * (Math.PI / 180)) * radius + canvasWidth / 2;
    y = canvasHeight - Math.sin(175 * (Math.PI / 180)) * radius;
    ctx.moveTo(x, y);
    x = Math.cos(175 * (Math.PI / 180)) * smallRadius + canvasWidth / 2;
    y = canvasHeight - Math.sin(175 * (Math.PI / 180)) * smallRadius;
    ctx.lineTo(x, y);
    ctx.stroke();
    setFlag(true);
  };

  const onClick = () => {
    drawing();
  };

  const rotateChange = () => {
    let deg = -175;
    let frame = -1;

    const change = () => {
      if (!domRef.current) return;
      console.log("here");
      deg = deg + 1;
      domRef.current.style.transform = `rotate(${deg}deg)`;
      if (deg >= -5) {
        cancelAnimationFrame(frame);
      } else {
        frame = requestAnimationFrame(change);
      }
    };

    return change;
  };

  useEffect(() => {
    setCanvasConfig();
  }, []);

  useEffect(() => {
    if (flag && domRef.current) {
      requestAnimationFrame(rotateChange());
    }
  }, [flag]);

  return (
    <div className="container bg_purple">
      {flag && <div className="line" ref={domRef} />}
      <canvas id="draw" className={"draw_canvas"} ref={canvasRef}></canvas>
      <button type="button" onClick={onClick}>
        그리기
      </button>
    </div>
  );
};
