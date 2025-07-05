import { useState } from "react";

const useMapModal = () => {
  const [showMap, setShowMap] = useState(false);

  const openMap = () => setShowMap(true);
  const closeMap = () => setShowMap(false);

  return { showMap, openMap, closeMap };
};

export default useMapModal;
