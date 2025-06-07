"use client";
import * as React from "react";

interface Badge {
	src: string;
	aspectRatio: string;
	width: string;
}

interface AchievementBadgesProps {
	badges: Badge[];
}

export const AchievementBadges: React.FC<AchievementBadgesProps> = ({
	badges,
}) => {
	return (
		<div className="flex flex-col justify-center w-full">
			<div className="flex flex-wrap gap-4 justify-center items-center w-full">
				{badges.map((badge, index) => (
					<div
						key={index}
						className="flex flex-col items-center p-4 bg-gradient-to-br from-gray-50 to-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 group border border-gray-200"
						style={{ animationDelay: `${index * 0.1}s` }}
					>
						<img
							src={badge.src}
							className={`object-contain ${badge.aspectRatio} ${badge.width} group-hover:animate-pulse transition-all duration-300`}
							alt={`Achievement badge ${index + 1}`}
						/>
						<div className="mt-2 text-xs font-semibold text-[#083D77] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
							Cấp độ {index + 1}
						</div>
					</div>
				))}
			</div>
		</div>
	);
};