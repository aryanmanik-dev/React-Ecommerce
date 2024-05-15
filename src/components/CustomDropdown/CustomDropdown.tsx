import { ReactEventHandler, useState } from "react";
interface CustomDropdownProps {
    buttonText: string;
    items: string[];
    onSelect?:ReactEventHandler<HTMLButtonElement> | undefined | any
  }
const CustomDropdown: React.FC<CustomDropdownProps> = ({ buttonText, items,onSelect }) => {
    const [isOpen, setIsOpen] = useState(false);

  return (
      <div className="relative inline-block text-left">
        <div>
          <button
            type="button"
            className="inline-flex justify-center w-56 rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2  focus:ring-offset-2 focus:ring-offset-gray-100"
            onClick={() => setIsOpen(!isOpen)}

            onSelect={onSelect}
          >
            {buttonText}
            <svg
              className="-mr-1 ml-2 h-5 w-5"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M10 5.586L4.707 10.88a1 1 0 0 0 1.414 1.414L10 8.414l4.879 4.88a1 1 0 1 0 1.414-1.414L11.414 5.586a1 1 0 0 0-1.414 0z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>

        {isOpen && (
          <div
            className="origin-top-right absolute  mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none z-10"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="options-menu"
          >
            <div className="py-1" role="none">
              {/* Dropdown items */}
              {items.map((item, index) => (
                <a
                  key={index}
                  href="#"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                  role="menuitem"
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
  )
}

export default CustomDropdown
