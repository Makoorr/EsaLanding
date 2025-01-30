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
            stroke="#0ea5e9"
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
            strokeDasharray="1 2"
            fill="none"
          />
        </svg>
          <div className="text-center -translate-y-[7rem]">
            <span className={`text-4xl font-bold ${percentageValue === props.percentage ? "text-sky-500" : "text-violet-500"}`}>
              {percentageValue}%
            </span>
          </div>
      </div>
      <div className="flex flex-col gap-2 pt-8 w-[34rem]">
        <motion.p
          className={`font-bold text-2xl ${percentageValue === props.percentage ? "text-sky-500" : "text-violet-500"}`}
        >
          {(percentageValue == props.percentage) ? props.text1 : props.text2}
        </motion.p>
        <div className="flex gap-3 text-orange-400">
          <Star className="h-8 w-8 fill-current" />
          <Star className="h-8 w-8 fill-current" />
          <Star className="h-8 w-8 fill-current" />
          <Star className="h-8 w-8 fill-current" />
          <StarHalf className="h-8 w-8 fill-current" />
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