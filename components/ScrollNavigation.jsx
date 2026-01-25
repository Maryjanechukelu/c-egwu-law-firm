// components/ScrollNavigation.jsx
"use client"

import { useState, useEffect, useCallback } from "react"
import { ChevronUp, ChevronDown } from "lucide-react"

export function ScrollNavigation() {
  const [isVisible, setIsVisible] = useState(false)
  const [scrollDirection, setScrollDirection] = useState("top") // Remove TypeScript annotation
  const [lastScrollTop, setLastScrollTop] = useState(0)

  const checkScrollPosition = useCallback(() => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop
    const windowHeight = window.innerHeight
    const documentHeight = document.documentElement.scrollHeight

    // Show button after scrolling down 200px
    setIsVisible(scrollTop > 200)

    // Determine if we should show top or bottom button
    const isNearBottom = (scrollTop + windowHeight) >= (documentHeight - 200)
    setScrollDirection(isNearBottom ? "top" : "bottom")

    setLastScrollTop(scrollTop)
  }, [lastScrollTop])

  useEffect(() => {
    const handleScroll = () => {
      checkScrollPosition()
    }

    window.addEventListener("scroll", handleScroll)
    checkScrollPosition() // Initial check
    return () => window.removeEventListener("scroll", handleScroll)
  }, [checkScrollPosition])

  const handleClick = () => {
    if (scrollDirection === "top") {
      window.scrollTo({ top: 0, behavior: "smooth" })
    } else {
      window.scrollTo({
        top: document.documentElement.scrollHeight,
        behavior: "smooth"
      })
    }
  }

  if (!isVisible) return null

  return (
    <button
      onClick={handleClick}
      className={`
        fixed left-6 bottom-6 md:bottom-8 z-50
        p-3 rounded-full shadow-lg transition-all duration-300
        group hover:scale-110
        ${scrollDirection === "top"
          ? "bg-amber-600 hover:bg-amber-800"
          : "bg-amber-600 hover:bg-amber-800"}
      `}
      aria-label={scrollDirection === "top" ? "Scroll to top" : "Scroll to bottom"}
    >
      <div className="relative h-6 w-6">
        <ChevronUp className={`
          absolute inset-0 h-6 w-6 transition-all duration-300 text-white
          ${scrollDirection === "top"
            ? "opacity-100 rotate-0"
            : "opacity-0 rotate-180"}
        `} />
        <ChevronDown className={`
          absolute inset-0 h-6 w-6 transition-all duration-300 text-white
          ${scrollDirection === "bottom"
            ? "opacity-100 rotate-0"
            : "opacity-0 rotate-180"}
        `} />
      </div>

      {/* Tooltip */}
      <div className="absolute left-full top-1/2 -translate-y-1/2 mr-3 px-2 py-1 bg-amber-600 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
        {scrollDirection === "top" ? "Go to top" : "Go to bottom"}
      </div>
    </button>
  )
}