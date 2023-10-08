import { Dispatch, Fragment } from 'react';
import { Menu, Transition } from '@headlessui/react';

function classNames(...classes: any) {
  return classes.filter(Boolean).join(' ');
}

interface CustomDropdownProps<T> {
  dropdownOptions: T;
  selectedOption: T;
  setSelectedOption: Dispatch<T>;
}

export const CustomDropdown: React.FC<CustomDropdownProps<any>> = ({
  dropdownOptions,
  selectedOption,
  setSelectedOption,
}) => {
  const dropdownOptionsValues = Object.values(dropdownOptions);

  return (
    <Menu as="div" className="relative inline-block text-left w-full">
      <div>
        <Menu.Button className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
          {selectedOption}
          <i className="bi bi-chevron-down" />
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-1">
            {dropdownOptionsValues.length > 0 &&
              dropdownOptionsValues.map((option: any) => {
                return (
                  <Menu.Item>
                    {({ active }) => (
                      <button
                        onClick={() => setSelectedOption(option)}
                        className={classNames(
                          active
                            ? 'bg-gray-100 text-gray-900'
                            : 'text-gray-700',
                          'block px-4 py-2 text-sm'
                        )}
                      >
                        {option}
                      </button>
                    )}
                  </Menu.Item>
                );
              })}
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
};
