import React, { useState, useRef, useEffect, useMemo } from "react";
import { createPortal } from "react-dom";
import { HiOutlineXCircle } from "react-icons/hi2";
import { LuSearch, LuChevronDown } from "react-icons/lu";
import { IoCloseCircleSharp } from "react-icons/io5";
import type { SelectProps } from "./types";

export const Select = <T extends string | string[]>({
  id,
  name,
  options,
  value,
  onChange,
  multiple = false,
  withSearch = true,
  searchwithfilter = false,
  usePortal = true,
  outlined = false,
  placeholder = "",
  renderOption,
  label,
}: SelectProps<T>) => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [dropdownCoords, setDropdownCoords] = useState({
    top: 0,
    left: 0,
    width: 0,
  });

  const containerRef = useRef<HTMLDivElement>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const formValue = useMemo(() => {
    if (Array.isArray(value)) return value.join(",");
    return value || "";
  }, [value]);

  const updateDropdownPosition = () => {
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      setDropdownCoords({
        top: rect.bottom + window.scrollY + 4,
        left: rect.left + window.scrollX,
        width: rect.width,
      });
    }
  };

  useEffect(() => {
    if (isOpen) {
      updateDropdownPosition();
      window.addEventListener("scroll", updateDropdownPosition, true);
      window.addEventListener("resize", updateDropdownPosition);
    }
    return () => {
      window.removeEventListener("scroll", updateDropdownPosition, true);
      window.removeEventListener("resize", updateDropdownPosition);
    };
  }, [isOpen]);

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      const target = event.target as Node;
      if (
        !containerRef.current?.contains(target) &&
        !dropdownRef.current?.contains(target)
      ) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleOutsideClick);
    return () => document.removeEventListener("mousedown", handleOutsideClick);
  }, []);

  const handleToggleOption = (val: string) => {
    if (multiple) {
      const currentValues = Array.isArray(value) ? (value as string[]) : [];
      const updatedValues = currentValues.includes(val)
        ? currentValues.filter((v) => v !== val)
        : [...currentValues, val];
      onChange(updatedValues as T);
    } else {
      onChange(val as T);
      setIsOpen(false);
    }
  };

  const isOptionSelected = (val: string) =>
    multiple ? Array.isArray(value) && value.includes(val) : value === val;

  const filteredOptions = useMemo(() => {
    return options.filter((opt) =>
      opt.label.toLowerCase().includes(searchQuery.toLowerCase()),
    );
  }, [options, searchQuery]);

  const highlightText = (text: string, query: string) => {
    if (!query) return text;
    const parts = text.split(new RegExp(`(${query})`, "gi"));
    return (
      <span>
        {parts.map((part, i) =>
          part.toLowerCase() === query.toLowerCase() ? (
            <span key={i} className="bg-teal-500 text-white px-0.5 rounded-sm">
              {part}
            </span>
          ) : (
            part
          ),
        )}
      </span>
    );
  };

  const DropdownMenu = (
    <div
      ref={dropdownRef}
      id={`${id}-dropdown`}
      style={
        usePortal
          ? {
              position: "absolute",
              top: dropdownCoords.top,
              left: dropdownCoords.left,
              width: dropdownCoords.width,
              zIndex: 9999,
            }
          : {}
      }
      className="bg-white border border-slate-200 rounded shadow-md flex flex-col overflow-hidden animate-in fade-in duration-200"
    >
      {withSearch && (
        <div className="p-2.5 border-b border-slate-100 flex items-center gap-2 bg-white sticky top-0">
          <LuSearch className="text-slate-400 ml-1 shrink-0" size={18} />
          <input
            className="w-full bg-transparent text-sm outline-none py-0.5"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            autoFocus
          />
          {searchQuery && (
            <IoCloseCircleSharp
              size={20}
              className="text-slate-400 hover:text-slate-600 cursor-pointer"
              onClick={() => setSearchQuery("")}
            />
          )}
        </div>
      )}

      <div className="max-h-60 overflow-y-auto">
        <div className="max-h-60 overflow-y-auto">
          {(() => {
            const dataSource = searchwithfilter ? filteredOptions : options;

            if (dataSource.length > 0) {
              return dataSource.map((opt) => (
                <div
                  key={opt.value}
                  onClick={() => handleToggleOption(opt.value)}
                  className={`px-4 py-2 text-sm cursor-pointer transition-colors ${
                    isOptionSelected(opt.value)
                      ? "bg-teal-50 text-teal-900 font-medium"
                      : "hover:bg-slate-50 text-slate-700"
                  }`}
                >
                  {renderOption
                    ? renderOption(opt)
                    : highlightText(opt.label, searchQuery)}
                </div>
              ));
            }

            return (
              <div className="p-4 text-center text-slate-400 text-sm italic">
                Data Not Found
              </div>
            );
          })()}
        </div>
      </div>
    </div>
  );

  return (
    <div
      className="flex flex-col md:flex-row items-start gap-4 md:gap-10 w-full p-4 font-sans"
      ref={containerRef}
    >
      <input type="hidden" name={name} value={formValue} />
      {label && (
        <label className="text-sm text-slate-600 font-semibold w-24 mt-2 shrink-0 select-none">
          {label}
        </label>
      )}

      <div className="relative flex-1 w-full">
        <div
          onClick={() => setIsOpen(!isOpen)}
          className={`
            flex items-center justify-between gap-2 px-3 py-2 border rounded transition-all
            ${outlined ? "bg-slate-50 border-slate-300" : "bg-white border-slate-200 shadow-sm"}
            ${isOpen ? "border-teal-500 ring-2 ring-teal-50" : "hover:border-slate-300"}
          `}
        >
          <div className="flex flex-wrap gap-2 items-center flex-1 overflow-hidden">
            {!value || (Array.isArray(value) && value.length === 0) ? (
              <span className="text-slate-400 text-sm">{placeholder}</span>
            ) : multiple && Array.isArray(value) ? (
              options
                .filter((o) => value.includes(o.value))
                .map((opt) => (
                  <div
                    key={opt.value}
                    className="bg-slate-100 border border-slate-200 px-2 py-0.5 rounded-full flex items-center gap-1.5 transition-colors hover:bg-slate-200"
                  >
                    <span className="text-slate-700 text-xs font-medium">
                      {opt.label}
                    </span>
                    <HiOutlineXCircle
                      className="text-slate-400 hover:text-red-500 cursor-pointer"
                      size={18}
                      onClick={(e) => {
                        e.stopPropagation();
                        handleToggleOption(opt.value);
                      }}
                    />
                  </div>
                ))
            ) : (
              <span className="text-sm text-slate-800 font-medium">
                {options.find((o) => o.value === value)?.label}
              </span>
            )}
          </div>
          <LuChevronDown
            className={`text-slate-400 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
            size={18}
          />
        </div>

        {isOpen &&
          (usePortal
            ? createPortal(DropdownMenu, document.body)
            : DropdownMenu)}
      </div>
    </div>
  );
};
