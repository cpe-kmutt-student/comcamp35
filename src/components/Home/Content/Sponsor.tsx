import { Flex, Heading, Grid } from '@radix-ui/themes'
import React from 'react'
import styles from './sponsor.module.scss'
import LDA from 'src/assets/lda_logo.webp'
import ThaiData from 'src/assets/thaidata_logo.webp'
import Advice from 'src/assets/advice_logo.webp'

interface ISponsor {
  img: string
  level?: string
}

enum SponsorTier {
  DIAMOND = 'Diamond',
  GOLD = 'Gold',
  PLATINUM = 'Platinum',
  SILVER = 'Silver',
  BRONZE = 'Bronze',
}

const Sponsors: ISponsor[] = [
  {
    img: Advice,
    level: SponsorTier.DIAMOND,
  },
  {
    img: LDA,
    level: SponsorTier.PLATINUM,
  },
  {
    img: ThaiData,
    level: SponsorTier.GOLD,
  },
]

const Sponsor: React.FC = () => {
  const renderSponsor = (rank: string) => {
    return Sponsors.filter((sponsor) => sponsor.level === rank).map((sponsor, i) => {
      let size_img = '60px'
      if (rank === SponsorTier.DIAMOND) {
        size_img = '150px'
      } else if (rank === SponsorTier.PLATINUM) {
        size_img = '100px'
      }
      return (
        <div key={i} className={styles.logo}>
          <img src={sponsor.img} style={{ width: size_img }} alt={`sponsor-${i}`} />
        </div>
      )
    })
  }

  return (
    <Flex direction="column" justify="center" align="center" className={styles.sponsor} mt={{ initial: '9', md: '0' }}>
      <Heading size={{ initial: '8', md: '9' }} className="title">
        SPONSOR
      </Heading>
      <Grid columns={{ initial: '1', sm: '1', md: '1' }} className={styles.contents}>
        {renderSponsor('Diamond')}
      </Grid>
      <Grid columns={{ initial: '1', sm: '1', md: '1' }} className={styles.contents}>
        {renderSponsor('Platinum')}
      </Grid>
      <Grid columns={{ initial: '1', sm: '1', md: '1' }} className={styles.contents}>
        {renderSponsor('Gold')}
      </Grid>
    </Flex>
  )
}

export default Sponsor
