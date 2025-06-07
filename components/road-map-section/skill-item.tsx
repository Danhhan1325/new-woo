"use client";
import * as React from "react";

interface SkillItemProps {
	iconSrc: string;
	text: string;
}

export const SkillItem: React.FC<SkillItemProps> = ({ iconSrc, text }) => {
	return (
		<div className="flex gap-1.5 sm:gap-2 items-start w-full p-1.5 sm:p-2 bg-white/70 rounded-md hover:bg-white transition-all duration-300 hover:scale-105 group">
			<img
				src={iconSrc}
				className="shrink-0 w-3 sm:w-4 h-3 sm:h-4 mt-0.5 group-hover:scale-110 transition-transform duration-300"
				alt=""
			/>
			<div className="flex-1 text-xs leading-relaxed text-gray-700 group-hover:text-[#083D77] transition-colors duration-300 font-medium">
				{text}
			</div>
		</div>
	);
};