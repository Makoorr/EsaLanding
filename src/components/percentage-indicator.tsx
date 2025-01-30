"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Star, StarHalf } from "lucide-react"

export function PercentageIndicator(props: Props) {
  const [percentageValue, setPercentageValue] = useState(props.percentage);
  const radius = 50;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference * ((100 - props.percentage) / 100);

  return (
    <div className="flex justify-center gap-6 py-10">
      <div className="percentage-circle relative">
        <svg width="180" height="180" viewBox="0 0 120 120">
          <motion.circle
            cx="60" cy="60" r={radius}
            stroke="#8b5cf6"
            strokeWidth="12"
            fill="none"
            onMouseEnter={() => setPercentageValue(100 - props.percentage)}
            onMouseLeave={() => setPercentageValue(props.percentage)}
            transform="rotate(-90 60 60)"
          />
          <motion.circle
            cx="60" cy="60" r={radius}
            fill="transparent"
            stroke="#06b6d4"
            strokeWidth="12"
            transform="rotate(-90 60 60)"
            onMouseEnter={() => setPercentageValue(props.percentage)}
            strokeDasharray={circumference}
            strokeDashoffset={circumference}
            animate={{ strokeDashoffset }}
          />
          <motion.circle
            cx="60" cy="60" r={radius}
            stroke="#ffffff"
            strokeWidth="12"
            strokeDasharray="1 3"
            fill="none"
          />
        </svg>
          <div className="text-center -translate-y-[7rem]">
            <span className={`text-4xl font-semibold ${percentageValue === props.percentage ? "text-cyan-500" : "text-violet-500"}`}>
              {percentageValue}%
            </span>
          </div>
      </div>
      <div className="flex flex-col gap-2 pt-8 w-[34rem]">
        <motion.p
          className={`font-semibold text-2xl ${percentageValue === props.percentage ? "text-cyan-500" : "text-violet-500"}`}
        >
          {(percentageValue == props.percentage) ? props.text1 : props.text2}
        </motion.p>
        <div className="flex gap-3 text-orange-400">
          <Star strokeWidth="1" stroke="#fb923c" className="h-12 w-12 fill-current" />
          <Star strokeWidth="1" stroke="#fb923c" className="h-12 w-12 fill-current" />
          <Star strokeWidth="1" stroke="#fb923c" className="h-12 w-12 fill-current" />
          <Star strokeWidth="1" stroke="#fb923c" className="h-12 w-12 fill-current" />
            <span className="flex">
              <StarHalf strokeWidth="1" stroke="#fb923c" className="h-12 w-12 fill-current" />
              <Star strokeWidth="1" stroke="#fb923c" className="h-12 w-12 -translate-x-12"
                style={{ maskImage: "linear-gradient(to left, black 50%, transparent 50%)",
                WebkitMaskImage: "linear-gradient(to left, black 50%, transparent 50%)"
                }}
              />
            </span>
        </div>
      </div>
    </div>
  )
}

interface Props {
  percentage: number
  text1: string
  text2: string
}