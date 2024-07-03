"use client"
import React from 'react'
import { Category } from '@repo/ui'
import HeroSection from '@/components/HeroSection/HeroSection'

const HomePage = () => {
  return (
    <>
      <HeroSection />
      <div className='container flex flex-wrap w-full gap-6 justify-center mt-10 sm:mt-20 md:mt-32'>
        <Category
          projects={[
            { logo: "https://img.freepik.com/free-vector/realistic-cardano-coin-illustration_52683-78384.jpg?semt=ais_user" },
            { logo: "https://img.freepik.com/free-vector/blockchain-concept_23-2147856383.jpg?semt=ais_user" },
            { logo: "https://img.freepik.com/free-vector/gradient-isometric-nft-concept_52683-62009.jpg?semt=ais_user" },
            { logo: "https://img.freepik.com/free-psd/3d-nft-icon-chain_629802-28.jpg?semt=ais_user" }
          ]}
          title='DeFi'
          link="/ecosystem/defi"
        />
        <Category
          projects={[
            { logo: "https://img.freepik.com/free-vector/realistic-cardano-coin-illustration_52683-78384.jpg?semt=ais_user" },
            { logo: "https://img.freepik.com/free-psd/3d-nft-icon-chain_629802-28.jpg?semt=ais_user" },
            { logo: "https://img.freepik.com/free-vector/blockchain-concept_23-2147856383.jpg?semt=ais_user" },
            { logo: "https://img.freepik.com/free-vector/gradient-isometric-nft-concept_52683-62009.jpg?semt=ais_user" }
          ]}
          title='Wallets'
          link="/ecosystem/defi"
        />
        <Category
          projects={[
            { logo: "https://img.freepik.com/free-psd/3d-nft-icon-chain_629802-28.jpg?semt=ais_user" },
            { logo: "https://img.freepik.com/free-vector/realistic-cardano-coin-illustration_52683-78384.jpg?semt=ais_user" },
            { logo: "https://img.freepik.com/free-vector/blockchain-concept_23-2147856383.jpg?semt=ais_user" },
            { logo: "https://img.freepik.com/free-vector/gradient-isometric-nft-concept_52683-62009.jpg?semt=ais_user" }
          ]}
          title='Memecoins'
          link="/ecosystem/defi"
        />
        <Category
          projects={[
            { logo: "https://img.freepik.com/free-vector/realistic-cardano-coin-illustration_52683-78384.jpg?semt=ais_user" },
            { logo: "https://img.freepik.com/free-vector/blockchain-concept_23-2147856383.jpg?semt=ais_user" },
            { logo: "https://img.freepik.com/free-psd/3d-nft-icon-chain_629802-28.jpg?semt=ais_user" },
            { logo: "https://img.freepik.com/free-vector/gradient-isometric-nft-concept_52683-62009.jpg?semt=ais_user" }
          ]}
          title='NFT Collections'
          link="/ecosystem/defi"
        />
      </div>
    </>
  )
}

export default HomePage