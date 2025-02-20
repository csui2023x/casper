import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
} from "@heroui/react";
import { DropdownComponentProps } from "../interface";

export const DropdownComponent: React.FC<DropdownComponentProps> = ({
  value,
  onChange,
  isOpen,
  onOpenChange,
  items,
  disabled = false,
  className = "",
}) => {
  return (
    <Dropdown
      className={`bg-accents-pink-1  ${className}`}
      onOpenChange={onOpenChange}
      isDisabled={disabled}
    >
      <DropdownTrigger>
        <button
          className={`md:text-base lg:text-lg rounded-[8px] px-2 py-1.5 outline-none text-sm w-full bg-accents-yellow-5 border-2 border-accents-pink-1 text-accents-pink-1`}
          disabled={disabled}
          aria-expanded="false"
        >
          <div className="text-left w-full flex flex-row items-center justify-between">
            <span className="font-extrabold lg:text-base md:text-xs text-[10px]">
              {value}
            </span>
            <div
              className={`transform transition-transform duration-300 ${isOpen ? "rotate-180" : "rotate-0"}`}
            >
              <svg
                width="24"
                height="25"
                viewBox="0 0 24 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M15.8751 9.50002L11.9951 13.38L8.1151 9.50002C7.7251 9.11002 7.0951 9.11002 6.7051 9.50002C6.3151 9.89002 6.3151 10.52 6.7051 10.91L11.2951 15.5C11.6851 15.89 12.3151 15.89 12.7051 15.5L17.2951 10.91C17.6851 10.52 17.6851 9.89002 17.2951 9.50002C16.9051 9.12002 16.2651 9.11002 15.8751 9.50002Z"
                  fill="#73476A"
                />
              </svg>
            </div>
          </div>
        </button>
      </DropdownTrigger>
      <DropdownMenu
        disallowEmptySelection
        aria-label="Single selection example"
        selectedKeys={new Set([value])}
        selectionMode="single"
        variant="flat"
        className="bg-accents-pink-1 font-extrabold text-accents-yellow-1 hover:bg-accents"
        onSelectionChange={(keys) =>
          onChange(Array.from(keys as Set<string>)[0])
        }
      >
        {items.map((item) => (
          <DropdownItem key={item}>{item}</DropdownItem>
        ))}
      </DropdownMenu>
    </Dropdown>
  );
};
