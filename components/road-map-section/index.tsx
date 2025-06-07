"use client";
import * as React from "react";
import { LevelCard } from "./level-card";
import { CertificationRow } from "./certification-item";
import { AchievementBadges } from "./achievement-badges";

export const RoadmapSection: React.FC = () => {
	const levelData = [
		{
			title: "CẤP ĐỘ 1",
			subtitle: "(English Explorer)",
			backgroundColor: "bg-amber-100",
			skills: [
				{
					iconSrc:
						"https://cdn.builder.io/api/v1/image/assets/31c7b1c5a83a4753853375a2754b402c/674959b8217f0b4ba591d160cdd2c928ab1a314b?placeholderIfAbsent=true",
					text: "Hiểu và làm theo lệnh đơn giản không cần dịch",
				},
				{
					iconSrc:
						"https://cdn.builder.io/api/v1/image/assets/31c7b1c5a83a4753853375a2754b402c/b454e0e35a7af75e9da84b714ed1744817100729?placeholderIfAbsent=true",
					text: "Nói được câu đơn có ngữ điệu khi có hướng dẫn",
				},
				{
					iconSrc:
						"https://cdn.builder.io/api/v1/image/assets/31c7b1c5a83a4753853375a2754b402c/800bf997e8a477dc609795e62c4021883642b8cb?placeholderIfAbsent=true",
					text: "Lặp lại đúng mẫu câu và phản xạ khi được hỏi",
				},
				{
					iconSrc:
						"https://cdn.builder.io/api/v1/image/assets/31c7b1c5a83a4753853375a2754b402c/4302d94cd775fa7d6866578688bf726cf2336206?placeholderIfAbsent=true",
					text: "Giao tiếp 30–40% tiếng Anh trong lớp",
				},
				{
					iconSrc:
						"https://cdn.builder.io/api/v1/image/assets/31c7b1c5a83a4753853375a2754b402c/4e3464f97a2e59f15806c54ef21acfb9ea72bc6c?placeholderIfAbsent=true",
					text: "Tự tin giới thiệu bản thân bằng tiếng Anh",
				},
			],
		},
		{
			title: "CẤP ĐỘ 2",
			subtitle: "(Everyday Communicator)",
			backgroundColor: "bg-amber-200",
			skills: [
				{
					iconSrc:
						"https://cdn.builder.io/api/v1/image/assets/31c7b1c5a83a4753853375a2754b402c/27067db0a81de8db63cdf26be8456cbc5d355612?placeholderIfAbsent=true",
					text: "Giao tiếp 100% tiếng Anh trong lớp",
				},
				{
					iconSrc:
						"https://cdn.builder.io/api/v1/image/assets/31c7b1c5a83a4753853375a2754b402c/1f2600b948923e7c90157d6119cf0ac51696bd08?placeholderIfAbsent=true",
					text: "Nói đoạn 3–5 câu theo chủ đề quen thuộc",
				},
				{
					iconSrc:
						"https://cdn.builder.io/api/v1/image/assets/31c7b1c5a83a4753853375a2754b402c/33837eeb0c01799338499c0a87d1eb9ede92a02b?placeholderIfAbsent=true",
					text: "Diễn đạt cảm xúc và lý do đơn giản",
				},
				{
					iconSrc:
						"https://cdn.builder.io/api/v1/image/assets/31c7b1c5a83a4753853375a2754b402c/f1dd410ba561c45e6c1c06244cd3f98931b5f681?placeholderIfAbsent=true",
					text: "Hỏi – đáp tự nhiên, phản hồi nhanh",
				},
				{
					iconSrc:
						"https://cdn.builder.io/api/v1/image/assets/31c7b1c5a83a4753853375a2754b402c/ca501de2c0aaf3780f4cdaa7b9d13704cfe9362e?placeholderIfAbsent=true",
					text: "Bắt đầu mô tả tranh và kể chuyện ngắn",
				},
			],
		},
		{
			title: "CẤP ĐỘ 3",
			subtitle: "(Confident Speaker)",
			backgroundColor: "bg-amber-300",
			skills: [
				{
					iconSrc:
						"https://cdn.builder.io/api/v1/image/assets/31c7b1c5a83a4753853375a2754b402c/8a589a89e4808f5180cdec372a75dbba6d850198?placeholderIfAbsent=true",
					text: "Nói đoạn 6–8 câu có dẫn dắt – ví dụ – lý do",
				},
				{
					iconSrc:
						"https://cdn.builder.io/api/v1/image/assets/31c7b1c5a83a4753853375a2754b402c/76815c865f75a4cdc28d9c6207116248abf4b493?placeholderIfAbsent=true",
					text: "Giao tiếp linh hoạt trong tình huống đời thực",
				},
				{
					iconSrc:
						"https://cdn.builder.io/api/v1/image/assets/31c7b1c5a83a4753853375a2754b402c/57bc17d1139c3cca9dbc7c3c4e0ca162ebf3c5d8?placeholderIfAbsent=true",
					text: "Kể chuyện đầy đủ mở – thân – kết",
				},
				{
					iconSrc:
						"https://cdn.builder.io/api/v1/image/assets/31c7b1c5a83a4753853375a2754b402c/e5e91761ea6b28bfe77bd0ffa573b476431ca1b5?placeholderIfAbsent=true",
					text: "Mô tả tranh chi tiết, có nhận xét – so sánh",
				},
				{
					iconSrc:
						"https://cdn.builder.io/api/v1/image/assets/31c7b1c5a83a4753853375a2754b402c/dc91b180516717ed973f8105f752229e9b5bf623?placeholderIfAbsent=true",
					text: "Diễn đạt quan điểm cá nhân rõ ràng",
				},
			],
		},
		{
			title: "CẤP ĐỘ 4",
			subtitle: "(Academic Communicator)",
			backgroundColor: "bg-yellow-300",
			skills: [
				{
					iconSrc:
						"https://cdn.builder.io/api/v1/image/assets/31c7b1c5a83a4753853375a2754b402c/924a98ac0a94d612a471a0433f192c6df415fdda?placeholderIfAbsent=true",
					text: "Thuyết trình cá nhân 2–3 phút theo cấu trúc",
				},
				{
					iconSrc:
						"https://cdn.builder.io/api/v1/image/assets/31c7b1c5a83a4753853375a2754b402c/246da3b41049f168cfac5f9ba4d70a27f9fb2826?placeholderIfAbsent=true",
					text: "Đưa quan điểm – phản biện nhẹ – mở rộng ý",
				},
				{
					iconSrc:
						"https://cdn.builder.io/api/v1/image/assets/31c7b1c5a83a4753853375a2754b402c/69d07c2a7346034e518f31c162e86a053843dd0f?placeholderIfAbsent=true",
					text: "Tư duy trình bày mạch lạc, logic",
				},
				{
					iconSrc:
						"https://cdn.builder.io/api/v1/image/assets/31c7b1c5a83a4753853375a2754b402c/cd46fe32fee7a7401169cff3bfd64e5f17ad1d60?placeholderIfAbsent=true",
					text: "Sử dụng từ nối – ví dụ – so sánh linh hoạt",
				},
				{
					iconSrc:
						"https://cdn.builder.io/api/v1/image/assets/31c7b1c5a83a4753853375a2754b402c/41505fe1d25e807866fc0e8f2dbc18ade8841570?placeholderIfAbsent=true",
					text: "Giao tiếp học thuật cơ bản trong lớp",
				},
			],
		},
		{
			title: "CẤP ĐỘ 5",
			subtitle: "(Confident Debater)",
			backgroundColor: "bg-yellow-400",
			skills: [
				{
					iconSrc:
						"https://cdn.builder.io/api/v1/image/assets/31c7b1c5a83a4753853375a2754b402c/624b1b2764bda20d5222e17d64db6d4d775d33bc?placeholderIfAbsent=true",
					text: "Giao tiếp trôi chảy, không cần dịch trong đầu",
				},
				{
					iconSrc:
						"https://cdn.builder.io/api/v1/image/assets/31c7b1c5a83a4753853375a2754b402c/f2c197c2b66fb0c23e3d1decee7000a37c104ee3?placeholderIfAbsent=true",
					text: "Trình bày rõ ràng với dẫn chứng và cảm xúc",
				},
				{
					iconSrc:
						"https://cdn.builder.io/api/v1/image/assets/31c7b1c5a83a4753853375a2754b402c/784c9d6c19380ccb026019d93ea0ca4d63c0c801?placeholderIfAbsent=true",
					text: "Phản biện sâu, dùng idioms – phrasal verbs",
				},
				{
					iconSrc:
						"https://cdn.builder.io/api/v1/image/assets/31c7b1c5a83a4753853375a2754b402c/8602b9203ea5266189adc405f1275c44bafc2c0d?placeholderIfAbsent=true",
					text: "Làm chủ các format thuyết trình & tranh luận",
				},
				{
					iconSrc:
						"https://cdn.builder.io/api/v1/image/assets/31c7b1c5a83a4753853375a2754b402c/625a2a5976803e5cd22ed6d1b7254edaf5ef0c1f?placeholderIfAbsent=true",
					text: "Sẵn sàng thi PET hoặc IELTS Speaking 5.5–6.5",
				},
			],
		},
	];

	const cambridgeData = {
		label: "Cambridge",
		items: [
			{ text: "STARTERS", fontSize: "11px" },
			{ text: "MOVERS" },
			{ text: "FLYERS/KET" },
			{ text: "PET" },
			{ text: "FCE" },
		],
	};

	const cefrData = {
		label: "CEFR",
		items: [
			{ text: "🟤 Level A0" },
			{ text: "🟢 Level A1" },
			{ text: "🔵 Level A2" },
			{ text: "🟡 Level B1" },
			{ text: "🔴 Level B2" },
		],
	};

	const durationData = {
		label: "Thời lượng",
		items: [
			{ text: "60 buổi" },
			{ text: "60 buổi" },
			{ text: "120 buổi" },
			{ text: "120 buổi" },
			{ text: "180 buổi" },
		],
	};

	const achievementBadges = [
		{
			src: "https://cdn.builder.io/api/v1/image/assets/31c7b1c5a83a4753853375a2754b402c/625af75d4bb3d1bd91db9dc3178aba0afba8958b?placeholderIfAbsent=true",
			aspectRatio: "aspect-[0.73]",
			width: "w-[57px]",
		},
		{
			src: "https://cdn.builder.io/api/v1/image/assets/31c7b1c5a83a4753853375a2754b402c/b85b725901e0cd78d5659f22647bc4740b4b5829?placeholderIfAbsent=true",
			aspectRatio: "aspect-[0.73]",
			width: "w-[57px]",
		},
		{
			src: "https://cdn.builder.io/api/v1/image/assets/31c7b1c5a83a4753853375a2754b402c/fcdcc224056a76314ed3c045f2859f9fa5e2b283?placeholderIfAbsent=true",
			aspectRatio: "aspect-[0.82]",
			width: "w-16",
		},
		{
			src: "https://cdn.builder.io/api/v1/image/assets/31c7b1c5a83a4753853375a2754b402c/c9ff47b0e5d720847da5730af6e0290621303654?placeholderIfAbsent=true",
			aspectRatio: "aspect-[0.85]",
			width: "w-[66px]",
		},
		{
			src: "https://cdn.builder.io/api/v1/image/assets/31c7b1c5a83a4753853375a2754b402c/ab4be5ccc16276ad4f5fb05f5a742e71b956574d?placeholderIfAbsent=true",
			aspectRatio: "aspect-square",
			width: "w-[78px]",
		},
	];

	return (
		<section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-gray-50 via-blue-50 to-yellow-50 relative overflow-hidden">
			{/* Background decoration */}
			<div className="absolute inset-0 bg-gradient-soft"></div>
			<div className="absolute top-10 sm:top-20 left-4 sm:left-20 w-16 sm:w-32 h-16 sm:h-32 bg-[#FFEA00] rounded-full opacity-10 animate-float"></div>
			<div className="absolute bottom-10 sm:bottom-20 right-4 sm:right-20 w-20 sm:w-40 h-20 sm:h-40 bg-[#083D77] rounded-full opacity-5 animate-float delay-300"></div>

			{/* Background image */}
			<img
				src="https://cdn.builder.io/api/v1/image/assets/31c7b1c5a83a4753853375a2754b402c/908b52567c05761a61c0979fd65758b228ed742f?placeholderIfAbsent=true"
				className="absolute inset-0 w-full h-full object-cover opacity-5 z-0"
				alt=""
			/>

			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
				{/* Header Section */}
				<div className="text-center mb-8 sm:mb-12 lg:mb-16 animate-fadeInUp">
					<div className="flex flex-col space-y-6 lg:space-y-0 lg:flex-row lg:justify-between lg:items-center mb-6 sm:mb-8">
						<div className="flex-1 text-center lg:text-left">
							<h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#083D77] mb-3 sm:mb-4 leading-tight">
								LỘ TRÌNH HỌC DÀNH CHO <span className="bg-gradient-to-r from-[#FFEA00] to-[#FFD700] bg-clip-text text-transparent">TEENS</span>
							</h2>
							<div className="w-16 sm:w-20 h-1 bg-gradient-to-r from-[#FFEA00] to-[#FFD700] mx-auto lg:mx-0 rounded-full"></div>
						</div>
						
						<div className="flex justify-center lg:justify-end animate-fadeInRight delay-200">
							<div className="flex items-center space-x-3 bg-white/90 backdrop-blur-sm px-3 sm:px-4 py-2 sm:py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
								<div className="w-10 sm:w-12 h-10 sm:h-12 bg-gradient-to-r from-[#FFEA00] to-[#FFD700] rounded-full flex items-center justify-center shadow-md">
									<img
										src="https://cdn.builder.io/api/v1/image/assets/31c7b1c5a83a4753853375a2754b402c/7fe39650d3675ad48497574ab2254dab7be7286e?placeholderIfAbsent=true"
										className="w-6 sm:w-8 h-6 sm:h-8 object-contain"
										alt="Wings of Opportunity"
									/>
								</div>
								<div className="text-xs sm:text-sm font-semibold text-[#083D77] leading-tight">
									Wings of<br />Opportunity
								</div>
							</div>
						</div>
					</div>
					
					<p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto px-4 sm:px-0">
						Lộ trình học tập có cấu trúc và khoa học, giúp học viên phát triển từng bước một cách vững chắc
					</p>
				</div>

				{/* Level Cards Section */}
				<div className="mb-8 sm:mb-12 animate-fadeInUp delay-300">
					{/* Mobile: Single column scrollable */}
					<div className="block sm:hidden">
						<div className="space-y-4">
							{levelData.map((level, index) => (
								<div key={index} className="animate-scaleIn" style={{ animationDelay: `${index * 0.1}s` }}>
									<LevelCard
										title={level.title}
										subtitle={level.subtitle}
										skills={level.skills}
										backgroundColor={level.backgroundColor}
									/>
								</div>
							))}
						</div>
					</div>

					{/* Tablet: 2 columns */}
					<div className="hidden sm:block lg:hidden">
						<div className="grid grid-cols-2 gap-4">
							{levelData.map((level, index) => (
								<div key={index} className="animate-scaleIn" style={{ animationDelay: `${index * 0.1}s` }}>
									<LevelCard
										title={level.title}
										subtitle={level.subtitle}
										skills={level.skills}
										backgroundColor={level.backgroundColor}
									/>
								</div>
							))}
						</div>
					</div>

					{/* Desktop: 5 columns */}
					<div className="hidden lg:block">
						<div className="grid grid-cols-5 gap-4">
							{levelData.map((level, index) => (
								<div key={index} className="animate-scaleIn" style={{ animationDelay: `${index * 0.1}s` }}>
									<LevelCard
										title={level.title}
										subtitle={level.subtitle}
										skills={level.skills}
										backgroundColor={level.backgroundColor}
									/>
								</div>
							))}
						</div>
					</div>
				</div>

				{/* Certification and Duration Section */}
				<div className="bg-white/80 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 shadow-xl border border-gray-200 animate-fadeInUp delay-500 mb-8 sm:mb-12">
					<div className="space-y-4 sm:space-y-6">
						{/* Cambridge Row */}
						<div className="animate-fadeInLeft delay-600">
							<CertificationRow
								label={cambridgeData.label}
								items={cambridgeData.items}
							/>
						</div>

						{/* CEFR Row */}
						<div className="animate-fadeInLeft delay-700">
							<div className="flex flex-col sm:flex-row gap-2 sm:gap-4 items-start w-full">
								<div className="text-sm font-extrabold text-[#083D77] w-full sm:w-20 flex-shrink-0 mb-2 sm:mb-0">CEFR</div>
								<div className="flex flex-1 justify-center items-center text-xs text-center text-blue-900 min-w-0 w-full">
									<div className="flex flex-col justify-center w-full">
										<div className="grid grid-cols-2 sm:flex sm:flex-wrap gap-2 items-start w-full">
											{cefrData.items.map((item, index) => (
												<div
													key={index}
													className="overflow-hidden px-1 pt-1 pb-2 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-md border-2 border-gray-300 shadow-[3px_3px_0px_rgba(34,34,34,1)] hover:shadow-[5px_5px_0px_rgba(34,34,34,1)] transition-all duration-300 hover:scale-105 sm:flex-1 sm:min-w-0"
												>
													<div className="overflow-hidden gap-1.5 self-stretch px-2 sm:px-3.5 py-1.5 w-full bg-white rounded-md border border-gray-300 shadow-[1px_1px_0px_rgba(34,34,34,1)] font-semibold text-xs">
														{item.text}
													</div>
												</div>
											))}
										</div>
									</div>
								</div>
							</div>
						</div>

						{/* Duration Row */}
						<div className="animate-fadeInLeft delay-800">
							<div className="flex flex-col sm:flex-row gap-2 sm:gap-4 items-start w-full">
								<div className="text-sm font-extrabold text-[#083D77] w-full sm:w-20 flex-shrink-0 mb-2 sm:mb-0">Thời lượng</div>
								<div className="flex flex-1 justify-center items-center text-xs text-center text-blue-900 min-w-0 w-full">
									<div className="flex flex-col justify-center w-full">
										<div className="grid grid-cols-2 sm:flex sm:flex-wrap gap-2 items-start w-full">
											{durationData.items.map((item, index) => (
												<div
													key={index}
													className="overflow-hidden px-1 pt-1 pb-2 bg-gradient-to-r from-[#FFEA00] to-[#FFD700] rounded-md border-2 border-gray-300 shadow-[3px_3px_0px_rgba(34,34,34,1)] hover:shadow-[5px_5px_0px_rgba(34,34,34,1)] transition-all duration-300 hover:scale-105 sm:flex-1 sm:min-w-0"
												>
													<div className="overflow-hidden gap-1.5 self-stretch px-2 sm:px-3.5 py-1.5 w-full bg-white rounded-md border border-gray-300 shadow-[1px_1px_0px_rgba(34,34,34,1)] font-semibold text-xs">
														{item.text}
													</div>
												</div>
											))}
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>

				{/* Achievement Badges */}
				<div className="animate-fadeInUp delay-900">
					<div className="bg-white/80 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 shadow-xl border border-gray-200">
						<h3 className="text-xl sm:text-2xl font-bold text-[#083D77] mb-4 sm:mb-6 text-center">
							Chứng chỉ và <span className="bg-gradient-to-r from-[#FFEA00] to-[#FFD700] bg-clip-text text-transparent">Thành tựu</span>
						</h3>
						<AchievementBadges badges={achievementBadges} />
					</div>
				</div>
			</div>

			{/* Decorative elements */}
			<img
				src="https://cdn.builder.io/api/v1/image/assets/31c7b1c5a83a4753853375a2754b402c/7c7df2b82b9b6f495a354806f8b5fe612a2ce08d?placeholderIfAbsent=true"
				className="absolute z-0 w-6 sm:w-10 h-5 sm:h-8 bottom-16 sm:bottom-32 left-12 sm:left-24 opacity-30 animate-float delay-1000"
				alt=""
			/>
		</section>
	);
};

export default RoadmapSection;