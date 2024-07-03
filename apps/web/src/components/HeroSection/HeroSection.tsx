"use client"
import { RectangleGroup, useScroll } from "@repo/ui"
import { SearchMdIcon } from '@var-meta/icons'
import { Heading, Input } from '@var-meta/ui'

const HeroSection = () => {
	const { scroll } = useScroll()
	const lineOne = [
		"https://images.thedapplist.com/prod/uploads/projects/image_1694354043720_carrot.png",
		"https://images.thedapplist.com/prod/uploads/projects/image_1713262925439_light.png",
		"https://images.thedapplist.com/prod/uploads/projects/image_1713202006632_d-rpc.jpeg",
	]
	const lineTwo = [
		"https://images.thedapplist.com/prod/uploads/projects/image_1713197059581_subsquid.jpeg",
		"https://images.thedapplist.com/prod/uploads/projects/image_1709116925030_layer-zero.jpeg",
		"https://images.thedapplist.com/dev/uploads/proposals/avatar_pool-together.png",
		"https://images.thedapplist.com/prod/uploads/projects/image_1707804001192_den.jpeg",
	]
	const lineThree = [
		"https://images.thedapplist.com/prod/uploads/projects/image_1705834562040_hopr-staking-hub.png",
		"https://images.thedapplist.com/prod/uploads/projects/image_1705674839766_ucf-finance.png",
		"https://images.thedapplist.com/prod/uploads/projects/image_1691752774323_aragon.jpeg",
		"https://images.thedapplist.com/prod/uploads/projects/image_1705493502000_triangle.jpeg",
		"https://images.thedapplist.com/prod/uploads/projects/image_1704351903210_hyperlane.jpeg",
	]
	const lineFour = [
		"https://images.thedapplist.com/prod/uploads/projects/image_1704185409018_walletbeat-fyi.jpeg",
		"https://images.thedapplist.com/prod/uploads/projects/image_1697556638632_envio.png",
		"https://images.thedapplist.com/prod/uploads/projects/image_1701693577729_rubic.png",
		"https://images.thedapplist.com/prod/uploads/projects/image_1700824970222_indexed.jpeg",
	]
	const lineFive = [
		"https://images.thedapplist.com/prod/uploads/projects/image_1700115379235_delegate.png",
		"https://images.thedapplist.com/prod/uploads/projects/image_1713440327185_layer-3.jpeg",
		"https://images.thedapplist.com/prod/uploads/projects/image_1698243533973_flooz.png",
	]
	return (
		<div className='bg-[#312cc9] h-[calc(50vh-64px)] w-full flex flex-col justify-center items-center relative'>
			<div className="container flex justify-around w-full items-center">
				<Heading size="7xl" weight="semibold" align="center" className='text-white'>Built on Gno</Heading>
				<div className="hidden md:flex md:flex-col gap-1">
					<RectangleGroup className="justify-start" srcs={lineOne} />
					<RectangleGroup className="justify-start" srcs={lineTwo} />
					<RectangleGroup className="justify-start" srcs={lineThree} />
					<RectangleGroup className="justify-end" srcs={lineFour} />
					<RectangleGroup className="justify-end" srcs={lineFive} />
				</div>
			</div>
			<div className={`${scroll ? 'fixed top-[20px]' : 'absolute bottom-[-20px]'}  w-full h-fit max-w-lg px-10`} id="is-sticky">
				<Input className='rounded-full border-2 h-12' size='md' placeholder='Start typing search' prefix={<span>Gno</span>} suffix={<SearchMdIcon />} />
			</div>
		</div>
	)
}

export default HeroSection