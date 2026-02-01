"use client";

function SearchIcon() {
  return (
    <svg
      className={"h-6 w-6 stroke-[1.8]"}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="rgba(176,138,61,1)"
    >
      <path d="M18.031 16.6168L22.3137 20.8995L20.8995 22.3137L16.6168 18.031C15.0769 19.263 13.124 20 11 20C6.032 20 2 15.968 2 11C2 6.032 6.032 2 11 2C15.968 2 20 6.032 20 11C20 13.124 19.263 15.0769 18.031 16.6168ZM16.0247 15.8748C17.2475 14.6146 18 12.8956 18 11C18 7.1325 14.8675 4 11 4C7.1325 4 4 7.1325 4 11C4 14.8675 7.1325 18 11 18C12.8956 18 14.6146 17.2475 15.8748 16.0247L16.0247 15.8748Z"></path>
    </svg>
  );
}

type Props = {
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
};

export default function SearchBar({
  value,
  onChange,
  placeholder = "Busca",
}: Props) {
  return (
    <div className="relative w-[320px]">
      <input
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="
              w-full rounded-full border border-[#e7dfd3] bg-white/70
              py-2.5 pl-5 pr-11 text-[16px] text-[#2b241d]
              outline-none transition
              placeholder:text-[#8a837b]
              focus:border-[#b08a3d] focus:ring-2 focus:ring-[#b08a3d]/20
            "
      />
      <span className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2">
        <SearchIcon />
      </span>
    </div>
  );
}
