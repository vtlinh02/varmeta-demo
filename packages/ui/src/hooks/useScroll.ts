"use client"
import { useEffect, useState } from 'react'
import "./global.css"

export const useScroll = (id: string = "is-sticky", height: number = 180) => {
	const [scroll, setScroll] = useState(false)
	useEffect(() => {
		window.addEventListener('scroll', () => {
			const isScroll = window.scrollY > height
			setScroll(isScroll)
			const header = document.querySelector(`#${id}`)
			if (isScroll) {
				header?.classList.add('sticky')
			} else if (window.scrollY == 0) {
				header?.classList.remove('sticky')
			}
		})

	}, [])
	return { scroll }
}