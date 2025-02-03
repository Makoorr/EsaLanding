"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Star, StarHalf } from "lucide-react"
import { v4 } from "uuid"

export function PercentageIndicator(props: Props) {
  const [percentageValue, setPercentageValue] = useState(props.percentage);
  const [key, setKey] = useState(v4());
  const radius = 50;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference * ((100 - props.percentage) / 100);

  useEffect(() => {
    setKey(v4());
  }, [percentageValue])

  return (
    <div className="flex justify-center gap-6 sm:py-10">
      <div 
        className="percentage-circle relative"
        onMouseEnter={() => setPercentageValue(100 - props.percentage)}
        onMouseLeave={() => setPercentageValue(props.percentage)}
      >
        <svg width="250" height="250" viewBox="0 0 120 120">
          <motion.circle
            key={key}
            cx="60" cy="60" r={radius}
            fill="transparent"
            stroke="#8b5cf6"
            strokeWidth="12"
            transform="rotate(-90 60 60)"
            initial={{ strokeDashoffset: circumference }}
            animate={{ strokeDashoffset }}
            transition={{ duration: 1, delay: 2 }}
          />
          <motion.circle
            key={key + 1}
            cx="60" cy="60" r={radius}
            fill="transparent"
            stroke="#06b6d4"
            strokeWidth="12"
            transform="rotate(-90 60 60)"
            strokeDasharray={circumference}
            strokeDashoffset={circumference}
            initial={{ strokeDashoffset: circumference }}
            animate={{ strokeDashoffset }}
            transition={{ duration: 1 }}
          />
          <motion.circle
            key={key + 2}
            cx="60" cy="60" r={radius}
            stroke="#ffffff"
            strokeWidth="12"
            strokeDasharray="1 3"
            fill="none"
          />
        </svg>
        <div className="text-center -translate-y-40">
          <span className={`text-6xl font-semibold ${percentageValue === props.percentage ? "text-cyan-500" : "text-violet-500"}`}>
            {percentageValue}%
          </span>
        </div>
      </div>
      <div className="flex flex-col gap-2 pt-8 w-[50rem]">
        <motion.p
          className={`font-semibold text-4xl ${percentageValue === props.percentage ? "text-cyan-500" : "text-violet-500"}`}
        >
          {(percentageValue == props.percentage) ? props.text1 : props.text2}
        </motion.p>
        <div className="flex gap-3 text-orange-400">
          <motion.div
            key={key + 3}
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <Star strokeWidth="1" stroke="#fb923c" className={(percentageValue === props.percentage ? "fill-current " : "") + "h-12 w-12"} />
          </motion.div>
          <motion.div
            key={key + 4}
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <Star strokeWidth="1" stroke="#fb923c" className={(percentageValue === props.percentage ? "fill-current " : "") + "h-12 w-12"} />
          </motion.div>
          <motion.div
            key={key + 5}
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Star strokeWidth="1" stroke="#fb923c" className={(percentageValue === props.percentage ? "fill-current " : "") + "h-12 w-12"} />
          </motion.div>
          <motion.div
            key={key + 6}
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <Star strokeWidth="1" stroke="#fb923c" className={(percentageValue === props.percentage ? "fill-current " : "") + "h-12 w-12"} />
          </motion.div>
          <span className="flex">
            <motion.div
              key={key + 7}
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <StarHalf strokeWidth="1" stroke="#fb923c" className={(percentageValue === props.percentage ? "fill-current " : "") + "h-12 w-12"} />
            </motion.div>
            <motion.div
              key={key + 8}
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <Star strokeWidth="1" stroke="#fb923c" className={(percentageValue === props.percentage ? "" : "fill-current ") + "h-12 w-12 -translate-x-12"}
                style={{ maskImage: "linear-gradient(to left, black 50%, transparent 50%)",
                WebkitMaskImage: "linear-gradient(to left, black 50%, transparent 50%)"
                }}
              />
            </motion.div>
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