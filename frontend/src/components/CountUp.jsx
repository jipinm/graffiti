import { useEffect, useState } from "react";

// Lightweight count-up animation hook — used for hero stats
export function useCountUp(target, durationMs = 1500, deps = []) {
  const [value, setValue] = useState(0);
  useEffect(() => {
    let raf;
    const start = performance.now();
    const animate = (now) => {
      const t = Math.min((now - start) / durationMs, 1);
      const eased = 1 - Math.pow(1 - t, 3); // easeOutCubic
      setValue(target * eased);
      if (t < 1) raf = requestAnimationFrame(animate);
      else setValue(target);
    };
    raf = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(raf);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);
  return value;
}

export default function CountUp({ value, decimals = 0, prefix = "", suffix = "" }) {
  const v = useCountUp(value, 1400, [value]);
  const num = decimals > 0 ? v.toFixed(decimals) : Math.round(v).toLocaleString("en-IN");
  return <span className="recell-price-counter">{prefix}{num}{suffix}</span>;
}
