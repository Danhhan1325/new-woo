"use client";
import * as React from "react";
import { SkillItem } from "./skill-item";

interface Skill {
	iconSrc: string;
	text: string;
}

interface LevelCardProps {
	title: string;
	subtitle: string;
	skills: Skill[];
	backgroundColor: string;
}

export const LevelCard: React.FC<LevelCardProps> = ({
	title,
	subtitle,
	skills,
	backgroundColor,
}) => {
	return (
		<div
			className={`overflow-hidden pt-1 pr-1 pb-2 pl-1 ${backgroundColor} rounded-lg border-2 border-gray-300 shadow-[4px_4px_0px_rgba(34,34,34,1)] hover:shadow-[6px_6px_0px_rgba(34,34,34,1)] transition-all duration-300 hover:scale-105 hover:-translate-y-1 group w-full`}
		>
			<div className="overflow-hidden gap-1.5 self-stretch px-3 sm:px-4 py-2 sm:py-3 w-full text-xs font-extrabold leading-4 text-center bg-white rounded-md border-2 border-gray-300 shadow-[2px_2px_0px_rgba(34,34,34,1)] text-[#083D77] group-hover:bg-gradient-to-r group-hover:from-[#083D77] group-hover:to-blue-600 group-hover:text-white transition-all duration-300">
				<div className="font-bold text-xs sm:text-sm">{title}</div>
				<div className="text-xs opacity-80 leading-tight">{subtitle}</div>
			</div>
			<div className="mt-2 space-y-1">
				{skills.map((skill, index) => (
					<SkillItem key={index} iconSrc={skill.iconSrc} text={skill.text} />
				))}
			</div>
		</div>
	);
};