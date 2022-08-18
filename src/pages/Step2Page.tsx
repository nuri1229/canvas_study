import React, { useEffect, useRef, useCallback } from "react";

const canvasWidth = 300;
const canvasHeight = 500;
const lineWidth = 4;

const eyeOffsetX = 40;
const eyeOffsetY = 150;
const eyeRadius = 10;

export const Step2Page: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const stepRef = useRef<number>(0);

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
    ctx.lineWidth = lineWidth;
    ctx.lineJoin = "round";
    ctx.lineCap = "round";
  }, []);

  const 아침먹고땡 = () => {
    let eyeLineLength = 2;
    let frame = -1;
    let start = 0;
    let end = 0.1;

    const drawArc = () => {
      const ctx = getCtx();
      ctx.beginPath();
      ctx.arc(
        eyeOffsetX,
        eyeOffsetY,
        eyeRadius,
        start * Math.PI,
        end * Math.PI
      );

      start = (start * 10 + 1) / 10;
      end = (end * 10 + 1) / 10;
      ctx.stroke();

      if (end < 2) {
        frame = requestAnimationFrame(drawArc);
      } else {
        drawLine();
      }
    };

    const drawLine = () => {
      const ctx = getCtx();
      ctx.beginPath();
      const startPoint = eyeOffsetY - eyeRadius - 10;
      ctx.moveTo(eyeOffsetX, startPoint + eyeLineLength - 2);
      ctx.lineTo(eyeOffsetX, startPoint + eyeLineLength);
      ctx.stroke();
      eyeLineLength = eyeLineLength + 2;
      if (eyeLineLength > 40) {
        cancelAnimationFrame(frame);
      } else {
        frame = requestAnimationFrame(drawLine);
      }
    };

    return drawArc;
  };

  const 점심먹고땡 = () => {
    let eyeLineLength = 2;
    let frame = -1;
    let start = 0;
    let end = 0.1;

    const drawArc = () => {
      const ctx = getCtx();
      ctx.beginPath();
      ctx.arc(
        canvasWidth - eyeOffsetX,
        eyeOffsetY,
        eyeRadius,
        start * Math.PI,
        end * Math.PI
      );

      start = (start * 10 + 1) / 10;
      end = (end * 10 + 1) / 10;
      ctx.stroke();

      if (end < 2) {
        frame = requestAnimationFrame(drawArc);
      } else {
        drawLine();
      }
    };

    const drawLine = () => {
      const ctx = getCtx();
      ctx.beginPath();
      const startPoint = eyeOffsetY - eyeRadius - 10;
      ctx.moveTo(canvasWidth - eyeOffsetX, startPoint + eyeLineLength - 2);
      ctx.lineTo(canvasWidth - eyeOffsetX, startPoint + eyeLineLength);
      ctx.stroke();
      eyeLineLength = eyeLineLength + 2;
      if (eyeLineLength > 40) {
        cancelAnimationFrame(frame);
      } else {
        frame = requestAnimationFrame(drawLine);
      }
    };

    return drawArc;
  };

  const 저녁먹고땡 = () => {
    let eyeLineLength = 2;
    let frame = -1;
    let start = 0;
    let end = 0.1;

    /* 
    ctx.arc(canvasWidth / 2, canvasHeight / 2, eyeRadius, 0, Math.PI * 2);
    ctx.moveTo(canvasWidth / 2, canvasHeight / 2 - eyeRadius - 10);
    ctx.lineTo(canvasWidth / 2, canvasHeight / 2 + eyeRadius + 10);
    */
    const drawArc = () => {
      const ctx = getCtx();
      ctx.beginPath();
      ctx.arc(
        canvasWidth / 2,
        canvasHeight / 2,
        eyeRadius,
        start * Math.PI,
        end * Math.PI
      );

      start = (start * 10 + 1) / 10;
      end = (end * 10 + 1) / 10;

      ctx.stroke();

      if (end < 2) {
        frame = requestAnimationFrame(drawArc);
      } else {
        drawLine();
      }
    };

    const drawLine = () => {
      const ctx = getCtx();
      ctx.beginPath();
      const startPoint = canvasHeight / 2 - eyeRadius - 10;
      ctx.moveTo(canvasWidth / 2, startPoint + eyeLineLength - 2);
      ctx.lineTo(canvasWidth / 2, startPoint + eyeLineLength);
      ctx.stroke();
      eyeLineLength = eyeLineLength + 2;
      if (eyeLineLength > 40) {
        cancelAnimationFrame(frame);
      } else {
        frame = requestAnimationFrame(drawLine);
      }
    };

    return drawArc;
  };

  const 지렁이세마리기어갑니다 = () => {
    const earthWormLength = canvasWidth / 2; // 150
    const earthWormOffsetX = canvasWidth / 2 / 2; // 75
    const earthWormOffsetY = 60;
    const earthWormGap = 10;

    let frame = -1;

    const 지렁이1 = () => {
      let t = 0.01;
      let beforeX = earthWormOffsetX;
      let beforeY = earthWormOffsetY;

      const 지렁이1그리기 = () => {
        const ctx = getCtx();

        ctx.beginPath();
        ctx.moveTo(beforeX, beforeY);
        const x1 = earthWormOffsetX;
        const x2 = earthWormOffsetX + earthWormLength / 2 / 2;
        const x3 = canvasWidth - earthWormOffsetX - earthWormLength / 2 / 2;
        const x4 = earthWormOffsetX + earthWormLength;

        const y1 = earthWormOffsetY;
        const y2 = earthWormOffsetY - earthWormOffsetY / 2;
        const y3 = earthWormOffsetY + earthWormOffsetY / 2;
        const y4 = earthWormOffsetY;

        const x =
          Math.pow(1 - t, 3) * x1 +
          3 * Math.pow(1 - t, 2) * t * x2 +
          3 * (1 - t) * Math.pow(t, 2) * x3 +
          Math.pow(t, 3) * x4;

        const y =
          Math.pow(1 - t, 3) * y1 +
          3 * Math.pow(1 - t, 2) * t * y2 +
          3 * (1 - t) * Math.pow(t, 2) * y3 +
          Math.pow(t, 3) * y4;

        const intX = Math.floor(x);
        const intY = Math.floor(y);
        ctx.moveTo(beforeX, beforeY);
        ctx.lineTo(intX, intY);
        beforeX = intX;
        beforeY = intY;
        t = (Math.ceil(t * 100) + 4) / 100;

        ctx.stroke();

        if (t > 1) {
          frame = requestAnimationFrame(지렁이2());
        } else {
          frame = requestAnimationFrame(지렁이1그리기);
        }
      };

      return 지렁이1그리기;
    };

    const 지렁이2 = () => {
      let t = 0.01;
      let beforeX = earthWormOffsetX;
      let beforeY = earthWormOffsetY + earthWormGap;

      const 지렁이2그리기 = () => {
        const ctx = getCtx();
        ctx.beginPath();

        const x1 = earthWormOffsetX;
        const x2 = earthWormOffsetX + earthWormLength / 2 / 2;
        const x3 = canvasWidth - earthWormOffsetX - earthWormLength / 2 / 2;
        const x4 = earthWormOffsetX + earthWormLength;

        const y1 = earthWormOffsetY + earthWormGap;
        const y2 = earthWormOffsetY - earthWormOffsetY / 2 + earthWormGap;
        const y3 = earthWormOffsetY + earthWormOffsetY / 2 + earthWormGap;
        const y4 = earthWormOffsetY + earthWormGap;

        const x =
          Math.pow(1 - t, 3) * x1 +
          3 * Math.pow(1 - t, 2) * t * x2 +
          3 * (1 - t) * Math.pow(t, 2) * x3 +
          Math.pow(t, 3) * x4;

        const y =
          Math.pow(1 - t, 3) * y1 +
          3 * Math.pow(1 - t, 2) * t * y2 +
          3 * (1 - t) * Math.pow(t, 2) * y3 +
          Math.pow(t, 3) * y4;

        const intX = Math.floor(x);
        const intY = Math.floor(y);
        ctx.moveTo(beforeX, beforeY);
        ctx.lineTo(intX, intY);
        beforeX = intX;
        beforeY = intY;
        t = (Math.ceil(t * 100) + 4) / 100;

        ctx.stroke();

        if (t > 1) {
          frame = requestAnimationFrame(지렁이3());
        } else {
          frame = requestAnimationFrame(지렁이2그리기);
        }
      };

      return 지렁이2그리기;
    };

    const 지렁이3 = () => {
      let t = 0.01;
      let beforeX = earthWormOffsetX;
      let beforeY = earthWormOffsetY + earthWormGap * 2;

      const 지렁이3그리기 = () => {
        const ctx = getCtx();
        ctx.beginPath();

        const x1 = earthWormOffsetX;
        const x2 = earthWormOffsetX + earthWormLength / 2 / 2;
        const x3 = canvasWidth - earthWormOffsetX - earthWormLength / 2 / 2;
        const x4 = earthWormOffsetX + earthWormLength;

        const y1 = earthWormOffsetY + earthWormGap * 2;
        const y2 = earthWormOffsetY - earthWormOffsetY / 2 + earthWormGap * 2;
        const y3 = earthWormOffsetY + earthWormOffsetY / 2 + earthWormGap * 2;
        const y4 = earthWormOffsetY + earthWormGap * 2;

        const x =
          Math.pow(1 - t, 3) * x1 +
          3 * Math.pow(1 - t, 2) * t * x2 +
          3 * (1 - t) * Math.pow(t, 2) * x3 +
          Math.pow(t, 3) * x4;

        const y =
          Math.pow(1 - t, 3) * y1 +
          3 * Math.pow(1 - t, 2) * t * y2 +
          3 * (1 - t) * Math.pow(t, 2) * y3 +
          Math.pow(t, 3) * y4;

        const intX = Math.floor(x);
        const intY = Math.floor(y);
        ctx.moveTo(beforeX, beforeY);
        ctx.lineTo(intX, intY);
        beforeX = intX;
        beforeY = intY;
        t = (Math.ceil(t * 100) + 4) / 100;

        ctx.stroke();

        if (t > 1) {
          cancelAnimationFrame(frame);
        } else {
          frame = requestAnimationFrame(지렁이3그리기);
        }
      };

      return 지렁이3그리기;
    };

    return 지렁이1();
  };

  const 창문을열어보니비가오나봐 = () => {
    /*
      ctx.beginPath();
      ctx.rect(mouthOffsetX, mouthOffsetY, mouthWidth, mouthHeight);
      ctx.stroke();

      ctx.beginPath();
      ctx.moveTo(mouthOffsetX + mouthGap, mouthOffsetY);
      ctx.lineTo(mouthOffsetX + mouthGap, mouthOffsetY + mouthHeight);

      ctx.moveTo(mouthOffsetX + mouthGap * 2, mouthOffsetY);
      ctx.lineTo(mouthOffsetX + mouthGap * 2, mouthOffsetY + mouthHeight);

      ctx.moveTo(mouthOffsetX + mouthGap * 3, mouthOffsetY);
      ctx.lineTo(mouthOffsetX + mouthGap * 3, mouthOffsetY + mouthHeight);
      ctx.stroke();
    */
    const mouthWidth = 200;
    const mouthHeight = 50;
    const mouthOffsetX = canvasWidth / 2 - mouthWidth / 2;
    const mouthOffsetY = canvasHeight - 200;
    const mouthGap = 50;

    let frame = -1;
    let beforeX = mouthOffsetX;
    let beforeY = mouthOffsetY;

    const 입그리기top = () => {
      const ctx = getCtx();
      ctx.beginPath();
      ctx.moveTo(beforeX, beforeY);
      const x = beforeX + 2;
      const y = beforeY;
      ctx.lineTo(x, y);
      beforeX = x;
      beforeY = y;
      ctx.stroke();

      if (x > mouthWidth + mouthOffsetX) {
        frame = requestAnimationFrame(입그리기right);
      } else {
        frame = requestAnimationFrame(입그리기top);
      }
    };

    const 입그리기right = () => {
      const ctx = getCtx();
      ctx.beginPath();
      ctx.moveTo(beforeX, beforeY);
      const x = beforeX;
      const y = beforeY + 2;
      ctx.lineTo(x, y);
      beforeX = x;
      beforeY = y;
      ctx.stroke();

      if (y > mouthHeight + mouthOffsetY) {
        frame = requestAnimationFrame(입그리기bottom);
      } else {
        frame = requestAnimationFrame(입그리기right);
      }
    };

    const 입그리기bottom = () => {
      const ctx = getCtx();
      ctx.beginPath();
      ctx.moveTo(beforeX, beforeY);
      const x = beforeX - 2;
      const y = beforeY;
      ctx.lineTo(x, y);
      beforeX = x;
      beforeY = y;
      ctx.stroke();

      if (x < mouthOffsetX) {
        frame = requestAnimationFrame(입그리기left);
      } else {
        frame = requestAnimationFrame(입그리기bottom);
      }
    };

    const 입그리기left = () => {
      const ctx = getCtx();
      ctx.beginPath();
      ctx.moveTo(beforeX, beforeY);
      const x = beforeX;
      const y = beforeY - 2;
      ctx.lineTo(x, y < mouthOffsetY ? mouthOffsetY : y);
      beforeX = x;
      beforeY = y;
      ctx.stroke();

      if (y < mouthOffsetY) {
        beforeX = mouthOffsetX + mouthGap;
        beforeY = mouthOffsetY;
        frame = requestAnimationFrame(이빨1);
      } else {
        frame = requestAnimationFrame(입그리기left);
      }
    };

    const 이빨1 = () => {
      const ctx = getCtx();
      ctx.beginPath();
      ctx.moveTo(beforeX, beforeY);
      const x = beforeX;
      const y = beforeY + 1;
      ctx.lineTo(x, y);
      beforeX = x;
      beforeY = y;
      ctx.stroke();

      if (y > mouthOffsetY + mouthHeight) {
        beforeX = mouthOffsetX + mouthGap * 2;
        beforeY = mouthOffsetY;
        frame = requestAnimationFrame(이빨2);
      } else {
        frame = requestAnimationFrame(이빨1);
      }
    };

    const 이빨2 = () => {
      const ctx = getCtx();
      ctx.beginPath();
      ctx.moveTo(beforeX, beforeY);
      const x = beforeX;
      const y = beforeY + 1;
      ctx.lineTo(x, y);
      beforeX = x;
      beforeY = y;
      ctx.stroke();

      if (y > mouthOffsetY + mouthHeight) {
        beforeX = mouthOffsetX + mouthGap * 3;
        beforeY = mouthOffsetY;
        frame = requestAnimationFrame(이빨3);
      } else {
        frame = requestAnimationFrame(이빨2);
      }
    };

    const 이빨3 = () => {
      const ctx = getCtx();
      ctx.beginPath();
      ctx.moveTo(beforeX, beforeY);
      const x = beforeX;
      const y = beforeY + 1;
      ctx.lineTo(x, y);
      beforeX = x;
      beforeY = y;
      ctx.stroke();

      if (y > mouthOffsetY + mouthHeight) {
        cancelAnimationFrame(frame);
      } else {
        frame = requestAnimationFrame(이빨2);
      }
    };

    return 입그리기top;
  };

  const 아이고무서워라해골바가지 = () => {
    const mouthWidth = 200;
    const mouthHeight = 50;
    const mouthOffsetX = canvasWidth / 2 - mouthWidth / 2;
    const mouthOffsetY = canvasHeight - 200;

    let frame = -1;
    let beforeX = 0 + lineWidth;
    let beforeY = canvasHeight / 2;

    const 두개골일사분면 = () => {
      let t = 0.01;

      const 두개골일사분면그리기 = () => {
        const ctx = getCtx();
        ctx.beginPath();
        ctx.moveTo(beforeX, beforeY);

        const x1 = 0 + lineWidth;
        const x2 = 0;
        const x3 = canvasWidth / 2;

        const y1 = canvasHeight / 2;
        const y2 = 0;
        const y3 = 0 + lineWidth;

        const x =
          Math.pow(1 - t, 2) * x1 + 2 * (1 - t) * t * x2 + Math.pow(t, 2) * x3;

        const y =
          Math.pow(1 - t, 2) * y1 + 2 * (1 - t) * t * y2 + Math.pow(t, 2) * y3;

        const intX = Math.floor(x);
        const intY = Math.floor(y);
        ctx.moveTo(beforeX, beforeY);
        ctx.lineTo(intX, intY);
        beforeX = intX;
        beforeY = intY;
        t = (Math.ceil(t * 100) + 4) / 100;

        ctx.stroke();

        if (x > x3) {
          frame = requestAnimationFrame(두개골이사분면());
        } else {
          frame = requestAnimationFrame(두개골일사분면그리기);
        }
      };

      return 두개골일사분면그리기;
    };

    const 두개골이사분면 = () => {
      let t = 0.01;

      const 두개골이사분면그리기 = () => {
        const ctx = getCtx();
        ctx.beginPath();
        ctx.moveTo(beforeX, beforeY);

        const x1 = canvasWidth / 2;
        const x2 = canvasWidth;
        const x3 = canvasWidth - lineWidth;

        const y1 = 0 + lineWidth;
        const y2 = 0;
        const y3 = canvasHeight / 2;

        const x =
          Math.pow(1 - t, 2) * x1 + 2 * (1 - t) * t * x2 + Math.pow(t, 2) * x3;

        const y =
          Math.pow(1 - t, 2) * y1 + 2 * (1 - t) * t * y2 + Math.pow(t, 2) * y3;

        const intX = Math.floor(x);
        const intY = Math.floor(y);
        ctx.moveTo(beforeX, beforeY);
        ctx.lineTo(intX, intY);
        beforeX = intX;
        beforeY = intY;
        t = (Math.ceil(t * 100) + 4) / 100;

        ctx.stroke();

        if (y > y3) {
          frame = requestAnimationFrame(두개골삼사분면());
        } else {
          frame = requestAnimationFrame(두개골이사분면그리기);
        }
      };

      return 두개골이사분면그리기;
    };

    const 두개골삼사분면 = () => {
      let t = 0.01;

      const 두개골삼사분면그리기 = () => {
        const ctx = getCtx();
        ctx.beginPath();
        ctx.moveTo(beforeX, beforeY);

        const x1 = canvasWidth - lineWidth;
        const x2 = canvasWidth - mouthOffsetX / 2;
        const x3 = canvasWidth - mouthOffsetX;

        const y1 = canvasHeight / 2;
        const y2 = mouthOffsetY + mouthHeight * 2;
        const y3 = mouthOffsetY + mouthHeight * 2;

        const x =
          Math.pow(1 - t, 2) * x1 + 2 * (1 - t) * t * x2 + Math.pow(t, 2) * x3;

        const y =
          Math.pow(1 - t, 2) * y1 + 2 * (1 - t) * t * y2 + Math.pow(t, 2) * y3;

        const intX = Math.floor(x);
        const intY = Math.floor(y);
        ctx.moveTo(beforeX, beforeY);
        ctx.lineTo(intX, intY);
        beforeX = intX;
        beforeY = intY;
        t = (Math.ceil(t * 100) + 4) / 100;

        ctx.stroke();

        if (x < x3) {
          frame = requestAnimationFrame(턱right);
        } else {
          frame = requestAnimationFrame(두개골삼사분면그리기);
        }
      };

      return 두개골삼사분면그리기;
    };

    const 턱right = () => {
      const ctx = getCtx();
      ctx.beginPath();
      ctx.moveTo(beforeX, beforeY);
      const x = beforeX;
      const y = beforeY + 1;

      beforeX = x;
      beforeY = y;
      ctx.lineTo(x, y);
      ctx.stroke();

      if (y > mouthOffsetY + mouthHeight * 2 + 50) {
        frame = requestAnimationFrame(턱bottom);
      } else {
        frame = requestAnimationFrame(턱right);
      }

      // ctx.lineTo(canvasWidth - mouthOffsetX, mouthOffsetY + mouthHeight * 2 + 50);
      // ctx.lineTo(mouthOffsetX, mouthOffsetY + mouthHeight * 2 + 50);
      // ctx.lineTo(mouthOffsetX, mouthOffsetY + mouthHeight * 2);
    };

    const 턱bottom = () => {
      const ctx = getCtx();
      ctx.beginPath();
      ctx.moveTo(beforeX, beforeY);
      const x = beforeX - 1;
      const y = beforeY;

      beforeX = x;
      beforeY = y;
      ctx.lineTo(x, y);
      ctx.stroke();

      if (x < mouthOffsetX) {
        frame = requestAnimationFrame(턱left);
      } else {
        frame = requestAnimationFrame(턱bottom);
      }
    };

    const 턱left = () => {
      const ctx = getCtx();
      ctx.beginPath();
      ctx.moveTo(beforeX, beforeY);
      const x = beforeX;
      const y = beforeY - 1;

      beforeX = x;
      beforeY = y;
      ctx.lineTo(x, y);
      ctx.stroke();

      if (y < mouthOffsetY + mouthHeight * 2) {
        frame = requestAnimationFrame(두개골사사분면());
      } else {
        frame = requestAnimationFrame(턱left);
      }
    };

    const 두개골사사분면 = () => {
      let t = 0.01;

      const 두개골사사분면그리기 = () => {
        const ctx = getCtx();
        ctx.beginPath();
        ctx.moveTo(beforeX, beforeY);

        const x1 = mouthOffsetX;
        const x2 = mouthOffsetX / 2;
        const x3 = 0 + lineWidth;

        const y1 = mouthOffsetY + mouthHeight * 2;
        const y2 = mouthOffsetY + mouthHeight * 2;
        const y3 = canvasHeight / 2;

        const x =
          Math.pow(1 - t, 2) * x1 + 2 * (1 - t) * t * x2 + Math.pow(t, 2) * x3;

        const y =
          Math.pow(1 - t, 2) * y1 + 2 * (1 - t) * t * y2 + Math.pow(t, 2) * y3;

        const intX = Math.floor(x);
        const intY = Math.floor(y);
        ctx.moveTo(beforeX, beforeY);
        ctx.lineTo(intX, intY);
        beforeX = intX;
        beforeY = intY;
        t = (Math.ceil(t * 100) + 4) / 100;

        ctx.stroke();

        if (x < x3) {
          cancelAnimationFrame(frame);
        } else {
          frame = requestAnimationFrame(두개골사사분면그리기);
        }
      };

      return 두개골사사분면그리기;
    };

    return 두개골일사분면();
    // const ctx = getCtx();
    // ctx.beginPath();
    // ctx.moveTo(0 + lineWidth, canvasHeight / 2);
    // ctx.quadraticCurveTo(0, 0, canvasWidth / 2, 0 + lineWidth);
    // ctx.quadraticCurveTo(
    //   canvasWidth,
    //   0,
    //   canvasWidth - lineWidth,
    //   canvasHeight / 2
    // );
    // ctx.quadraticCurveTo(
    //   canvasWidth - mouthOffsetX / 2,
    //   mouthOffsetY + mouthHeight * 2,
    //   canvasWidth - mouthOffsetX,
    //   mouthOffsetY + mouthHeight * 2
    // );

    // ctx.lineTo(
    //   canvasWidth - mouthOffsetX,
    //   mouthOffsetY + mouthHeight * 2 + 50
    // );
    // ctx.lineTo(mouthOffsetX, mouthOffsetY + mouthHeight * 2 + 50);
    // ctx.lineTo(mouthOffsetX, mouthOffsetY + mouthHeight * 2);

    // ctx.quadraticCurveTo(
    //   mouthOffsetX / 2,
    //   mouthOffsetY + mouthHeight * 2,
    //   0 + lineWidth,
    //   canvasHeight / 2
    // );

    // ctx.stroke();
  };

  const drawingStep = [
    아침먹고땡(),
    점심먹고땡(),
    저녁먹고땡(),
    지렁이세마리기어갑니다(),
    창문을열어보니비가오나봐(),
    아이고무서워라해골바가지(),
  ];

  const onClickHandler = () => {
    const step = stepRef.current;
    const fnc = drawingStep[step];
    if (step < drawingStep.length) {
      stepRef.current = stepRef.current + 1;
      if (fnc) fnc();
    } else {
      alert("끝났어");
    }
  };

  useEffect(() => {
    setCanvasConfig();
    console.log("=>");

    /*

    const earthWormLength = canvasWidth / 2;
    const earthWormOffsetX = canvasWidth / 2 / 2;
    const earthWormOffsetY = 60;
    const earthWormGap = 10;

    ctx.beginPath();
    ctx.moveTo(earthWormOffsetX, earthWormOffsetY);
    ctx.bezierCurveTo(
      earthWormOffsetX + earthWormLength / 2 / 2,
      earthWormOffsetY - earthWormOffsetY / 2,
      canvasWidth - earthWormOffsetX - earthWormLength / 2 / 2,
      earthWormOffsetY + earthWormOffsetY / 2,
      earthWormOffsetX + earthWormLength,
      earthWormOffsetY
    );
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(earthWormOffsetX, earthWormOffsetY + earthWormGap);
    ctx.bezierCurveTo(
      earthWormOffsetX + earthWormLength / 2 / 2,
      earthWormOffsetY - earthWormOffsetY / 2 + earthWormGap,
      canvasWidth - earthWormOffsetX - earthWormLength / 2 / 2,
      earthWormOffsetY + earthWormOffsetY / 2 + earthWormGap,
      earthWormOffsetX + earthWormLength,
      earthWormOffsetY + earthWormGap
    );
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(earthWormOffsetX, earthWormOffsetY + earthWormGap);
    ctx.bezierCurveTo(
      earthWormOffsetX + earthWormLength / 2 / 2,
      earthWormOffsetY - earthWormOffsetY / 2 + earthWormGap,
      canvasWidth - earthWormOffsetX - earthWormLength / 2 / 2,
      earthWormOffsetY + earthWormOffsetY / 2 + earthWormGap,
      earthWormOffsetX + earthWormLength,
      earthWormOffsetY + earthWormGap
    );
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(earthWormOffsetX, earthWormOffsetY + earthWormGap);
    ctx.bezierCurveTo(
      earthWormOffsetX + earthWormLength / 2 / 2,
      earthWormOffsetY - earthWormOffsetY / 2 + earthWormGap,
      canvasWidth - earthWormOffsetX - earthWormLength / 2 / 2,
      earthWormOffsetY + earthWormOffsetY / 2 + earthWormGap,
      earthWormOffsetX + earthWormLength,
      earthWormOffsetY + earthWormGap
    );
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(
      earthWormOffsetX,
      earthWormOffsetY + earthWormGap + earthWormGap
    );
    ctx.bezierCurveTo(
      earthWormOffsetX + earthWormLength / 2 / 2,
      earthWormOffsetY - earthWormOffsetY / 2 + earthWormGap + earthWormGap,
      canvasWidth - earthWormOffsetX - earthWormLength / 2 / 2,
      earthWormOffsetY + earthWormOffsetY / 2 + earthWormGap + earthWormGap,
      earthWormOffsetX + earthWormLength,
      earthWormOffsetY + earthWormGap + earthWormGap
    );
    ctx.stroke();

    const mouthWidth = 200;
    const mouthHeight = 50;
    const mouthOffsetX = canvasWidth / 2 - mouthWidth / 2;
    const mouthOffsetY = canvasHeight - 200;
    const mouthGap = 50;

    ctx.beginPath();
    ctx.rect(mouthOffsetX, mouthOffsetY, mouthWidth, mouthHeight);
    ctx.stroke();

    // 입
    ctx.beginPath();
    ctx.moveTo(mouthOffsetX + mouthGap, mouthOffsetY);
    ctx.lineTo(mouthOffsetX + mouthGap, mouthOffsetY + mouthHeight);

    ctx.moveTo(mouthOffsetX + mouthGap * 2, mouthOffsetY);
    ctx.lineTo(mouthOffsetX + mouthGap * 2, mouthOffsetY + mouthHeight);

    ctx.moveTo(mouthOffsetX + mouthGap * 3, mouthOffsetY);
    ctx.lineTo(mouthOffsetX + mouthGap * 3, mouthOffsetY + mouthHeight);
    ctx.stroke();

    // 테두리
    ctx.beginPath();
    ctx.moveTo(0 + lineWidth, canvasHeight / 2);
    ctx.quadraticCurveTo(0, 0, canvasWidth / 2, 0 + lineWidth);
    ctx.quadraticCurveTo(
      canvasWidth,
      0,
      canvasWidth - lineWidth,
      canvasHeight / 2
    );
    ctx.quadraticCurveTo(
      canvasWidth - mouthOffsetX / 2,
      mouthOffsetY + mouthHeight * 2,
      canvasWidth - mouthOffsetX,
      mouthOffsetY + mouthHeight * 2
    );

    ctx.lineTo(canvasWidth - mouthOffsetX, mouthOffsetY + mouthHeight * 2 + 50);
    ctx.lineTo(mouthOffsetX, mouthOffsetY + mouthHeight * 2 + 50);
    ctx.lineTo(mouthOffsetX, mouthOffsetY + mouthHeight * 2);

    ctx.quadraticCurveTo(
      mouthOffsetX / 2,
      mouthOffsetY + mouthHeight * 2,
      0 + lineWidth,
      canvasHeight / 2
    );

    ctx.stroke();

   
    */
  }, [setCanvasConfig]);

  return (
    <div className="container bg_blue">
      <canvas id="draw" ref={canvasRef} />
      <button
        type="button"
        style={{ position: "absolute", top: 0, right: 0 }}
        onClick={onClickHandler}
      >
        next
      </button>
    </div>
  );
};
