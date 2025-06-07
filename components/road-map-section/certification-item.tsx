"use client";
import * as React from "react";

interface CertificationItem {
	text: string;
	fontSize?: string;
}

interface CertificationRowProps {
	label: string;
	items: CertificationItem[];
}

export const CertificationRow: React.FC<CertificationRowProps> = ({
	label,
	items,
}) => {
	return (
		<div className="flex flex-col sm:flex-row gap-2 sm:gap-4 items-start w-full">
			<div className="text-sm font-extrabold text-[#083D77] w-full sm:w-20 flex-shrink-0 mb-2 sm:mb-0">{label}</div>
			<div className="flex flex-1 justify-center items-center text-xs text-center text-blue-900 min-w-0 w-full">
				<div className="flex flex-col justify-center w-full">
					<div className="grid grid-cols-2 sm:flex sm:flex-wrap gap-2 items-start w-full">
						{items.map((item, index) => (
							<div
								key={index}
								className="overflow-hidden px-1 pt-1 pb-2 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-md border-2 border-gray-300 shadow-[3px_3px_0px_rgba(34,34,34,1)] hover:shadow-[5px_5px_0px_rgba(34,34,34,1)] transition-all duration-300 hover:scale-105 sm:flex-1 sm:min-w-0"
							>
								<div className="overflow-hidden gap-1.5 self-stretch px-2 sm:px-3.5 py-1.5 w-full bg-white rounded-md border border-gray-300 shadow-[1px_1px_0px_rgba(34,34,34,1)] font-semibold">
									{item.fontSize ? (
										<span style={{ fontSize: item.fontSize }}>{item.text}</span>
									) : (
										item.text
									)}
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
		</div>
	);
};