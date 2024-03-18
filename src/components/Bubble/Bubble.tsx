
import React, { useEffect } from "react";
import { motion } from "framer-motion";


export interface BubbleType {
  id: number;
  x: number;
  y: number;
  size: number;
  speed: number;
  emojiImg: string;
}

export interface Props {
    bubbles: BubbleType[];
    setBubbles: React.Dispatch<React.SetStateAction<BubbleType[]>>

}

const Bubble: React.FC<Props> = ({bubbles, setBubbles}) => {
  

  const onAnimationComplete = () => {
    // Realiza alguna acción una vez que la animación haya completado, como eliminar el div
    
      // Si la burbuja ha salido de la pantalla, no la agregamos al nuevo array

      //setBubbles( bubbles.filter((b) => b.id !== id))
    
  };


  // Función para actualizar la posición de las burbujas
  const updateBubbles = () => {
    setBubbles((prevBubbles) =>
      prevBubbles.reduce((acc: BubbleType[], bubble) => {
        // Calcular la nueva posición de la burbuja
        const newY = bubble.y - bubble.speed;
        
        // Verificar si la burbuja ha alcanzado el límite superior del height
        if (newY < -bubble.size) {
          // Si la burbuja ha salido de la pantalla, no la agregamos al nuevo array

          return acc.filter((b) => b.id !== bubble.id);
        }
  
        // Si la burbuja aún está en la pantalla, agregarla al nuevo array con su posición actualizada
        acc.push({
          ...bubble,
          y: newY,
        });
  
        return acc;
      }, [])
      // Filtrar las burbujas nulas (si las hubiera)
      .filter((bubble): bubble is BubbleType => bubble !== null)
    );
  };

  // Actualizar la posición de las burbujas en cada fotograma
  useEffect(() => {
    const interval = setInterval(updateBubbles, 30); // Actualizar cada 60ms
    return () => clearInterval(interval); // Limpiar el intervalo cuando el componente se desmonta
  }, []);

  return (
    <div style={{ position: "absolute", width: "100%", height: "100%", overflow: "hidden",zIndex:-10, }}>
      {bubbles.map((bubble) => (
        <motion.div
          key={bubble.id}
          style={{
            position: "absolute",
            top: bubble.y,
            left: bubble.x,
            width: bubble.size,
            height: bubble.size,
            zIndex:100,
            borderRadius: "50%",
            
            fontSize: bubble.size
          }}
          animate={{ y: 0 }} // Animar hacia arriba hasta la parte más alta de la pantalla
          transition={{ duration: 5, ease: "easeInOut" }} // Duración de la animación y función de transición
          onAnimationComplete={() => onAnimationComplete()} // Manejar el evento onAnimationComplete
          >
            {bubble.emojiImg}
        </motion.div>
      ))}
    </div>
  );
};

export default Bubble;
 

/*
animate={{ y: 0 }} // Animar hacia arriba hasta la parte más alta de la pantalla
      transition={{ duration: 2, ease: "easeInOut" }} // Duración de la animación y función de transición
      onAnimationComplete={onAnimationComplete} // Manejar el evento onAnimationComplete
*/


