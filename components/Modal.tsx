import { useEffect, useRef } from "react";

type ModalProps = {
  items: any[];
  onClose: () => void;
  buttonRef: React.RefObject<HTMLDivElement>;
};

export default function Modal({ items, onClose, buttonRef }: ModalProps) {
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      const target = event.target as Node;

      if (
        modalRef.current &&
        !modalRef.current.contains(target) &&
        !buttonRef.current?.contains(target)
      ) {
        onClose();
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [onClose, buttonRef]);

  return (
    <div
      ref={modalRef}
      className="   
      block 
        xl:absolute
        mb-3
        z-20
        bg-white
        border
        shadow-xl
        rounded-lg
        p-6
        w-max
        xl:-top-5
        xl:-left-5
        "
    >
      <div className=" xl:h-[70px]"></div>

      <ul className="    
      list-disc 
      pl-5 
      space-y-1 
      marker:text-amber-500 
      text-xl 
      grid 
      xl:grid-cols-2
      text-left
      gap-x-10
      ">
        {items.map((item: any) => (
          <li key={item.id}>{item.text}</li>
        ))}
      </ul>
    </div>
  );
}
