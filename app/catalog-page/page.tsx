import { useState, useEffect } from "react";
import { FilterBar } from "../../components";
import Link from "next/link";

export default function Page() {
  return (
    <div>
      <h1>Каталог товаров</h1>
      <FilterBar />
      <Link href={"/shop/peta"}>ПЕРЕЙТИ</Link>
    </div>
  );
}
