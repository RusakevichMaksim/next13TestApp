"use client" // prettier-ignore

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Select from "react-select";

interface Option {
  value: string;
  label: string;
}

export const SlugSelector = () => {
  const brands: Option[] = [
    { value: "posts", label: "posts" },
    { value: "comments", label: "comments" },
    { value: "albums", label: "albums" },
    { value: "photos", label: "photos" },
    { value: "todos", label: "todos" },
    { value: "users", label: "users" },
  ];

  const countries: Option[] = [
    { value: "1", label: "1" },
    { value: "2", label: "2" },
    { value: "3", label: "3" },
    { value: "4", label: "4" },
    { value: "5", label: "5" },
  ];

  const [selectedBrand, setSelectedBrand] = useState<Option | null>(null);
  const [selectedCountry, setSelectedCountry] = useState<Option | null>(null);

  const handleBrandChange = (selectedBrand: any) => {
    setSelectedBrand(selectedBrand);
  };

  const handleCountryChange = (selectedCountry: any) => {
    setSelectedCountry(selectedCountry);
  };

  const generateSlug = (): string => {
    const brand = selectedBrand ? selectedBrand.value.toLowerCase() : "";
    const country = selectedCountry ? selectedCountry.value.toLowerCase() : "";

    const slugParts = [brand, country].filter((part) => part !== "");
    const slug = slugParts.join("-");

    return slug;
  };
  // количество параметров неограниченно (все зависит от апи)
  return (
    <div>
      <Select
        options={brands}
        value={selectedBrand}
        onChange={handleBrandChange}
        placeholder="Select brand"
      />
      {selectedBrand && (
        <Select
          options={countries}
          value={selectedCountry}
          onChange={handleCountryChange}
          placeholder="Select country"
        />
      )}

      {selectedBrand && selectedCountry && (
        <div
          style={{
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginTop: "10px",
            backgroundColor: "gray",
            cursor: "pointer",
          }}
        >
          <Link href={`/shop/${generateSlug()}`}>Link to Slug</Link>
        </div>
      )}
    </div>
  );
};
