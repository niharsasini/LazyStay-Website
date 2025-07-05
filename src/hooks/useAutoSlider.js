import { useEffect, useState } from "react";

const useAutoSlider = (length, delay = 3000) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % length);
    }, delay);

    return () => clearInterval(interval);
  }, [length, delay]);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % length);

  const prevSlide = () =>
    setCurrentSlide((prev) => (prev === 0 ? length - 1 : prev - 1));

  const goToSlide = (index) => setCurrentSlide(index);

  return { currentSlide, nextSlide, prevSlide, goToSlide };
};

export default useAutoSlider;
