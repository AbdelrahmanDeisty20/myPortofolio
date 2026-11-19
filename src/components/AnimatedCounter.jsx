import React, { useEffect, useState, useRef } from 'react';

export const AnimatedCounter = ({ value, duration = 1600, replayTrigger = 0 }) => {
  const [displayValue, setDisplayValue] = useState(value);
  const elementRef = useRef(null);
  const animFrameId = useRef(null);

  // Parse any value string: e.g. "+8", "<50ms", "100%", "99/100"
  const parseConfig = (valStr) => {
    const str = String(valStr).trim();
    if (str.includes('/')) {
      const parts = str.split('/');
      const num = parseInt(parts[0].replace(/[^0-9]/g, ''), 10) || 0;
      return {
        target: num,
        prefix: '',
        suffix: `/${parts[1]}`,
        useComma: false,
      };
    }

    const hasLessThan = str.includes('<');
    const hasPlus = str.includes('+');
    const hasPercent = str.includes('%');
    const hasMs = str.toLowerCase().includes('ms');
    const cleanNum = parseInt(str.replace(/[^0-9]/g, ''), 10) || 0;
    const useComma = str.includes(',') || cleanNum >= 1000;

    let prefix = '';
    if (hasLessThan) prefix = '<';
    else if (hasPlus) prefix = '+';

    let suffix = '';
    if (hasMs) suffix = 'ms';
    else if (hasPercent) suffix = '%';

    return {
      target: cleanNum,
      prefix,
      suffix,
      useComma,
    };
  };

  const runAnimation = () => {
    if (animFrameId.current) {
      cancelAnimationFrame(animFrameId.current);
    }

    const config = parseConfig(value);
    const startTimestamp = performance.now();
    const endVal = config.target;

    // Quartic ease-out for ultra smooth deceleration
    const easeOutQuart = (x) => 1 - Math.pow(1 - x, 4);

    const step = (now) => {
      const elapsed = now - startTimestamp;
      const progress = Math.min(elapsed / duration, 1);
      const easedProgress = easeOutQuart(progress);
      const current = Math.round(endVal * easedProgress);

      const formattedNum = config.useComma
        ? current.toLocaleString('en-US')
        : current.toString();

      setDisplayValue(`${config.prefix}${formattedNum}${config.suffix}`);

      if (progress < 1) {
        animFrameId.current = requestAnimationFrame(step);
      } else {
        setDisplayValue(value);
      }
    };

    animFrameId.current = requestAnimationFrame(step);
  };

  useEffect(() => {
    let hasAnimated = false;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            hasAnimated = true;
            runAnimation();
          }
        });
      },
      { threshold: 0.15 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      observer.disconnect();
      if (animFrameId.current) {
        cancelAnimationFrame(animFrameId.current);
      }
    };
  }, [value]);

  // Replay animation if replayTrigger changes (e.g. on card hover)
  useEffect(() => {
    if (replayTrigger > 0) {
      runAnimation();
    }
  }, [replayTrigger]);

  return (
    <span ref={elementRef} className="tabular-nums inline-block font-mono font-bold select-none" dir="ltr">
      {displayValue}
    </span>
  );
};
