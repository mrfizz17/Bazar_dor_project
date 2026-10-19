import { IProducts } from "@/Types/types";
import Link from "next/link";
import React from "react";

const ProductCard = ({ item }: { item: IProducts }) => {
  const unit =
    item.unit === "kg"
      ? "কেজি"
      : item.unit === "litre"
        ? "লিটার"
        : item.unit === "dozen"
          ? "ডজন"
          : "পিস";

  return (
    <Link href={`/details/${item.id}`}>
      <div className="cursor-pointer rounded-2xl border border-white transition-colors duration-300 ease-in-out hover:border-green-600  bg-white p-5 shadow-sm">
        <div className="flex items-center gap-4">
          <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-gray-100">
            <span className="text-2xl">{item.image}</span>
          </div>

          <div>
            <h2 className="text-xl font-bold text-gray-900">{item.nameBn}</h2>
            <p className="text-sm text-gray-500">প্রতি {unit}</p>
          </div>
        </div>

        <div className="mt-6 flex items-end justify-between">
          <div>
            <p className="text-xs text-gray-500">আজকের দাম</p>
            <div className="flex items-baseline gap-1 mt-0.5">
              <span className="text-2xl font-bold text-gray-900">
                {item.today.toLocaleString("bn-BD")}
              </span>
              <span className="text-sm font-medium text-gray-700">টাকা</span>
            </div>
          </div>

          {item.change.dir === "up" ? (
            <div className="flex items-center gap-1 rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-red-600">
              <span>▲</span>
              <span>{Math.abs(item.change.pct).toLocaleString("bn-BD")}%</span>
            </div>
          ) : (
            <div className="flex items-center gap-1 rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-green-600">
              <span>▼</span>
              <span>{Math.abs(item.change.pct).toLocaleString("bn-BD")}%</span>
            </div>
          )}
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
