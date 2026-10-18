import React from "react";

const SummaryCard = ({
  label,
  price,
  description,
  color,
}: {
  label: string;
  price: number;
  description: string;
  color: string;
}) => {
  return (

      <div className="flex min-h-[92px] flex-col justify-center rounded-2xl border border-[#dce5dd] px-5 py-3">
        <span className="text-sm text-[#68766d]">{label}</span>

        <strong className={`text-[30px] leading-relaxed ${color}`}>
          {(Math.round(Number(price))).toLocaleString("bn-BD")}
          <small className="text-[15px] font-normal"> টাকা</small>
        </strong>

        <p className="text-xs text-[#64736a]">{description}</p>
      </div>

  );
};

export default SummaryCard;
